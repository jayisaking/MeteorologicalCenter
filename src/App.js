function App() {
  return (
    <div className = 'container w-screen h-screen mx-auto'>
        <Header/>
        <Water/>
        <div className="w-full flex flex-row justify-evenly">
            <Earthequake/>
            <Electricity/>
        </div>
    </div>
  );
}
function Header(props){
  return (
    <div className = 'w-full h-30 pt-10 mx'>
      <div className='text-3xl'> 
          Meteorological Center
      </div>
    </div>
  )
}
function Water(props){
  return (
    <div className="w-full h-56 border-2 mt-10 rounded-lg border-gray-400">
        <div className="mt-6 ml-6 text-xl">
          Water
        </div>
    </div>
  )
}
function Earthequake(props){
    return (
      <div className="basis-5/12 h-56 border-2 mt-10 rounded-lg border-gray-400">
        <div className="mt-6 ml-6 text-xl">
          Earthequake
        </div>
    </div>
    )
}
function Electricity(props){
  return (
    <div className="basis-5/12 h-56 border-2 mt-10 rounded-lg border-gray-400">
      <div className="mt-6 ml-6 text-xl">
        Electricity
      </div>
  </div>
  )
}
export default App;
