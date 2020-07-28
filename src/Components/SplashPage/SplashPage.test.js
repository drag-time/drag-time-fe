import React from "react";
import ReactDOM from "react-dom";
import SplashPage from './SplashPage';
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";

describe('SplashPage', () => {
  it('Should render without crashing', () => {
    const {getByText} = render(
      <MemoryRouter>
        <SplashPage />
      </MemoryRouter>
    );

    const header = getByText("Drag");
    expect(header).toBeInTheDocument();
  });

  it('Should have a clickable button to enter the website', () => {
    const {getByText} = render(
      <MemoryRouter>
        <SplashPage />
      </MemoryRouter>
    );

    const enterButton = getByText("Enter");
    expect(enterButton).toBeInTheDocument();
  });
});
