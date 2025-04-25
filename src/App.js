import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto px-4 py-8 h-96">
        <div className="bg-slate-800 text-white flex items-center justify-center w-full h-1/2">
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div>
      </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-lime-600 p-6 shadow-lg outline transition-all duration-300 ease-in-out hover:rounded-none outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
          <div>
            <div class="text-xl font-medium text-black dark:text-white">
              ChitChat
            </div>
            <p class="text-gray-600 dark:text-gray-300">
              You have a new message!
            </p>
          </div>
        </div>

        {/* Flexbox */}
        <div className="flex flex-row justify-around items-center bg-slate-800 text-white h-96 w-full">
          <div className="mx-10 px-24 bg-slate-500 rounded-lg h-2/4 flex justify-center items-center">
            1
          </div>
          <div className="mx-10 px-24 bg-slate-500 rounded-full h-2/4 flex justify-center items-center">
            2
          </div>
          <div className="mx-10 px-24 bg-slate-500 rounded-lg h-2/4 flex justify-center items-center">
            3
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 lg:grid-cols-6 xl:grid-cols-9 gap-4 p-10 bg-zinc-900 text-white h-96 w-full">
          <div className="bg-slate-500 h-24 flex items-center justify-center rounded-lg p-10">
            1
          </div>
          <div className="bg-slate-500 h-24 flex items-center justify-center rounded-lg p-10">
            2
          </div>
          <div className="bg-slate-500 h-24 flex items-center justify-center rounded-lg p-10">
            3
          </div>
          <div className="bg-slate-500 h-24 flex items-center justify-center rounded-lg p-10">
            4
          </div>
          <div className="bg-slate-500 h-24 flex items-center justify-center rounded-lg p-10">
            5
          </div>
          <div className="bg-slate-500 h-24 flex items-center justify-center rounded-lg p-10">
            6
          </div>
          <div className="bg-slate-500 h-24 flex items-center justify-center rounded-lg p-10">
            7
          </div>
          <div className="bg-slate-500 h-24 flex items-center justify-center rounded-lg p-10">
            8
          </div>
          <div className="bg-slate-500 h-24 flex items-center justify-center rounded-lg p-10">
            9
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
