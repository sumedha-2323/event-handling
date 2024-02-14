
import './App.css';

const App=()=>{

  const clickHandle=(e,firstName)=>{
    console.log("Hello, I am",firstName,e);
  }
  return(
    <main className="container">
      {/* <button className="button" onClick={clickHandle}>
        click me
      </button> */}

      {/* using normal function for parameters*/}
      {/* <button className="button" onClick={function(e){
        return clickHandle(e, "sumedha");
      }}>click me</button> */}

      {/* using arrow function */}
       <button className="button" onClick={(e) => clickHandle(e,"sumedha")}>click me</button>


    </main>
  )
}


export default App;
