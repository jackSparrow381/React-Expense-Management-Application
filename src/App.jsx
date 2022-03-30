import "./App.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { ExpenseManagement } from "./Components/Expense Management";

function App() {
  return (
    <ChakraProvider>
      <Box className="App">
        <ExpenseManagement />
      </Box>
    </ChakraProvider>
  );
}

export default App;
