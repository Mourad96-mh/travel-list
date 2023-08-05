import { useState } from "react";

import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  // function handleAddItems(item) {
  //   setItems((items) => [...items, item]);
  // }

  // function handleDeleteItem(id) {
  //   setItems((items) => items.filter((item) => item.id !== id));
  // }

  // function handleToggleItem(id) {
  //   setItems((items) =>
  //     items.map((item) =>
  //       item.id === id ? { ...item, packed: !item.packed } : item
  //     )
  //   );
  // }

  // function handleClearList() {
  //   const confirmed = window.confirm(
  //     "Are you sure you want to delete all items?"
  //   );

  //   if (confirmed) setItems([]);
  // }

  const addItemHandler = (item) => {
    setItems([...items, item]);
  };

  const removeHandler = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const toggleCheckHandler = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const clearListHandler = () => {
    setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={addItemHandler} />
      <PackingList
        items={items}
        onRemove={removeHandler}
        onToggleHandler={toggleCheckHandler}
        onClearListHandler={clearListHandler}
      />
      <Stats items={items} />
      {/* <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} /> */}
    </div>
  );
}
