import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Modal } from ".";

describe("Modal コンポーネントのテスト", () => {
  it("open プロップが true のときにモーダルをレンダリングする必要があります", () => {
    render(
      <Modal open={true} onClose={() => {}}>
        <p>テスト</p>
      </Modal>,
    );
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
  it("open プロップが false のときにモーダルをレンダリングしない必要があります", () => {
    const { queryByRole } = render(
      <Modal open={false} onClose={() => {}}>
        <p>テスト</p>
      </Modal>,
    );
    expect(queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("閉じるアイコンがクリックされたときに onClose プロップを呼び出します", () => {
    const onClose = jest.fn();
    render(
      <Modal open={true} onClose={onClose}>
        <p>テスト</p>
      </Modal>,
    );
    fireEvent.click(screen.getByRole("button"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("モーダル内に children プロップをレンダリングします", () => {
    const children = <div>テスト チルドレン</div>;
    render(
      <Modal open={true} onClose={() => {}}>
        {children}
      </Modal>,
    );
    expect(screen.getByText("テスト チルドレン")).toBeInTheDocument();
  });

  it("width プロップが提供されたときにカスタム幅でレンダリングします", () => {
    render(
      <Modal open={true} onClose={() => {}} width={500}>
        <p>テスト</p>
      </Modal>,
    );
    const dialog = screen.getByRole("dialog");
    const innerDiv = dialog.firstChild;
    expect(innerDiv).toHaveStyle("width: 500px");
  });
});
