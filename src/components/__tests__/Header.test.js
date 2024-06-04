import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

it("Should load header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const loginButton = screen.getByText('Login');
  const loginButton = screen.getByRole("button", { name: "Login" });

  expect(loginButton).toBeInTheDocument();
});

it("Should load header component with cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart (0 items)");

  expect(cartItems).toBeInTheDocument();
});

it("Should load header component with cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   using regex in getByText
  const cartItems = screen.getByText(/Cart/);

  expect(cartItems).toBeInTheDocument();
});

it("Should change login button to logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    //   const loginButton = screen.getByText('Login');
    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button",{name : "Logout"})
  
    expect(logoutButton).toBeInTheDocument();
  });
