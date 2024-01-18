

import AplicationProvider from "./Context/Aplication/context";
import RoutesApp from "./Router/router";
function App() {
  return (
    <AplicationProvider>

      <RoutesApp />
    </AplicationProvider>
  );
}

export default App;
