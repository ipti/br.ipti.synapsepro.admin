

import { QueryClientProvider } from "react-query";
import AplicationProvider from "./Context/Aplication/context";
import RoutesApp from "./Router/router";
import queryClient from "./Services/reactquery";
function App() {
  return (
    <AplicationProvider>
      <QueryClientProvider client={queryClient}>
        <RoutesApp />
      </QueryClientProvider>
    </AplicationProvider>
  );
}

export default App;
