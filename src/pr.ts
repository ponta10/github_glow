export async function getPr(accessToken: any, username: any) {
    const query = `
        query($login: String!) {
          user(login: $login) {
            pullRequests {
              totalCount
            }
          }
        }
      `;
  
    const variables = {
      login: username,
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
      return data.data.user.pullRequests.totalCount;
    } catch (error) {
      console.error("Error fetching data: ", error);
      throw error;
    }
  }
