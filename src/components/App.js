import React, { useState } from "react";
import "../styles/App.css";
import Form from "./Form";
import Member from "./Member";

const initialTeam = {
  name: "",
  email: "",
  role: "",
};

function App() {
  const [currentTeam, setCurrentTeam] = useState(initialTeam);
  const [team, setTeam] = useState([]);
  const [appearance, setAppearance] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="container">
      <h1 className="title">Team Builder</h1>
      {error && <h2 className="error-msg">{error}</h2>}
      <Form
        setError={setError}
        setAppearance={setAppearance}
        initialTeam={initialTeam}
        team={team}
        setTeam={setTeam}
        currentTeam={currentTeam}
        setCurrentTeam={setCurrentTeam}
      />
      {appearance && (
        <div className="member-container">
          <h1 className="team-title">Team Members:</h1>
          {team.map((member, index) => {
            return <Member key={index} member={member} />;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
