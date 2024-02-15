

import { QueryClientProvider } from "react-query";
import AplicationProvider from "./Context/Aplication/context";
import RoutesApp from "./Router/router";
import queryClient from "./Services/reactquery";


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AplicationProvider>
        <RoutesApp />
      </AplicationProvider>
    </QueryClientProvider>
  );
}

export default App;
