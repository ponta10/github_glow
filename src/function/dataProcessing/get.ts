import {
  ContributionDay,
  LanguageEdge,
  RepositoryContribution,
  Week,
} from "@/utils/types";

export const getLanguageSizes = (
  repoContributions: RepositoryContribution[],
) => {
  const languageSizes: { [key: string]: number } = {};
  repoContributions.forEach((contribution) => {
    contribution?.repository.languages.edges.forEach(
      (langEdge: LanguageEdge) => {
        const langName = langEdge.node.name;
        languageSizes[langName] =
          (languageSizes[langName] || 0) + langEdge.size;
      },
    );
  });
  return languageSizes;
};

export const getMonthlyData = (weeksData: Week[]) => {
  const monthlyCounts: { [key: string]: number } = {};
  weeksData.forEach((week) => {
    week.contributionDays.forEach((day: ContributionDay) => {
      const month = day.date.slice(0, 7);
      monthlyCounts[month] =
        (monthlyCounts[month] || 0) + day.contributionCount;
    });
  });
  return monthlyCounts;
};
