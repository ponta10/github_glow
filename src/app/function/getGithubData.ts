export async function getGithubData(
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
                pullRequests { totalCount }
                issues { totalCount }
                issueComments { totalCount }
                contributionsCollection(from: $from, to: $to) {
                    repositoryContributions(first: 100) {
                        nodes {
                            repository {
                                name
                                languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
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
                contributionsCollection(from: $from, to: $to) { totalCommitContributions }
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

    const repoContributions = data.data.viewer.contributionsCollection.repositoryContributions.nodes;

    const languageSizes: { [key: string]: number } = {};
    repoContributions.forEach((contribution: any) => {
      contribution && contribution.repository.languages.edges.forEach((langEdge: any) => {
        const langName = langEdge.node.name;
        languageSizes[langName] = (languageSizes[langName] || 0) + langEdge.size;
      });
    });

    const totalSize = Object.values(languageSizes).reduce((sum, size) => sum + size, 0);

    const languagePercent = Object.keys(languageSizes).map((langName) => {
        const size = languageSizes[langName];
        const percent = ((size / totalSize) * 100).toFixed(2);
        return {
            name: langName,
            percent: parseFloat(percent)
        };
    });

    return {
      user: {
        login: user.login,
        name: user.name,
        email: user.email,
        avatarUrl: user.avatarUrl,
      },
      prCount: user.pullRequests.totalCount,
      issueCount: user.issues.totalCount,
      reviewCount: user.issueComments.totalCount,
      commitCount: user.contributionsCollection.totalCommitContributions,
      repoLanguageData: languagePercent,
    };
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
}