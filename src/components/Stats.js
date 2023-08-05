const Stats = (props) => {
  const { items } = props;
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);

  let content;
  if (items.length) {
    content = (
      <span>
        💼 You have {numItems} items on your list, and you already packed{" "}
        {packedItems} ({percentage}%)
      </span>
    );
  } else {
    content = (
      <span>You don't have any items yet maybe try to add one 🚀.</span>
    );
  }

  return <footer className="stats">{content}</footer>;
};

export default Stats;
