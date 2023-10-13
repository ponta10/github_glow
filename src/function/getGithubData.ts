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
                contributionsCollection(from: $from, to: $to) {
                    contributionCalendar {totalContributions}
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

    return {
      user: {
        login: user.login,
        name: user.name,
        email: user.email,
        avatarUrl: user.avatarUrl,
      },
      total: user.contributionsCollection.contributionCalendar.totalContributions,
    };
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
}