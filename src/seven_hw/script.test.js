import { makeInteractiveList } from "./script";

describe("makeInteactiveList", () => {
  let el;
  let button;
  let input;
  beforeEach(() => {
    el = document.createElement("div");
    makeInteractiveList(el);
    button = el.querySelector("button");
    input = el.querySelector("input");
  });

  it("checks func", () => {
    expect(makeInteractiveList).toBeInstanceOf(Function);
  });

  it("makes initial markup", () => {
    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
    expect(button.innerHTML).toBe("Add");
    expect(button.hidden).toBe(true);
  });

  it("button hidden or appears after input", () => {
    input.value = "some text";
    input.dispatchEvent(new Event("input"));
    expect(button.hidden).toBe(false);
    input.value = "";
    input.dispatchEvent(new Event("input"));
    expect(button.hidden).toBe(true);
  });
});
