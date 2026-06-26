export interface RepoInput {
    url: string;
}

export interface AnalysisSummary {
    title: string;
    description: string;
}

export interface RepoStats {
    files: number;
    sourceFiles: number;
    loc: number;
    languages: Record<string, number>;
}
