export default function SectionBadge({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-purple-3 bg-brand-50 px-4 py-1.5 text-sm font-medium text-primary ${className}`}
    >
      {label}
    </span>
  );
}
