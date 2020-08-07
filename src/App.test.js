import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

function sum(x, y) {
  return x + y;
}


describe("App", () => {
  test("renders App component", () => {
    render(<App />);

    screen.debug();
  });
});

describe("my function or component", () => {
  test("does the following", () => {});
});

describe("true is truthy and false is falsy", () => {
  test("true is truthy", () => {
    expect(true).toBe(true);
  });

  test("false is falsy", () => {
    expect(false).toBe(false);
  });
});


describe("sum", () => {
  test("sums up two values", () => {
    expect(sum(2, 4)).toBe(6);
  });
});

describe("App", () => {
  test("renders App component", () => {
    render(<App />);

    screen.getByText("Search:");
  });
});

describe("App", () => {
  test("renders App component", () => {
    render(<App />);

    expect(screen.getByText("Search:")).toBeInTheDocument();
  });
});

describe("App", () => {
  test("renders App component", () => {
    render(<App />);
    screen.getByText("Search:");
    expect(screen.getByText("Search:")).toBeInTheDocument();
  });
});

describe("App", () => {
  test("renders App component", () => {
    render(<App />);

    

    // succeeds
    // expect(screen.getByText("Search:")).toBeInTheDocument();

    // succeeds
    // expect(screen.getByText(/Search/)).toBeInTheDocument();
  });
});

// describe("App", () => {
//   test("renders App component", () => {
//     render(<App />);

//     screen.getByRole("");
//   });
// });

describe("App", () => {
  test("renders App component", () => {
    render(<App />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});

describe("App", () => {
  test("renders App component", () => {
    render(<App />);

    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
  });
});

// describe("App", () => {
//   test("renders App component", async () => {
//     render(<App />);

//     expect(screen.queryByText(/Signed in as/)).toBeNull();

//     expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
//   });
// });
