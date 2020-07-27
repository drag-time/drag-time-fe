import React from "react";
import ReactDOM from "react-dom";
import Header from './Header';
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";

describe('Header', () => {
  it('Should render without crashing', () => {
    const {getByText} = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const dragHeader = getByText("Drag");
    expect(dragHeader).toBeInTheDocument();
  });

  it('should render three buttons', () => {
    const {getByText} = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const homeButton = getByText("Home");
    const createButton = getByText("Create Event");
    const myEventsButton = getByText("My Events");

    expect(homeButton).toBeInTheDocument();
    expect(createButton).toBeInTheDocument();
    expect(myEventsButton).toBeInTheDocument();
  });
});
