import { cn } from "@/lib/utils";
import { company } from "@/data/company";
import colorLogo from "@/assets/skyline-logo-color.png";
import whiteLogo from "@/assets/skyline-logo-white.png";

/** Company logo: colour version on light backgrounds, white version on dark. */
export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span className={cn("flex items-center", className)}>
      <img
        src={tone === "light" ? whiteLogo : colorLogo}
        alt={company.legalName}
        width={1920}
        height={616}
        className="h-10 w-auto sm:h-12"
      />
    </span>
  );
}
