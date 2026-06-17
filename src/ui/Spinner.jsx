function Spinner() {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="border-primary-green/30 border-t-primary-green h-14 w-14 animate-spin rounded-full border-4" />
    </div>
  );
}

export default Spinner;
