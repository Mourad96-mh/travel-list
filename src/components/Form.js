import { useState } from "react";

const Form = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  const quantityChangeHandler = (e) => {
    setQuantity(e.target.value);
  };

  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!description) {
      alert("please enter a description ");
      return;
    }
    const newItem = {
      quantity,
      description,
      id: Math.round(Math.random() * 100),
      packed: false,
    };
    props.onAddItem(newItem);
    setQuantity(1);
    setDescription("");
  };

  return (
    <div className="add-form">
      <p>Waht do you need for your next travel ?</p>
      <form onSubmit={submitHandler}>
        <select onChange={quantityChangeHandler} value={quantity}>
          {/* <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option> */}
          {Array.from(Array(20), (_, index) => index + 1).map((el) => (
            <option value={el} key={el}>
              {el}
            </option>
          ))}
        </select>
        <input
          type="text"
          onChange={descriptionChangeHandler}
          value={description}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
