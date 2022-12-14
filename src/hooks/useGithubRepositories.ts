import { useEffect, useState } from 'react';
import { Octokit } from '@octokit/core';
import { paths } from '@octokit/openapi-types';

type Options = {
    type: 'all' | 'owner' | 'member';
    sort: 'created' | 'updated' | 'pushed' | 'full_name';
    postRequestSort?: 'size' | 'stargazers_count' | 'watchers_count' | 'forks_count';
    direction: 'asc' | 'desc';
    per_page: number;
    page: number;
};

export type Repository = paths['/users/{username}/repos']['get']['responses']['200']['content']['application/json'][0];

export default function useGithubRepositories(username: string, options?: Options) {
    async function getUserRepos(username: string, options: Options) {
        try {
            const { type, sort, direction, per_page, page, postRequestSort } = options;
            const octokit = new Octokit();
            const response = await octokit.request('GET /users/{username}/repos', { username, type, sort, direction, per_page, page });
            if (response.status != 200) return;

            let repositories = response.data;
            if (postRequestSort) {
                repositories.sort((repo1, repo2) => direction === 'asc' ? repo1[postRequestSort] - repo2[postRequestSort] : repo2[postRequestSort] - repo1[postRequestSort]);
            }
            setRepositories(repositories);
        } catch (error: unknown) {
            console.error(error);
        }
    }

    options ??= { type: 'owner', sort: 'updated', direction: 'desc', per_page: 20, page: 0 };
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        getUserRepos(username, options);
    }, []);

    return { repositories };
}
