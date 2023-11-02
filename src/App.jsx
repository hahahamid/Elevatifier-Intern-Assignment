import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Import custom components

import Header from "./components/Header";
import News from "./components/News";
import Footer from "./components/Footer";

// Define the main App component

function App() {
  return (
    <>
      <Header />
      <News />
      <Footer />
    </>
  );
}

// Export the App component to make it available for use in other parts of the application

export default App;
