import { useState } from "react";

export default function UsernameForm() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Submitted: ${username}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
