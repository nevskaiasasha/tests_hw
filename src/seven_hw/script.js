export function makeInteractiveList(el) {
  const input = document.createElement("input");
  el.append(input);

  const button = document.createElement("button");
  el.append(button);
  button.innerHTML = "Add";
  button.hidden = true;

  function addElement() {
    const par = document.createElement("p");
    par.innerHTML = `<p> ${input.value} </p>`;
    el.append(par);
  }

  input.addEventListener("input", () => {
    button.hidden = input.value === "";
  });

  button.addEventListener("click", () => {
    addElement(input.value);
    input.value = "";
    input.dispatchEvent(new Event("input"));
  });
}
