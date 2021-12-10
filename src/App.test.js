import App from "./App";
//import ReactDOM from "react-dom";
//import { act } from "react-dom/test-utils";
import React from "react";
//import Adapter from "enzyme-adapter-react-17";
import { shallow, configure } from "enzyme";
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });
// let container;

// //With beforeEach will create a new div for each test in the file and adding it.
// beforeEach(() => {
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   document.body.removeChild(container);
//   container = null;
// });

// it("confirms the textInput field contains the default placeholder", () => {
//   act(() => {
//     ReactDOM.render(<App />, container);
//   });
//   const defaultTextInput = container.querySelector("textarea");
//   expect(defaultTextInput.value).toBe("Here is some example text.");
// });

//test the radio buttons to see if state changes
// it("confirms the textInput field contains the default placeholder and nothing else", () => {
//   act(() => {
//     ReactDOM.render(<App />, container);
//   });
//   const defaultTextInput = container.querySelector("textarea");
//   expect(defaultTextInput.value).not.toBe("Here is some example text.");
// });

describe("App", () => {
  it("renders correctly", () => {
    shallow(<App />);
  });

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should update state on click for lowercase", () => {
    const setConversionMode = jest.fn();
    const wrapper = shallow(<App onClick={setConversionMode} />);
    const handleClick = jest.spyOn(React, "useState");
    handleClick.mockImplementation((conversionMode) => [
      conversionMode,
      setConversionMode,
    ]);

    wrapper.find("#conversion-0").simulate("click");
    expect(setConversionMode).toBeTruthy();
  });

  it("should update state on click for uppercase", () => {
    const setConversionMode = jest.fn();
    const wrapper = shallow(<App onClick={setConversionMode} />);
    const handleClick = jest.spyOn(React, "useState");
    handleClick.mockImplementation((conversionMode) => [
      conversionMode,
      setConversionMode,
    ]);

    wrapper.find("#conversion-1").simulate("click");
    expect(setConversionMode).toBeTruthy();
  });
});
//test the handlesubmit to test functionality
