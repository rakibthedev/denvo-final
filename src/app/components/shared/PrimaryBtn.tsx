import { ArrowRight } from "lucide-react";

export default function PrimaryBtn({
  txt,
  arrow = false,
  className = "",
}: {
  txt: string;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-base font-medium text-white shadow-[0px_10px_30px_-8px_rgba(136,60,250,0.55)] transition-all duration-300 hover:bg-[#7a32e0] hover:scale-[1.02] active:scale-[0.98] ${className}`}
    >
      {txt}
      {arrow && <ArrowRight className="size-4" />}
    </button>
  );
}
