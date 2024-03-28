import './App.css';

function App() {
  const name = 'James';   // 자바스크립트 영역
  return (
    <>        {/* 하나의 태그로 감싸주어야됨*/}
    <h1 style={{backgroundColor:"beige"}}>name: {name}</h1>
    <hr />    {/* 반드시 닫는 태그가 있어야됨. */}
    <img src="https://picsum.photos/200/300" className="photo" />
    <br />
    </>
    );
}

export default App;
