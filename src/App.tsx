import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert"
import Message from "./components/Message";

function App() {
  let items = ["New York", "Sydney", "London"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
      <Alert>
        This is an Alert
      </Alert>
      <Message>
        Hi
      </Message>
    </div>
  );
}

export default App;
