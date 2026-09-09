"use client";

import { useRef, useEffect } from "react";
import { Renderer, Program, Mesh, Triangle, Color } from "ogl";

const PAD = 20;

const VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `#version 300 es
precision highp float;

uniform vec2 uCenter;
uniform vec2 uHalfSize;
uniform float uFlipY;
uniform float uChamfer;
uniform float uAngle;
uniform float uPx;
uniform vec3 uLineColor;
uniform vec3 uBaseColor;
uniform float uIntensity;
uniform float uShineSize;
uniform float uShineFade;
uniform float uThickness;
uniform float uBaseWidth;

out vec4 fragColor;

float sdSeg(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p - a, ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h);
}

// Card edge SDF: plain box everywhere except a chamfered top-right corner
// (CSS orientation: y down, origin at card center).
float shapeSDF(vec2 p) {
  vec2 b = uHalfSize;
  float c = min(uChamfer, min(b.x, b.y));
  vec2 m = vec2(p.x, -p.y);
  if (m.x >= 0.0 && m.y >= 0.0) {
    float d = sdSeg(m, vec2(b.x, 0.0), vec2(b.x, b.y - c));
    d = min(d, sdSeg(m, vec2(0.0, b.y), vec2(b.x - c, b.y)));
    d = min(d, sdSeg(m, vec2(b.x - c, b.y), vec2(b.x, b.y - c)));
    float inside = step(m.x, b.x) * step(m.y, b.y) * step(m.x + m.y, b.x + b.y - c);
    return mix(d, -d, inside);
  }
  vec2 q = abs(m) - b;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0);
}

float gaussianLine(float d, float sigma) {
  float x = d / (sigma + 1e-6);
  float k = mix(1.0, 1.6, smoothstep(0.0, 1.5, x));
  return exp(-k * x * x);
}

void main() {
  vec2 p = vec2(gl_FragCoord.x - uCenter.x, uFlipY - gl_FragCoord.y - uCenter.y);
  float d = shapeSDF(p);
  vec2 L = vec2(cos(uAngle), sin(uAngle));

  // Dark base stroke hugging the edge for a sense of thickness
  float base = (1.0 - smoothstep(0.0, uBaseWidth, abs(d))) * 0.45;

  // Symmetric specular: the edges facing toward/away from the light both
  // catch a streak. The angular window (size + fade) is measured with an
  // elliptical normal so it varies continuously along straight edges.
  vec2 nEll = normalize(p / (uHalfSize * uHalfSize) + 1e-6);
  float phi = acos(clamp(abs(dot(nEll, L)), 0.0, 1.0));
  float rim = 1.0 - smoothstep(uShineSize - uShineFade, uShineSize + uShineFade + 1e-4, phi);
  float line = gaussianLine(d, uThickness);
  float edgeClamp = 1.0 - smoothstep(0.5 * uPx, 3.0 * uPx, abs(d));
  float hi = line * rim * edgeClamp * uIntensity;

  vec3 col = uBaseColor * base + uLineColor * hi;
  float a = clamp(base + hi, 0.0, 1.0);
  fragColor = vec4(col, a);
}
`;

interface SpecularCardBorderProps {
  chamfer?: number;
  lineColor?: string;
  baseColor?: string;
  intensity?: number;
  shineSize?: number;
  shineFade?: number;
  thickness?: number;
  speed?: number;
  followMouse?: boolean;
  proximity?: number;
  autoAnimate?: boolean;
  className?: string;
}

/**
 * Mouse-following specular edge highlight (React Bits SpecularButtonChildren),
 * adapted as a hover overlay that traces the role cards' chamfered edge.
 * Renders a transparent WebGL canvas over its positioned parent and measures
 * the parent, so place it inside a `relative` (non-clipped) card wrapper.
 */
export default function SpecularCardBorder({
  chamfer = 32,
  lineColor = "#ff7936",
  baseColor = "#3d3d3d",
  intensity = 1.15,
  shineSize = 12,
  shineFade = 45,
  thickness = 1.25,
  speed = 0.35,
  followMouse = true,
  proximity = 300,
  autoAnimate = false,
  className = "",
}: SpecularCardBorderProps) {
  const boxRef = useRef<HTMLDivElement>(null);
  const propsRef = useRef({
    chamfer,
    lineColor,
    baseColor,
    intensity,
    shineSize,
    shineFade,
    thickness,
    speed,
    followMouse,
    proximity,
    autoAnimate,
  });

  propsRef.current = {
    chamfer,
    lineColor,
    baseColor,
    intensity,
    shineSize,
    shineFade,
    thickness,
    speed,
    followMouse,
    proximity,
    autoAnimate,
  };

  useEffect(() => {
    const box = boxRef.current;
    const target = box?.parentElement;
    if (!box || !target) return;

    const dpr = window.devicePixelRatio || 1;
    const renderer = new Renderer({ alpha: true, premultipliedAlpha: true, antialias: true, dpr });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    const geometry = new Triangle(gl);

    const program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uCenter: { value: [0, 0] },
        uHalfSize: { value: [1, 1] },
        uFlipY: { value: 1 },
        uChamfer: { value: 32 },
        uAngle: { value: 2.4 },
        uPx: { value: dpr },
        uLineColor: { value: [1, 1, 1] },
        uBaseColor: { value: [0.24, 0.24, 0.24] },
        uIntensity: { value: 1 },
        uShineSize: { value: 0.17 },
        uShineFade: { value: 0.7 },
        uThickness: { value: 1 },
        uBaseWidth: { value: dpr },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });
    gl.canvas.style.display = "block";
    gl.canvas.style.width = "100%";
    gl.canvas.style.height = "100%";
    box.appendChild(gl.canvas);

    const sizeRef = { w: 1, h: 1 };
    const resize = () => {
      // Fractional size + explicit center keep the SDF pinned to the exact
      // CSS border, instead of drifting up to a pixel from offsetWidth rounding.
      const rect = target.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      sizeRef.w = w;
      sizeRef.h = h;
      renderer.setSize(w + PAD * 2, h + PAD * 2);
      const p = propsRef.current;
      program.uniforms.uCenter.value = [(PAD + w / 2) * dpr, (PAD + h / 2) * dpr];
      program.uniforms.uHalfSize.value = [(w / 2) * dpr, (h / 2) * dpr];
      program.uniforms.uFlipY.value = (h + PAD * 2) * dpr;
      program.uniforms.uChamfer.value =
        Math.min(p.chamfer, Math.min(sizeRef.w, sizeRef.h) / 2) * dpr;
    };
    const ro = new ResizeObserver(resize);
    ro.observe(target);
    resize();

    // Light angle steers toward the pointer (anywhere on the page) and falls
    // back to a slow sweep when the pointer hasn't moved yet.
    let pointerAngle: number | null = null;
    let proximityT = 0;
    const onPointerMove = (e: PointerEvent) => {
      const rect = target.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = Math.max(rect.left - e.clientX, 0, e.clientX - rect.right);
      const dy = Math.max(rect.top - e.clientY, 0, e.clientY - rect.bottom);
      const dist = Math.hypot(dx, dy);
      // Over the card itself the light settles on the diagonal (framing the
      // corners) and gently sways with the cursor position within the card.
      // NOTE: angles are in y-down screen space to match the shader's
      // orientation-corrected coords (mirrored vs. the original component).
      if (dist === 0) {
        const nx = (e.clientX - cx) / (rect.width / 2);
        const ny = (e.clientY - cy) / (rect.height / 2);
        pointerAngle = Math.atan2(-2 / rect.height, -2 / rect.width) + nx * 0.3 + ny * 0.15;
      } else {
        pointerAngle = Math.atan2(e.clientY - cy, e.clientX - cx);
      }
      const t = Math.max(0, 1 - dist / Math.max(propsRef.current.proximity, 1));
      proximityT = t * t * (3 - 2 * t);
    };
    window.addEventListener("pointermove", onPointerMove);

    let angle = 2.4;
    let idleAngle = 2.4;
    let bright = 0;
    let last = performance.now();
    let raf = 0;

    const lineC = new Color();
    const baseC = new Color();

    const update = (now: number) => {
      raf = requestAnimationFrame(update);
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const p = propsRef.current;

      idleAngle += p.speed * dt;
      const steer = p.followMouse && pointerAngle != null && (!p.autoAnimate || proximityT > 0);
      const tgt = steer ? (pointerAngle as number) : idleAngle;
      const diff = ((tgt - angle + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
      angle += diff * (1 - Math.exp(-dt * 7));

      // Shine fades in with pointer proximity unless autoAnimate keeps it on
      const brightTarget = p.autoAnimate ? 1 : proximityT;
      bright += (brightTarget - bright) * (1 - Math.exp(-dt * 8));

      lineC.set(p.lineColor);
      baseC.set(p.baseColor);
      program.uniforms.uAngle.value = angle;
      program.uniforms.uLineColor.value = [lineC.r, lineC.g, lineC.b];
      program.uniforms.uBaseColor.value = [baseC.r, baseC.g, baseC.b];
      program.uniforms.uIntensity.value = p.intensity * bright;
      program.uniforms.uShineSize.value = (p.shineSize * Math.PI) / 180;
      program.uniforms.uShineFade.value = (p.shineFade * Math.PI) / 180;
      program.uniforms.uThickness.value = p.thickness * dpr;
      renderer.render({ scene: mesh });
    };
    raf = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      if (gl.canvas.parentNode === box) box.removeChild(gl.canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, []);

  return (
    <div
      ref={boxRef}
      aria-hidden="true"
      className={`pointer-events-none absolute -inset-5 z-20${className ? ` ${className}` : ""}`}
    />
  );
}
