import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "Sydney", "London"];
  const getMessage = () => {
    // if true code after && is rendered and shown, otherwise nothing is rendered
    return items.length === 0 && <p>No Item</p>;
  };

  // Event handler
  const handleClick = (event: MouseEvent) => console.log(event)

  return (
    // Utilizing Fragment e.g import { Fragment } from "react";
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
