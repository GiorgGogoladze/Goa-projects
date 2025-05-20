import React, { useState } from 'react';

export default function Register({ switchToLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`დარეგისტრირდი: ${email}`);
    // აქ დაამატე რეგისტრაციის ლოგიკა
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="ელ. ფოსტა"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="პაროლი"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">რეგისტრაცია</button>
      </form>
      <p>უკვე გაქვს ანგარიში? <span onClick={switchToLogin}>შესვლა</span></p>
    </div>
  );
}
