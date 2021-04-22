import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* TinderCards */}
      <TinderCards />
      {/* swipebuttons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
