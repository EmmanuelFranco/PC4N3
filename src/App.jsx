import React, { useState, useEffect } from 'react';
import './App.css';
import UserCard from './componentes/UserCard';


function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Lista de Usuarios</h1>
      <input
        type="text"
        placeholder="Buscar por nombre o nombre de usuario"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="user-cards">
        {filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            imageUrl={`https://picsum.photos/seed/${user.id}/300/300`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
