export interface ContributionDay {
  date: string;
  contributionCount: number;
}

export interface Week {
  contributionDays: ContributionDay[];
}

export interface LanguageNode {
  name: string;
}

export interface LanguageEdge {
  size: number;
  node: LanguageNode;
}

export interface Languages {
  edges: LanguageEdge[];
}

export interface Repository {
  languages: Languages;
}

export interface RepositoryContribution {
  repository: Repository;
}

export interface Article {
    title: string;
    link: string;
    pubDate: string;
    image?: string;
}