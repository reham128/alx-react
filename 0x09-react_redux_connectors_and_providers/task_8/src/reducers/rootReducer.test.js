import { Map } from "immutable";
import { initialRootState } from "./rootReducer";


describe("tests for rootReducer", () => {
  it("should have the right types for the initial state object", () => {
    expect(initialRootState.courses).toBeInstanceOf(Map);
    expect(initialRootState.ui).toBeInstanceOf(Map);
    expect(initialRootState.notifications).toBeInstanceOf(Map);
  });
});