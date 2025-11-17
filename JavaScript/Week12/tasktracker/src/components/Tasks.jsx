const tasks = [
  {
    id: 1,
    text: "Doctor Appointment",
    day: "December 12,2025 at 2:30pm",
    reminder: true,
  },
  {
    id: 2,
    text: "School meeting",
    day: "December 11,2025 at 12:30pm",
    reminder: false,
  },
  {
    id: 3,
    text: "Shopping",
    day: "January 12,2025 at 2:00pm",
    reminder: false,
  },
];

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.text}</h3>
          <h3>{task.day}</h3>
        </div>
      ))}
    </>
  );
};

export default Tasks;
