/** Header nav link — hover: bg primary, white text, floats up (like the right-side menu). */
export default function MenuLink({
  label,
  href = "#",
  onClick,
  className = "",
}: {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`block cursor-pointer rounded-2xl px-4 py-3 text-base font-medium text-ink transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-primary hover:text-white hover:shadow-[0_10px_22px_-8px_rgba(136,60,250,0.5)] ${className}`}
    >
      {label}
    </a>
  );
}
