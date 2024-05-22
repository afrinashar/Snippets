import { useState } from "react"
import PropTypes from "prop-types";

const Input = ({ value, onChange, placeholder }) => {
    const [inputValue, setInputValue] = useState(value);
  
    const handleChange = (e) => {
      const newValue = e.target.value;
      setInputValue(newValue);
      onChange(newValue);
    };
  
    return (
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        style={{
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          width: '100%',
          boxSizing: 'border-box',
        }}
      />
    );
  };
  Input.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string  
  };

export default Input