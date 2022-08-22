import { BrowserRouter } from "react-router-dom";
import { SidebarDrawerProvider } from "./contexts/SidebarDrawerContext";
import { Router } from "./Router";

function App() {
  return (
    <BrowserRouter>
      <SidebarDrawerProvider>
        <Router />
      </SidebarDrawerProvider>
    </BrowserRouter>
  );
}

export default App;
