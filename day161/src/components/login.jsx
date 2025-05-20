import React, { useState } from 'react';

export default function Login({ switchToRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`შეხვედი როგორც: ${email}`);
    // აქ შეგიძლია დაამატო API call ან ლოგიკა
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">შესვლა</button>
      </form>
      <p>არ ხარ რეგისტრირებული? <span onClick={switchToRegister}>დარეგისტრირდი</span></p>
    </div>
  );
}
