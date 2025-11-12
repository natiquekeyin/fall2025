import "./App.css";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Header from "./components/Header";
import Button from "./components/Button";
import Student from "./components/Student";

function App() {
  const onClick = () => {
    console.log("Click!");
  };
  return (
    <>
      <main>
        <h1 style={{ color: "blue" }}>Keyin College!</h1>
        <Header
          title="Todo List"
          text="This is a todo list that will show my todos"
        />
        <Button text="Open" color="green" txtcolor="white" onClick={onClick} />
        <Button text="Close" color="red" txtcolor="black" onClick={onClick} />
        {/* <Button text="Pause" color="gray" txtcolor="pink" />
        <Button text="Again" color="yellow" txtcolor="gray" /> */}

        <Student name="Alic" age={22} />
        <Student name="Bob" age={25} />
      </main>
    </>
  );
}

export default App;
