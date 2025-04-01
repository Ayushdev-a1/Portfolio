import type { NextApiRequest, NextApiResponse } from 'next';

type LeetCodeStats = {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
};

type ErrorResponse = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LeetCodeStats | ErrorResponse>
) {
  const username = 'Ayushananddev';

  try {
    const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
    if (!response.ok) {
      throw new Error('Failed to fetch LeetCode stats');
    }
    const data: LeetCodeStats = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching LeetCode stats' });
  }
}