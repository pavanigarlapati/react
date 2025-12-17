import MessageCard from "./MessageCard";

function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <MessageCard
        title="Welcome"
        message="Welcome to React props example."
      />

      <MessageCard
        title="Reminder"
        message="Don't forget to practice React every day."
      />

      <MessageCard
        title="Success"
        message="You have successfully created a reusable component."
      />

      <MessageCard
        title="Motivation"
        message="Keep going, you are doing great!"
      />
    </div>
  );
}

export default App;
