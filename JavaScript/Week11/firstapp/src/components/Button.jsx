const Button = ({ text, color, txtcolor, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color, color: txtcolor }}
    >
      {text}
    </button>
  );
};

export default Button;

// background-color? ... backgroundColor
// Student.. and call it in App.jsx.. by passing your name and age.. and recive that in Student component and display
