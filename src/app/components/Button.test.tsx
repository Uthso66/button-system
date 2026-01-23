import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Button } from "./index";

describe("Button Component", () => {
  test("renders with default props", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-blue-600"); // primary variant
  });

  test("handles click events", async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole("button");
    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("shows loading state", () => {
    render(<Button loading>Loading...</Button>);

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toContainElement(screen.getByRole("status"));
  });

  test("applies correct variant classes", () => {
    const { rerender } = render(<Button variant="success">Success</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-green-600");

    rerender(<Button variant="destructive">Delete</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-red-600");
  });

  test("applies correct size classes", () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    expect(screen.getByRole("button")).toHaveClass("text-sm");

    rerender(<Button size="lg">Large</Button>);
    expect(screen.getByRole("button")).toHaveClass("text-lg");
  });
});
