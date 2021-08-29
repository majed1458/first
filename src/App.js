import Expeneses from "./components/Expenses";
function App() {
  const data=[
    {
      id:1,
      date:new Date(2021,3,20),
      prix:22.5,
      nom:"rabta klafess"
    },
    {
      id:2,
      date:new Date(2021,3,17),
      prix:2.5,
      nom:"bakou kossksi"
    },
    {
      id:3,
      date:new Date(2021,5,2),
      prix:5.5,
      nom:"bakou legere"
    },
    {
      id:4,
      date:new Date(2021,3,6),
      prix:4.5,
      nom:"milkchake"
    }
  ]


  return (
    <div className="App">
      <h1> my first app react</h1>
      
      <Expeneses data={data} />
    </div>
  );
}

export default App;
