import "../styles/Input.css";
function Input({
  type = "text",
  onChange,
  value = "",
  maxLength = "50",
  required = true,
  name = "",
}) {
  return (
    <div className="input">
      <label className="input-label" htmlFor={name}>
        {name}
      </label>
      <input
        className="input-input"
        type={type}
        onChange={onChange}
        maxLength={maxLength}
        required={required}
        id={name}
        value={value}
        placeholder={`Enter your ${name[0].toLowerCase() + name.slice(1)}`}
      />
    </div>
  );
}

function TextArea({
  type = "text",
  onChange,
  value = "",
  maxLength = "150",
  required = false,
  name = "",
}) {
  return (
    <div className="textarea">
      <label className="textarea-label" htmlFor={name}>
        {name}
      </label>
      <textarea
        className="textarea-input"
        type={type}
        onChange={onChange}
        maxLength={maxLength}
        required={required}
        id={name}
        value={value}
        placeholder={`Enter your ${name[0].toLowerCase() + name.slice(1)}`}
      />
    </div>
  );
}

export { Input, TextArea };
