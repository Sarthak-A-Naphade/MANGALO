import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

describe("Contact us page test cases", () => {
  test("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    //   assertion
    expect(heading).toBeInTheDocument();
  });

//   test and it are same alias 
  it("Should load button inside contact component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    //   assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside contact component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");
    //   assertion
    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes inside contact component", () => {
    render(<Contact />);
    // Querying
    const inputBoxes = screen.getAllByRole("textbox");
    //   assertion
    expect(inputBoxes.length).toBe(2);
  });
});
