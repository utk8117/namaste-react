import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../utils/store";
import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("Should render Header", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument();
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});

it("Should render Header with Home", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const home = screen.getByText("Home");
  expect(home).toBeInTheDocument();
  const about = screen.getByText("About");
  expect(about).toBeInTheDocument();
  const contactUs = screen.getByText("Contact Us");
  expect(contactUs).toBeInTheDocument();
});
