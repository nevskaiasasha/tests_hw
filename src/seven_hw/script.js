export function makeInteractiveList(el) {
  const input = document.createElement("input");
  el.append(input);

  const button = document.createElement("button");
  el.append(button);
  button.innerHTML = "Add";
  button.hidden = true;

  function addElement(text) {
    const p = document.createElement("p");
    p.innerHtml = text;
    el.append(p);
  }

  addElement("first");
  addElement("second");
  addElement("third");

  input.addEventListener("input", () => {
    button.hidden = input.value === "";
  });

  button.addEventListener("click", () => {
    addElement(input.value);
    input.value = "";
    input.dispatchEvent(new Event("input"));
  });
}
