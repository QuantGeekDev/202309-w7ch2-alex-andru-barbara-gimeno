import "./Input.css";

interface InputProps {
  number: number;
}

const Input = ({ number }: InputProps): React.ReactElement => {
  return <input className="input" type="text" value={number} readOnly />;
};

export default Input;
