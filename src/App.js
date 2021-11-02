import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// the ES6 'Set' method gives us only the unique values
// Here we are using the spread operator to add the unique values to 'all' in an array.
// We are also using the join method to remove the commas in an array.
const allCategories = ['all', ...new Set(items.map((item)=> item.category))];
console.log(allCategories)

function App() {
  // Here we're passing the "items" variable imported from data
  // into the useState method as the default state
  const [menuItems, setMenuItems] = useState(items);
  // Here we're passing the allCategories array as the default value
  const [categories, setCategories] = useState(allCategories)

  // Category filter
  const filterItems = (category)=>{
    // Here we've created an if statement that returns the original 'items' array if the category is 'all'
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    // Here we're creating a new array called newItems
    // We are iterating over the ORIGINAL 'items' array
    // and filtering for the category
    const newItems = items.filter((item)=> item.category === category)
    // Here we update the state of menuItems with newItems
    setMenuItems(newItems)
  }

  return <main>
    <section className="menu section">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      {/* Here we're passing the filterItems function as a prop with the same name */}
      {/* We're also passing the categories state as a prop with the same name */}
      <Categories categories={categories} filterItems={filterItems}/>
      {/* Passing the menuItems state value into the prop 'items' */}
      <Menu items={menuItems}/>
    </section>
  </main>
}

export default App;
