import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Heading,
} from "@chakra-ui/react";

export function ShowExpense(props){
  const { expenseList, expenseCalculation, budgetAmount } = props;

  return (
    <Box mt={5}>
      <Heading textDecoration={"underline"}>Expense List</Heading>
      <Table mt={5} border="2px" borderColor={"blue"}>
        <Thead bg={"cyan.200"}>
          <Tr>
            <Th border="1px">Sr No.</Th>
            <Th border="1px">Expense Name</Th>
            <Th border="1px">Amount</Th>
          </Tr>
        </Thead>
        {expenseList.map((item, index) => {
          return (
            <Tbody key={index}>
              <Tr>
                <Td border="1px"> {index} </Td>
                <Td border="1px"> {item.expenseName} </Td>
                <Td border="1px"> ${item.expenseAmount} </Td>
              </Tr>
            </Tbody>
          );
        })}
      </Table>
      <Heading
        pos="fixed"
        bottom="5"
        right="4"
        fontSize={30}
        color="blue.600"
        textDecoration={"underline"}
        fontFamily={"serif"}
      >
        Balance: ${budgetAmount - expenseCalculation}
      </Heading>
    </Box>
  );
};
