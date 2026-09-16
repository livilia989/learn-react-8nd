import Card from "./components/Card";
import Greeting from "./components/Greeting";


function App() {
  // logic
  // 구조분해할당 - object destructuring
  const animals = ["dog", "cat", "pig"];
  // const second = animals[1]

  const [ second, first ] = animals
  
  console.log("🚀 first:", first) // dog

  console.log("🚀 second:", second)

  const todoItem = {
    todo: "React학습하기",
    isComplete: false
  }

  const { todo: todoName } = todoItem
  console.log("🚀 ~ App ~ todo:", todoName)

  const handleButtonClick = (data) => {
  console.log("🚀 ~ handleButtonClick ~ data:", data)
  
    console.log("Click!!")
    
  }

  // view
  return (
    <div className="App">
      변경~!!
      {/* <Greeting />
      <Greeting /> */}
      {/* 미션: Card컴포넌트 만들고, 이 자리에서 호출 */}
      <Card imgUrl={"https://cf.product-image.s.zigzag.kr/original/d/2026/9/11/200_202609111604146509_27481.gif?width=400&height=400&quality=80&format=webp&transparent=true"} 
      itemName={"4색 청바지"}  
      onButtonClick={handleButtonClick}/>
      
      {/* 미션: 남은 카드들 데이터 넘겨서 아이템 이미지 잘 보이게 하기 */}
      <Card imgUrl={"https://cf.image-farm.s.zigzag.kr/original/cms/2026/09/11/202609110039148761_048610.png?quality=80&format=webp&transparent=true&width=1029&height=1188"} 
      itemName={"가을 신상"}  
      onButtonClick={handleButtonClick}/>
      <Card imgUrl={"https://cf.product-image.s.zigzag.kr/original/d/2026/9/11/41909_202609111107163427_17991.jpeg?width=400&height=400&quality=80&format=webp&transparent=true"} 
      itemName={"단백질 쉐이크"} 
      onButtonClick={handleButtonClick}/>


    </div>
  );
}

export default App;