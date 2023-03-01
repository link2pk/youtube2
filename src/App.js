import { Provider } from "react-redux";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Sidebar from "./components/Sidebar";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Sidebar />
      <MainContainer />
    </Provider>
  );
}

export default App;
