import { store } from "./features/store";
import "./App.css";
import { Provider } from "react-redux";
import CounterComponent from "./components/CounterComponent";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CounterComponent/>
      </div>
    </Provider>
  );
}

export default App;
