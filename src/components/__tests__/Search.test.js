import { render, screen, waitFor } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

afterEach(() => {
  jest.clearAllMocks();
});

it("should render the body component with search", async () => {
  // eslint-disable-next-line testing-library/no-unnecessary-act
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  await waitFor(() => {
    const searchBtn = screen.getByRole("button", { name: "Search" });
    expect(searchBtn).toBeInTheDocument();
  });
});
