import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  // Here we're passing the "items" variable imported from data
  // into the useState method as the default state
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  return <main>
    <section className="menu section">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories/>
      {/* Passing the menuItems state value into the prop 'items' */}
      <Menu items={menuItems}/>
    </section>
  </main>
}

export default App;
