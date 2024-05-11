export default function Button({
  children,
  className,
  onClick,
  type,
}: {
  children: string;
  className?: string;
  onClick?: any;
  type?: "reset" | "submit";
}) {
  return (
    <button
      className={`px-4 bg-blue rounded-lg text-white ${className && className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
