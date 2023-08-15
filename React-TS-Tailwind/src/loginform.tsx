import React, { useState } from 'react';
import './App.css'

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    
    
    <div className="flex items-center justify-center h-screen  bg-gray-800">
    <div className="w-80 bg-white shadow-lg rounded  border-neutral-800 p-6 space-y-4">
      <h1 className="text-2xl font-semibold text-center text-gray-900">Login</h1>
      <label className="block text-gray-900 text-sm font-bold" htmlFor="username">
        Username
      </label>
      <input
        className="input input-primary w-full"
        id="username"
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
        required
      />
      <label className="block text-gray-700 text-sm font-bold" htmlFor="password">
        Password
      </label>
      <input
        className="input input-primary w-full"
        id="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
        required
      />
      <div className="flex items-center justify-between">
        <button
          className="btn btn-primary w-full"
          type="submit"
        >
          Log In
        </button>
      </div>
      <div className="flex justify-center">
        <button
          className="btn btn-neutral mr-2"
          type="button"
        >
          Facebook
        </button>


        <button
          className="btn bg-neutral"
          type="button">
            
          GitHub
        </button>

        
      </div>
    </div>
  </div>
  );
};

export default LoginForm;



