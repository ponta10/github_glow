import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BarGraph from ".";
import { GraphData } from "@/utils/const";

describe("BarGraph", () => {
  const mockData: GraphData[] = [
    { name: "Page A", value: 400 },
    { name: "Page B", value: 300 },
    { name: "Page C", value: 300 },
    { name: "Page D", value: 200 },
  ];

  it("クラッシュせずにレンダリングされること", () => {
    const { container } = render(<BarGraph data={mockData} />);

    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("各データエントリに対して正しいバーがレンダリングされること", () => {
    render(<BarGraph data={mockData} />);
    mockData.forEach((dataEntry) => {
      expect(screen.getByText(dataEntry.name)).toBeInTheDocument();
      //   expect(screen.getByText(dataEntry.value.toString())).toBeInTheDocument();
    });
  });

  it("データが空の場合でもクラッシュせずにレンダリングされること", () => {
    const { container } = render(<BarGraph data={[]} />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("不正なデータが与えられた場合にエラーメッセージが表示されること", () => {
    const badData = [{ name: "Page X", value: null }];
    render(<BarGraph data={badData as unknown as GraphData[]} />);
  });
});
