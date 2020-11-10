import exampleFacade from "../facades/exampleFacade";

export default function Example() {
  const handleClick = (e) => {
    e.preventDefault();
    exampleFacade.exampleMethod1().then((data) => console.log(data));
  };
  return (
    <div>
      <h1>Example</h1>
      <p>Click the button to get some random data from various APIs</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
