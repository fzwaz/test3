import { Button } from "@/components/ui/button";
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyTitle,
} from "@/components/ui/empty";
import { HomeIcon, CompassIcon } from "lucide-react";

export function NotFound() {
	return (
		<div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
			<Empty>
				<EmptyHeader>
					<EmptyTitle className="mask-b-from-20% mask-b-to-80% font-extrabold text-[10rem] md:text-[13rem] leading-none">
						404
					</EmptyTitle>
					<EmptyDescription className="-mt-10 md:-mt-12 text-base md:text-lg text-nowrap text-foreground/80">
						The page you&apos;re looking for might have been <br />
						moved or doesn&apos;t exist.
					</EmptyDescription>
				</EmptyHeader>
				<EmptyContent>
					<div className="flex gap-2">
						<Button asChild className="bg-black text-white border border-white/25 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:bg-zinc-950 hover:border-white/50 hover:shadow-[0_0_32px_rgba(255,255,255,0.35)]">
							<a href="/">
								<HomeIcon
								className="size-4 mr-2" data-icon="inline-start" />
								Go Home
							</a>
						</Button>

						<Button asChild variant="outline" className="bg-black text-white border-white/25 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:bg-zinc-950 hover:text-white hover:border-white/50 hover:shadow-[0_0_32px_rgba(255,255,255,0.35)]">
							<a href="/platform">
								<CompassIcon
								className="size-4 mr-2"
								data-icon="inline-start" />{" "}
								Explore
							</a>
						</Button>
					</div>
				</EmptyContent>
			</Empty>
		</div>
	);
}
