
import Leftcontainer from "./layout/Leftcontainer";
function App() {
  return (
    <div className="min-h-screen flex flex-col ">

      <div className="bg-slate-200 p-4">
        <p className="text-center justify-center font-semibold">BOXY GENERATOR </p>
      </div>

      <main className="flex flex-wrap justify-center items-center flex-grow bg-gray- px-10 bg-slate-100  md:flex-nowrap">
        <Leftcontainer/>


      </main>
      <div>
        <footer className=" bg-slate-200">
        <p className="text-center font-semibold ">Boxy -All ridght reserved</p> 
        </footer>
        
      </div>

      </div>
  );
}

export default App;
