import React, { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { ShowExpense } from "./ShowExpense";
import { AddExpense } from "./Add Expense";
import { AddBudget } from "./SetBudget";

export function ExpenseManagement() {
  // Getting local storage data

  const getLocalExpense = () => {
    let getExpense = localStorage.getItem("expense");

    if (getExpense) {
      return JSON.parse(localStorage.getItem("expense"));
    } else {
      return [];
    }
  };

  const getLocalBudget = () => {
    let getBudget = localStorage.getItem("budget");

    if (getBudget) {
      return JSON.parse(localStorage.getItem("budget"));
    } else {
      return [];
    }
  };

  // defining state for different variables

  const [budgetAmount, setBudgetAmount] = useState(getLocalBudget());
  const [expenseCalculation, setExpenseCalculation] = useState(0);
  const [expenseList, setExpenseList] = useState(getLocalExpense());
  const balanceAmount = budgetAmount - expenseCalculation;

  // defining useEffect for storing data in local storage

  useEffect(() => {
    localStorage.setItem("expense", JSON.stringify(expenseList));
  }, [expenseList]);

  useEffect(() => {
    localStorage.setItem("budget", JSON.stringify(budgetAmount));
  }, [budgetAmount]);

  // Creating balance Calculation function

  const calculateBalance = () => {
    let exp = 0;
    expenseList.forEach((payload) => {
      exp = exp + parseInt(payload.expenseAmount);
    });
    setExpenseCalculation(exp);
  };

  useEffect(() => {
    calculateBalance();
  }, [expenseList]);

  return (
    <Flex direction={"column"} align="center" justify="center">
      <AddBudget
        budgetAmount={budgetAmount}
        setBudgetAmount={setBudgetAmount}
      />
      <AddExpense
        expenseList={expenseList}
        setExpenseList={setExpenseList}
        balanceAmount={balanceAmount}
      />
      <ShowExpense
        expenseList={expenseList}
        expenseCalculation={expenseCalculation}
        budgetAmount={budgetAmount}
      />
    </Flex>
  );
}
