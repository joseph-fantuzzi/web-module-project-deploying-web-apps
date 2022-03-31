import React from "react";
import "../styles/Form.css";

function Form(props) {
  const { setError, setAppearance, initialTeam, currentTeam, setCurrentTeam, team, setTeam } =
    props;

  const onChange = (event) => {
    setCurrentTeam({
      ...currentTeam,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (!currentTeam.name || !currentTeam.email || !currentTeam.role) {
      setError("🚨 Invalid Input. Fill Out All Fields. 🚨");
      return;
    }

    setTeam([...team, currentTeam]);
    setCurrentTeam(initialTeam);
    setAppearance(true);
    setError("");
  };

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <label htmlFor="name">Full Name:</label>
      <input type="text" id="name" name="name" value={currentTeam.name} onChange={onChange} />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={currentTeam.email} onChange={onChange} />
      <label htmlFor="role">Role:</label>
      <select value={currentTeam.role} id="role" name="role" onChange={onChange}>
        <option value="" className="selection">
          Select a Role
        </option>
        <option value="Frontend Engineer">Frontend Engineer</option>
        <option value="Backend Engineer">Backend Engineer</option>
        <option value="UI Designer">UI Designer</option>
        <option value="UX Designer">UX Designer</option>
        <option value="Data Scientist">Data Scientist</option>
      </select>
      <button>Create Member</button>
    </form>
  );
}

export default Form;
