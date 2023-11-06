import { getGithubDetailData } from "../getGithubDetailData";
import fetchMock from "jest-fetch-mock";
import mockApiResponse from "./mock/DetailResponse.json";

fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});

describe("GitHub APIデータフェッチ", () => {
  it("GitHub APIから詳細データを取得する", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockApiResponse));

    const result = await getGithubDetailData(
      "fakeAccessToken",
      "2023-01-01",
      "2023-01-31",
    );

    expect(result.user.login).toEqual("test");
    expect(fetchMock).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          Authorization: "bearer fakeAccessToken",
        }),
      }),
    );

    const lastCall = fetchMock.mock.calls[0][1];
    let body;

    // 型ガード
    if (typeof lastCall?.body === "string") {
      body = JSON.parse(lastCall.body);
    }

    if (body) {
      expect(body).toEqual(
        expect.objectContaining({
          query: expect.any(String),
          variables: { from: "2023-01-01", to: "2023-01-31" },
        }),
      );
    }
  });
});
