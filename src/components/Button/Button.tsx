interface ButtonProps {
  symbol: "+" | "-";
  actionOnClick: () => void;
  text: string;
  type?: "button";
  modifier?: string;
}

const Button = ({
  symbol,
  actionOnClick,
  text,
}: ButtonProps): React.ReactElement => {
  return (
    <button className="button" onClick={actionOnClick}>
      {symbol}
      {text}
    </button>
  );
};

export default Button;
