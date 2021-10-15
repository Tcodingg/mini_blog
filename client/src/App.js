import MiniBlog from "./MiniBlog/MiniBlog";
import Header from "./Header/Header";
import "./App.css";

const App = () => {
   return (
      <div className="app">
         <Header />
         <MiniBlog />
      </div>
   );
};

export default App;
