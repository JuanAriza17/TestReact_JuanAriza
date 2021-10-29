import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Like from "../like"

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(<Like />, container);
  });
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Testing like component", () => {
  //verificando el párrafo por defecto
  it("Likes 0 by default", () => {
    const p = container.querySelector("p");
    expect(p.textContent).toBe("Likes: 0");
  });

  //verificando el incremento
  it("Likes increment when Like button is clicked", () => {
    const p = container.querySelector("p");
    const increment = document.getElementById("increment");
    act(() => {
        increment.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(p.textContent).toBe("Likes: 1");
  });

  //verificando el decremento
  it("Likes decrement when Dislike button is clicked", () => {
    const p = container.querySelector("p");
    const increment = document.getElementById("decrement");
    act(() => {
        increment.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(p.textContent).toBe("Likes: -1");
  });
});