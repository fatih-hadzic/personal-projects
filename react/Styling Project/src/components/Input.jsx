export default function Input({ label, invalid, ...props }) {
  const labelClasses =
    "block mb-2 text-xs font-bold tracking-wide uppercase " +
    (invalid ? "text-red-400" : "text-stone-300");

  const inputClasses =
    "w-full px-3 py-2 leading-tight border rounded shadow " +
    (invalid
      ? "bg-red-200 border-red-400 text-red-600"
      : "bg-stone-300 border-transparent text-gray-700");

  return (
    <div className="w-full">
      <label className={labelClasses}>{label}</label>
      <input className={inputClasses} {...props} />
    </div>
  );
}
