// import { useState } from "react";

// export default function UsernameForm() {
//   const [username, setUsername] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     alert(`Submitted: ${username}`);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Username
//         <input
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder="Enter username"
//         />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

import { useState } from "react";

export default function UsernameForm() {
  const [username, setUsername] = useState("");

  const trimmed = username.trim();
  const isValid = trimmed.length >= 3;

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValid) return; 

    alert(`Submitted: ${trimmed}`);
    setUsername(""); // 🧼 reset form
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

      {!isValid && username.length > 0 && (
        <p style={{ color: "crimson", marginTop: 4 }}>
          Must be at least 3 characters
        </p>
      )}

      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
}