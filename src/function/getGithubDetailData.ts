import { activeColorData, langColorData } from "@/utils/const";

export async function getGithubDetailData(
  accessToken: string,
  fromDate: string,
  toDate: string
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
    const response = await fetch("https://api.github.com/graphql", {
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

    const languageSizes: { [key: string]: number } = {};
    repoContributions.forEach((contribution: any) => {
      contribution &&
        contribution.repository.languages.edges.forEach((langEdge: any) => {
          const langName = langEdge.node.name;
          languageSizes[langName] =
            (languageSizes[langName] || 0) + langEdge.size;
        });
    });

    const langData = Object.keys(languageSizes).map((key) => ({
      name: key,
      value: languageSizes[key],
      color: langColorData.find((lang) => lang.name === key)?.color,
    }));

    const weeksData =
      data.data?.viewer.contributionsCollection.contributionCalendar.weeks;
    const monthlyData: { month: string; value: number }[] = [];
    const monthlyCounts: { [key: string]: number } = {};
    weeksData.forEach((week: any) => {
      week.contributionDays.forEach((day: any) => {
        const month = day.date.slice(0, 7); // 日付の年-月部分を抽出
        monthlyCounts[month] =
          (monthlyCounts[month] || 0) + day.contributionCount;
      });
    });

    Object.keys(monthlyCounts).forEach((key) => {
      monthlyData.push({ month: key.slice(-2), value: monthlyCounts[key] });
    });

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
