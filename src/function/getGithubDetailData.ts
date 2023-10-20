import { activeColorData, langColorData } from "@/utils/const";
import { getLanguageSizes, getMonthlyData } from "./dataProcessing/get";

const GITHUB_API_URL = "https://api.github.com/graphql";

export async function getGithubDetailData(
  accessToken: string,
  fromDate: string,
  toDate: string,
) {
  const query = `
    query($from: DateTime!, $to: DateTime!) {
        viewer {
            login
            name
            email
            avatarUrl
            contributionsCollection(from: $from, to: $to) {
              totalRepositoryContributions
              contributionCalendar {
                  weeks {
                      contributionDays {
                          date
                          contributionCount
                      }
                  }
              }
              totalCommitContributions
              totalPullRequestContributions
              totalIssueContributions
              totalPullRequestReviewContributions
              repositoryContributions(first: 100) {
                    nodes {
                        repository {
                            name
                            languages(first: 5, orderBy: {field: SIZE, direction: DESC}) {
                                edges {
                                    size
                                    node {
                                        name
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

  const variables = {
    from: fromDate,
    to: toDate,
  };

  try {
    const response = await fetch(GITHUB_API_URL, {
      method: "POST",
      headers: {
        Authorization: `bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
    });

    if (!response.ok) {
      throw new Error(`GitHub API request failed: ${response.statusText}`);
    }

    const data = await response.json();
    const user = data.data?.viewer;
    const repoContributions =
      data.data.viewer.contributionsCollection.repositoryContributions.nodes;

    const languageSizes = getLanguageSizes(repoContributions);
    const langData = Object.keys(languageSizes).map((key) => ({
      name: key,
      value: languageSizes[key],
      color: langColorData.find((lang) => lang.name === key)?.color,
    }));

    const weeksData =
      data.data?.viewer.contributionsCollection.contributionCalendar.weeks;
    const monthlyCounts = getMonthlyData(weeksData);
    const monthlyData = Object.keys(monthlyCounts).map((key) => ({
      name: key.slice(-2),
      value: monthlyCounts[key],
    }));

    const activeData = [
      {
        name: "commit",
        value: user.contributionsCollection.totalCommitContributions,
        color: activeColorData.find((c) => c.name === "commit")?.color,
      },
      {
        name: "review",
        value: user.contributionsCollection.totalPullRequestReviewContributions,
        color: activeColorData.find((c) => c.name === "review")?.color,
      },
      {
        name: "pull request",
        value: user.contributionsCollection.totalPullRequestContributions,
        color: activeColorData.find((c) => c.name === "pull request")?.color,
      },
      {
        name: "issue",
        value: user.contributionsCollection.totalIssueContributions,
        color: activeColorData.find((c) => c.name === "issue")?.color,
      },
    ];

    return {
      user: {
        login: user.login,
        name: user.name,
        email: user.email,
        avatarUrl: user.avatarUrl,
      },
      activeData: activeData,
      repoLanguageData: langData,
      monthlyContributions: monthlyData,
    };
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
}
