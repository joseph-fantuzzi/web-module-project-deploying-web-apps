import React from "react";
import "../styles/Member.css";

function Member(props) {
  const { member } = props;

  return (
    <div className="member-items">
      <h2>{member.name.toUpperCase()}</h2>
      <p>Email: {member.email}</p>
      <p>Role: {member.role}</p>
    </div>
  );
}

export default Member;
