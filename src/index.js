import ReactDOM from "react-dom/client";

function Header(){
  return(
    <>
    <MainHeader/>
    <SubHeader/>
    </>
  )
}

function MainHeader(){
  return(
    <h1>React Course</h1>
  )
}

function SubHeader(){
  return(
    <>
    <p>This will be an exciting course</p>
    <hr />
    </>
  )
}

function MyButton(){
  return(
    <button className="btn btn-primary btn-sm">first button</button>
  )
}

function Footer(){
  return(
    <>
    <hr />
    <p style={{backgroundColor: "blue", height:"50px" }}>Made with Love!</p>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <>
  <Header/>
  <MyButton/>
  <Footer/>
  </>
)