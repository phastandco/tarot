const Input = ({ placeholder, value, onChange, name }) => {
  return (
    <input
      name={name}
      onChange={onChange}
      value={value}
      className="w-full mt-3 text-black text-sm rounded-lg p-2"
      placeholder={placeholder}
    />
  );
};

export default Input;
