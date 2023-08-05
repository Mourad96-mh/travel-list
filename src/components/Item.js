// import { useState } from "react";

const Item = (props) => {
  // const [isChecked, setIsChecked] = useState(false);

  const { item } = props;

  const removeItemHandler = (id) => {
    props.onRemoveItem(id);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => props.onToggleCheckHandler(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description}
      </span>
      <button onClick={() => removeItemHandler(item.id)}>&times;</button>
    </li>
  );
};

export default Item;
