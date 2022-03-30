import { Box, Heading, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";

export function AddBudget(props) {
  const [buttonShow, setButtonShow] = useState(false);
  const [showBudget, setShowBudget] = useState(false);
  const { budgetAmount, setBudgetAmount } = props;

  // Creating setBudgetValue function

  const setBudgetValue = () => {
    setButtonShow(false);
    setShowBudget(false);
  };

  // Creating editBudgetValue function

  const editBudgetValue = () => {
    setButtonShow(true);
    setShowBudget(true);
  };

  return (
    <Box>
      <Heading border="2px" backgroundColor={"blue.100"} borderRadius={4} fontFamily={"serif"}>
        Expense Tracker Application
      </Heading>
      <Box display={"flex"} alignItems="center" justifyContent="start" mt={5}>
        {showBudget ? (
          <Input
            size="md"
            w={400}
            border="2px"
            borderColor={"blue.400"}
            borderRadius={3}
            p={2}
            value={budgetAmount || ""}
            onChange={(e) => setBudgetAmount(e.target.value)}
          />
        ) : (
          <Heading color="green.400" fontFamily={"serif"} fontSize={30}>
            Total Budget: ${budgetAmount}
          </Heading>
        )}

        {buttonShow ? (
          <Button
            onClick={setBudgetValue}
            border="2px"
            borderColor={"blue.400"}
            ml={4}
          >
            Set Budget
          </Button>
        ) : (
          ""
        )}
        {buttonShow ? (
          ""
        ) : (
          <Button
            onClick={editBudgetValue}
            border="2px"
            borderColor={"blue.400"}
            ml={4}
          >
            Edit Budget
          </Button>
        )}
      </Box>
    </Box>
  );
}
