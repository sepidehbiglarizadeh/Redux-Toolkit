import { store } from "./features/store";
import "./App.css";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">dfgdfgdf</div>
    </Provider>
  );
}

export default App;
