import React from "react";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import Login from "./Login";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Login Component", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("should have 2 input tags and 2 label tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("label")).toHaveLength(2);
    expect(wrapper.find("input")).toHaveLength(3); // 2 input fields + 1 submit button
  });

  it("submit button should be disabled by default", () => {
    const wrapper = shallow(<Login />);
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop("disabled")).toEqual(true);
  });

  it("submit button should be enabled when both inputs are filled", () => {
    const wrapper = shallow(<Login />);
    const emailInput = wrapper.find('input[type="email"]');
    const passwordInput = wrapper.find('input[type="password"]');

    // Simulate user input for email and password
    emailInput.simulate("change", { target: { value: "test@test.com" } });
    passwordInput.simulate("change", { target: { value: "password" } });

    wrapper.update(); // Re-render component after state change

    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop("disabled")).toEqual(false);
  });
});
