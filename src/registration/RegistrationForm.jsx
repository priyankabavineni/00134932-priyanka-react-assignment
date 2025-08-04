import React, { useState } from 'react';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [state, setState] = useState('TG');
  const [gender, setGender] = useState('');
  const [contract, setContract] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted!
Username: ${username}
Password: ${password}
Age: ${age}
State: ${state}
Gender: ${gender}
Contract Accepted: ${contract ? 'Yes' : 'No'}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br />
      
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      /><br />
      
      <select value={state} onChange={(e) => setState(e.target.value)}>
        <option value="TG">TG</option>
        <option value="AP">AP</option>
        <option value="TN">TN</option>
      </select><br />
      
      <label>
        <input
          type="radio"
          name="gender"
          value="M"
          onChange={(e) => setGender(e.target.value)}
        /> Male
      </label>
      
      <label>
        <input
          type="radio"
          name="gender"
          value="F"
          onChange={(e) => setGender(e.target.value)}
        /> Female
      </label><br />
      
      <label>
        <input
          type="checkbox"
          checked={contract}
          onChange={(e) => setContract(e.target.checked)}
        />
        I accept the contract
      </label><br />
      
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
