import type { NextApiRequest, NextApiResponse } from 'next'

type Reel = string[]
type SpinResult = [string, string, string]

interface SpinResponse {
  result: SpinResult
  reward: number
  remainingCoins: number
}

const REELS: Reel[] = [
  ["cherry", "lemon", "apple", "lemon", "banana", "banana", "lemon", "lemon"],
  ["lemon", "apple", "lemon", "lemon", "cherry", "apple", "banana", "lemon"],
  ["lemon", "apple", "lemon", "apple", "cherry", "lemon", "banana", "lemon"]
]

const REWARDS = {
  cherry: { three: 50, two: 40 },
  apple: { three: 20, two: 10 },
  banana: { three: 15, two: 5 },
  lemon: { three: 3, two: 0 }
}

function spinReel(reel: Reel): string {
  const index = Math.floor(Math.random() * reel.length)
  return reel[index]
}

function calculateReward(result: SpinResult): number {
  if (result[0] === result[1] && result[1] === result[2]) {
    return REWARDS[result[0] as keyof typeof REWARDS].three
  } else if (result[0] === result[1]) {
    return REWARDS[result[0] as keyof typeof REWARDS].two
  }
  return 0
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SpinResponse | { error: string }>
) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method Not Allowed' })
    return
  }

  const { coins } = req.query

  const result: SpinResult = [
    spinReel(REELS[0]),
    spinReel(REELS[1]),
    spinReel(REELS[2])
  ]

  const coinsNumber = Number(coins);

  const reward = calculateReward(result)
  const remainingCoins = coinsNumber - 1 + reward

  res.status(200).json({
    result,
    reward,
    remainingCoins
  })
}