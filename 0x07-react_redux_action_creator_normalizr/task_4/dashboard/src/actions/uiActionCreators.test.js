import {
  login,
  logout,
  hideNotificationDrawer,
  displayNotificationDrawer,
} from "./uiActionCreators";


import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from "./uiActionTypes";


describe("tests for UI notification action creators", () => {
  it("should create proper action for login", () => {
    const email = "test@gmail.com";
    const password = "test1234";

    expect(login(email, password)).toEqual({
      type: LOGIN,
      user: { email: "test@gmail.com", password: "test1234" },
    });
  });

  it("should create proper action for logout", () => {
    expect(logout()).toEqual({ type: LOGOUT });
  });

  it("should create proper action for hiding notification drawer", () => {
    expect(hideNotificationDrawer()).toEqual({
      type: HIDE_NOTIFICATION_DRAWER,
    });
  });

  it("should create proper action for displaying notification drawer", () => {
    expect(displayNotificationDrawer()).toEqual({
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
  });

});