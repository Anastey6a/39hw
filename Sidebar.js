import React from 'react';

const Sidebar = () => {
  return (
    <aside style={{ width: '200px', background: '#f4f4f4', padding: '20px', height: '100vh' }}>
      <nav>
        <ul>
          <li><a href="#">Посилання 1</a></li>
          <li><a href="#">Посилання 2</a></li>
          <li><a href="#">Посилання 3</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
