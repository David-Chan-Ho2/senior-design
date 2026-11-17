const repoName = "senior-design"

export const basePath = process.env.GITHUB_ACTIONS === "true" ? `/${repoName}` : ""
