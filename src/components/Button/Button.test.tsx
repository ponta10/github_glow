import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from ".";

describe("Button コンポーネントのテスト", () => {
  it("ボタンが表示される", () => {
    render(<Button text="テスト" />);
    const buttonElement = screen.getByRole("button", { name: "テスト" });
    expect(buttonElement).toBeInTheDocument();
  });

  it("デフォルトのクラスが適用されている", () => {
    render(<Button text="テスト" />);
    const buttonElement = screen.getByRole("button", { name: "テスト" });
    expect(buttonElement).toHaveClass("bg-blue-500 text-white");
  });

  it("カスタムの背景色が適用できる", () => {
    render(<Button text="テスト" bgcolor="bg-red-500" />);
    const buttonElement = screen.getByRole("button", { name: "テスト" });
    expect(buttonElement).toHaveClass("bg-red-500");
  });

  it("ボタンが無効状態の時、適切なクラスが適用される", () => {
    render(<Button text="テスト" disabled />);
    const buttonElement = screen.getByRole("button", { name: "テスト" });
    expect(buttonElement).toHaveClass(
      "disabled:cursor-not-allowed disabled:opacity-60",
    );
    expect(buttonElement).toBeDisabled();
  });

  it("クリックイベントが発火する", () => {
    const handleClick = jest.fn();
    render(<Button text="テスト" onClick={handleClick} />);
    const buttonElement = screen.getByRole("button", { name: "テスト" });
    buttonElement.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
