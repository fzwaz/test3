import { NotFound } from "@/components/ui/not-found-2";

export const metadata = {
  title: "Page Not Found | Risknox",
  description:
    "The page you're looking for might have been moved or doesn't exist.",
};

export default function DemoOne() {
  return <NotFound />;
}
