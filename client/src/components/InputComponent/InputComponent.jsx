export function InputComponent({ type, label, id, name, value, onChange }) {
  return (
    <div className="group relative my-2 flex h-24 w-96 items-center justify-center text-slate-700 first:mt-8">
      <label
        className="absolute left-0.5 top-7 text-lg transition-all duration-1000 ease-out group-focus-within:top-0"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="w-full border-b border-slate-400 focus:outline-none focus:group-has-[label]:text-xl"
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
