function MiniSpinner({ className }) {
  return (
    <div
      className={`border-primary-green/30 border-t-primary-green h-5 w-5 animate-spin rounded-full border-2 ${className}`}
    />
  );
}

export default MiniSpinner;
