function MiniSpinner({ className, size = "s" }) {
  const spinnerSize = `${size === "s" ? "h-5 w-5 border-2" : size === "md" ? "h-10 w-10 border-2" : size === "lg" ? "h-15 w-15 border-3" : size === "xl" ? "h-20 w-20 border-4" : ""}`;

  return (
    <div
      className={`border-primary-green/30 border-t-primary-green animate-spin rounded-full ${spinnerSize} ${className}`}
    />
  );
}

export default MiniSpinner;
