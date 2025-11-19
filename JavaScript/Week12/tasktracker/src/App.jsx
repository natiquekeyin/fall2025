import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appointment",
      day: "December 12,2025 at 2:30pm",
      reminder: false,
    },
    {
      id: 2,
      text: "School meeting",
      day: "December 11,2025 at 12:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Shopping",
      day: "January 12,2025 at 2:00pm",
      reminder: true,
    },
  ]);

  // Delete task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header title="Task Tracker" />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
}

export default App;
