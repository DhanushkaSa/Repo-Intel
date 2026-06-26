import axios from "axios";
import { RepoInput, AnalysisSummary, RepoStats } from "../types/types";

const api = axios.create({ baseURL: "/api" });

export async function analyzeRepo(input: RepoInput) {
    // Mocking server: return delayed mock data
    await new Promise((r) => setTimeout(r, 1200));
    return {
        summary: {
            title: "Sample Project",
            description: "A demo repository analyzed by RepoMind AI.",
        } as AnalysisSummary,
        stats: {
            files: 523,
            sourceFiles: 312,
            loc: 45231,
            languages: { TypeScript: 60, JavaScript: 30, JSON: 10 },
        } as RepoStats,
    };
}

export default api;
