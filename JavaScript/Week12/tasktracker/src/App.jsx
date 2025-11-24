import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
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

  const [showAddTask, setShowAddTask] = useState(false);
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

  // Add task

  const addTask = (task) => {
    // since no id is taken as input we create our own id first to add to the new record
    const id = Math.floor(Math.random() * 1000) + 1;

    const newTask = { id, ...task }; //add the generated id with the task in consideration....

    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
}

export default App;
