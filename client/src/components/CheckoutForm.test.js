import React from "react";
import { render, getByTestId, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { getByText } = render(<CheckoutForm />);
  const checkoutHeader = getByText(/checkout form/i);
  // expect(checkoutHeader).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  const { getByTestId } = render(<CheckoutForm />);

  const checkoutSubmit = getByTestId(/checkoutBtn/i);
  expect(checkoutSubmit).toBeInTheDocument();
  fireEvent.click(checkoutSubmit);

  const successMesssage = getByTestId(/successMessage/i);
  expect(successMesssage).toBeInTheDocument();
});
