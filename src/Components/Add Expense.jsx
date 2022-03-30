import React, { useState } from "react";

import {
  Input,
  Box,
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

export function AddExpense(props) {
  const { expenseList, setExpenseList, balanceAmount } = props;

  // defining state for different variables

  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState();
  const [errorMessage, setErrorMessage] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Creating saveExpense function

  const saveExpense = () => {
    const myExpense = {
      expenseName,
      expenseAmount,
    };

    const expenseData = [...expenseList, myExpense];

    if (expenseName === "" || expenseAmount === "") {
      alert("Please fill all the fields");
    } else {
      setExpenseList(expenseData);
    }
    setExpenseName("");
    setExpenseAmount("");
  };

  // Creating handleExpenseAmount function

  const handleExpenseAmount = (e) => {
    const Value = e.target.value;
    if (Value > balanceAmount) {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);
      setExpenseAmount(e.target.value);
    }
  };

  return (
    <Flex direction={"column"} align="center" justify="center">
      <Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Expense Form</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              <Input
                mt={2}
                border="1px"
                borderColor={"blue.400"}
                placeholder="Expense Name"
                value={expenseName}
                onChange={(e) => setExpenseName(e.target.value)}
              />
              <Input
                type={"number"}
                mt={2}
                border="1px"
                borderColor={"blue.400"}
                placeholder="Expense Amount"
                value={expenseAmount || ""}
                onChange={(e) => handleExpenseAmount(e)}
              />
              {errorMessage ? (
                <Box color={"red.400"}>
                  *Expense Amount should be less than Total Budget{" "}
                </Box>
              ) : (
                ""
              )}

              <ModalFooter>
                <Button
                  onClick={() => {
                    saveExpense();
                    onClose();
                  }}
                  mt={2}
                  mb={1}
                  border="1px"
                  borderColor={"blue.400"}
                >
                  Save Expense
                </Button>
                <Button
                  mt={2}
                  mb={1}
                  ml={2}
                  border="1px"
                  borderColor={"blue.400"}
                  onClick={onClose}
                >
                  Close
                </Button>
              </ModalFooter>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
      <Button
        pos="absolute"
        top={40}
        right={40}
        onClick={onOpen}
        border="2px"
        borderColor={"blue.400"}
        ml={4}
        borderRadius={10}
      >
        Add Expense
      </Button>
    </Flex>
  );
}
