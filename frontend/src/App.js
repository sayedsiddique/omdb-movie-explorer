import React from 'react'
import { AppRoutes, Footer, Header } from "./components";

function App() {
  return (
    <div className="dark:bg-gray-800">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
