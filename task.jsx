import React, { useState } from 'react';

function Memo() {
  const [searchTerm, setSearchTerm] = useState('');
  const [hideCompleted, setHideCompleted] = useState(false);
  const [memoItems, setMemoItems] = useState([
    { name: 'Finish Project Proposal', dueDate: '2024-03-30', completed: false },
    { name: 'Meet with Mentor', dueDate: '2024-03-27', completed: false },
    { name: 'Review study Notes', dueDate: '2024-03-28', completed: true },
    { name: 'Practice coding exercises', dueDate: '2024-03-29', completed: false },
    { name: 'Plan weekend trip', dueDate: '2024-04-01', completed: false },
    { name: 'Attend yoga class', dueDate: '2024-03-26', completed: true },
    { name: 'Update a resume', dueDate: '2024-03-31', completed: false },
    { name: 'Research career options', dueDate: '2024-04-02', completed: false },
    { name: 'tart reading new book', dueDate: '2024-04-03', completed: true },
    { name: 'Schedule dentist appointmen', dueDate: '2024-04-04', completed: true },
  ]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleHideCompletedChange = (event) => {
    setHideCompleted(event.target.checked);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const handleHideCompletedChange = (event) => {
    setHideCompleted(event.target.checked);
  };
  
  const filteredMemoItems = memoItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const visibleMemoItems = hideCompleted
    ? filteredMemoItems.filter((item) => !item.completed)
    : filteredMemoItems;
  
  return (
    <div>
      <h1> React Memo</h1>
      <input
        type="text"
        placeholder="Search memo items..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <label>
        <input
          type="checkbox"
          checked={hideCompleted}
          onChange={handleHideCompletedChange}
        />
        Hide Completed Tasks
      </label>
      <ul>
        {visibleMemoItems.map((item, index) => (
          <li key={index}>
            <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
              {item.name} - Due: {item.dueDate}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
  }
  
  export default Memo;
