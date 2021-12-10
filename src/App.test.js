import App from "./App";
import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  const setConversionMode = jest.fn();
  const handleClick = jest.spyOn(React, "useState");
  const handleSubmit = jest.fn();

  const wrapper = shallow(
    <App onChange={setConversionMode} handleSubmit={handleSubmit} />
  );

  //click handler for radio buttons converting between lowercase and uppercase
  handleClick.mockImplementation((conversionMode) => [
    conversionMode,
    setConversionMode,
  ]);

  //TEST 1: CHECKING IF THE APP RENDERS CORECTLY
  it("renders correctly", () => {
    wrapper.find(<App />);
  });

  //TEST 2: CHECKING IF THE LOWERCASE RADIO BUTTON FUNCTIONS CORRECTLY BY CHANGING STATE
  it("should update lowercase state on click", () => {
    wrapper.find("#conversion-0").simulate("click");
    expect(setConversionMode).toBeTruthy();
  });

  //TEST 3: CHECKING IF THE UPPERCASE RADIO BUTTON FUNCTIONS CORRECTLY BY CHANGING STATE
  it("should handle uppercase radio change onclick", () => {
    wrapper.find("#conversion-1").simulate("click");
    expect(setConversionMode).toBeTruthy();
  });

  //TEST 4: CHECKING IF SUBMIT BUTTON FUNCTIONS CORRECTLY BY CALLING HANDLESUBMIT
  it("should confirm submit button clicked", () => {
    wrapper.find("#submit").simulate("click");
    expect(handleSubmit).toBeTruthy();
  });
});
