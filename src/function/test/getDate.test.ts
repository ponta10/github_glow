import { getDate } from "../getDate";
import dayjs from "dayjs";

describe("日付取得メソッド", () => {
    it("正しいフォーマットで今日の日付と昨年の日付が返ってきてるか？", () => {
        const result = getDate();
        const today = new Date();
        const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());

        expect(result.today).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/);
        expect(result.oneYearAgo).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/);
        expect(dayjs(result.today).isSame(today, "second")).toBe(true);
        expect(dayjs(result.oneYearAgo).isSame(oneYearAgo, "day")).toBe(true);
    });
});
