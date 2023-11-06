import { getGithubData } from "../getGithubData";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});

it("ユーザーデータと総コントリビューション数を取得して返す", async () => {
  const mockAccessToken = "mock_access_token";
  const mockFromDate = "2023-01-01T00:00:00Z";
  const mockToDate = "2023-12-31T23:59:59Z";

  fetchMock.mockResponseOnce(
    JSON.stringify({
      data: {
        viewer: {
          login: "mockAccountName",
          name: "mockName",
          email: "mockEmail",
          avatarUrl: "mockAvatarUrl",
          contributionsCollection: {
            contributionCalendar: {
              totalContributions: 24,
            },
          },
        },
      },
    }),
  );

  const result = await getGithubData(mockAccessToken, mockFromDate, mockToDate);

  expect(result).toEqual({
    user: {
      login: "mockAccountName",
      name: "mockName",
      email: "mockEmail",
      avatarUrl: "mockAvatarUrl",
    },
    total: 24,
  });

  expect(fetchMock).toHaveBeenCalledWith(
    "https://api.github.com/graphql",
    expect.objectContaining({
      method: "POST",
      headers: {
        Authorization: `bearer ${mockAccessToken}`,
        "Content-Type": "application/json",
      },
      body: expect.stringContaining(
        '"variables":{"from":"2023-01-01T00:00:00Z","to":"2023-12-31T23:59:59Z"}',
      ),
    }),
  );
});
