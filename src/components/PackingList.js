import { useState } from "react";

import Item from "./Item";

const PackingList = (props) => {
  const [sortedBy, setSortedBy] = useState("input");

  const { items } = props;
  let sortedItems;

  if (sortedBy === "input") {
    sortedItems = items;
  } else if (sortedItems === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  const removeHandler = (id) => {
    props.onRemove(id);
  };

  const toggleChangeHandler = (id) => {
    props.onToggleHandler(id);
  };

  const sortHandler = (e) => {
    setSortedBy(e.target.value);
  };

  const clearHandler = () => {
    props.onClearListHandler();
  };

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onRemoveItem={removeHandler}
            onToggleCheckHandler={toggleChangeHandler}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortedBy} onChange={sortHandler}>
          <option value="input">Sort By Input Order</option>
          <option value="description">Sort By Description</option>
          <option value="packed">Sort By Packed</option>
        </select>
        <button onClick={clearHandler}>Clear List</button>
      </div>
    </div>
  );
};

export default PackingList;
