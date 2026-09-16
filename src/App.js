import Greeting from "./Greeting";

function App() {
  //logic
  //구조분해할당 - Object destructuring
  const animals = ["dog","cat","pig"];
  //const second = animals[1];

  const [ first, second, third ] = animals;
  console.log("🚀 ~ App ~ first:", first, " / second:", second, " / third:", third);

  const todoItem = {
    todo: "React학습하기",
    isComlete: false
  }


  const {todo: todoName} = todoItem
  console.log("🚀 ~ App ~ todoName:", todoName)





  //view
        /* Greeting.jsx 만든걸 가져다 쓸 수 있음 */
  return (
    <div className="App">
      변경~~! 
      <Greeting />
      <Greeting />
      <Greeting />
      <Greeting />
    </div>
  );
}

export default App;
