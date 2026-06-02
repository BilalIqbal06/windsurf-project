// World Cup Stats API Service
// This service fetches real-time data from ESPN API or other World Cup data sources
// Stats are calculated dynamically from match results as games progress

export interface PlayerStats {
  id: number
  name: string
  team: string
  goals: number
  assists: number
  yellowCards: number
  redCards: number
}

export interface TeamStats {
  id: string
  name: string
  flag: string
  gamesPlayed: number
  wins: number
  ties: number
  losses: number
  pointsFor: number
  pointsAgainst: number
  last5Games: ('win' | 'tie' | 'loss')[]
}

export interface MatchEvent {
  playerId: number
  playerName: string
  team: string
  type: 'goal' | 'assist' | 'yellow_card' | 'red_card'
  minute: number
}

export interface MatchResult {
  id: string
  homeTeam: string
  awayTeam: string
  homeScore: number
  awayScore: number
  status: 'finished' | 'live' | 'upcoming'
  events: MatchEvent[]
}

// ESPN API endpoints (will be active during World Cup 2026)
const ESPN_API_BASE = 'https://site.api.espn.com/apis/site/v2/sports/soccer'
const WORLD_CUP_ID = 'world-cup-2026'

/**
 * Fetch match results from ESPN API
 * This will return real-time data during the tournament
 */
async function fetchMatchResultsFromESPN(): Promise<MatchResult[]> {
  try {
    // This endpoint will be available during World Cup 2026
    const response = await fetch(`${ESPN_API_BASE}/${WORLD_CUP_ID}/scoreboard`)
    if (!response.ok) {
      throw new Error('ESPN API not available')
    }
    const data = await response.json()
    
    // Transform ESPN data to our MatchResult format
    return transformESPNData(data)
  } catch (error) {
    console.log('ESPN API not available, using fallback')
    return []
  }
}

/**
 * Transform ESPN API data to our MatchResult format
 */
function transformESPNData(_espnData: any): MatchResult[] {
  // This will implement the transformation when ESPN data is available
  return []
}

/**
 * Calculate player statistics from match results
 * This dynamically updates based on actual match events
 */
export function calculatePlayerStats(matchResults: MatchResult[]): PlayerStats[] {
  const playerStatsMap = new Map<number, PlayerStats>()
  
  matchResults.forEach(match => {
    match.events.forEach(event => {
      if (!playerStatsMap.has(event.playerId)) {
        playerStatsMap.set(event.playerId, {
          id: event.playerId,
          name: event.playerName,
          team: event.team,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        })
      }
      
      const stats = playerStatsMap.get(event.playerId)!
      switch (event.type) {
        case 'goal':
          stats.goals++
          break
        case 'assist':
          stats.assists++
          break
        case 'yellow_card':
          stats.yellowCards++
          break
        case 'red_card':
          stats.redCards++
          break
      }
    })
  })
  
  // Convert to array and sort by goals, then assists
  return Array.from(playerStatsMap.values())
    .sort((a, b) => {
      if (b.goals !== a.goals) return b.goals - a.goals
      return b.assists - a.assists
    })
    .map((stats, index) => ({ ...stats, id: index + 1 }))
}

/**
 * Calculate team statistics from match results
 * This dynamically updates based on actual match results
 */
export function calculateTeamStats(matchResults: MatchResult[], allTeams: any[]): TeamStats[] {
  const teamStatsMap = new Map<string, any>()
  
  // Initialize all teams with 0 stats
  allTeams.forEach(team => {
    teamStatsMap.set(team.id, {
      id: team.id,
      name: team.name,
      flag: team.flag,
      gamesPlayed: 0,
      wins: 0,
      ties: 0,
      losses: 0,
      pointsFor: 0,
      pointsAgainst: 0,
      last5Games: [] as ('win' | 'tie' | 'loss')[]
    })
  })
  
  // Update stats based on match results
  matchResults.forEach(match => {
    if (match.status !== 'finished') return
    
    const homeStats = teamStatsMap.get(match.homeTeam)
    const awayStats = teamStatsMap.get(match.awayTeam)
    
    if (homeStats && awayStats) {
      homeStats.gamesPlayed++
      awayStats.gamesPlayed++
      
      homeStats.pointsFor += match.homeScore
      homeStats.pointsAgainst += match.awayScore
      awayStats.pointsFor += match.awayScore
      awayStats.pointsAgainst += match.homeScore
      
      if (match.homeScore > match.awayScore) {
        homeStats.wins++
        homeStats.last5Games.push('win')
        awayStats.losses++
        awayStats.last5Games.push('loss')
      } else if (match.homeScore < match.awayScore) {
        awayStats.wins++
        awayStats.last5Games.push('win')
        homeStats.losses++
        homeStats.last5Games.push('loss')
      } else {
        homeStats.ties++
        homeStats.last5Games.push('tie')
        awayStats.ties++
        awayStats.last5Games.push('tie')
      }
      
      // Keep only last 5 games
      homeStats.last5Games = homeStats.last5Games.slice(-5)
      awayStats.last5Games = awayStats.last5Games.slice(-5)
    }
  })
  
  return Array.from(teamStatsMap.values())
}

/**
 * Fetch player statistics from World Cup
 * @returns Promise<PlayerStats[]> - Array of player stats calculated from match results
 */
export async function fetchPlayerStats(): Promise<PlayerStats[]> {
  const matchResults = await fetchMatchResultsFromESPN()
  return calculatePlayerStats(matchResults)
}

/**
 * Fetch team statistics from World Cup
 * @param allTeams - Array of all teams in the tournament
 * @returns Promise<TeamStats[]> - Array of team stats calculated from match results
 */
export async function fetchTeamStats(allTeams: any[]): Promise<TeamStats[]> {
  const matchResults = await fetchMatchResultsFromESPN()
  return calculateTeamStats(matchResults, allTeams)
}

/**
 * Fetch player stats from specific team
 * @param teamId - The team ID to filter players by
 * @returns Promise<PlayerStats[]> - Array of player stats for the team
 */
export async function fetchPlayerStatsByTeam(teamId: string): Promise<PlayerStats[]> {
  const allStats = await fetchPlayerStats()
  // Map team ID to team name (this would be more robust with actual data)
  const teamMap: Record<string, string> = {
    'ar': 'Argentina',
    'fr': 'France',
    'br': 'Brazil',
    'gb-eng': 'England',
    'de': 'Germany',
    'es': 'Spain',
    'nl': 'Netherlands',
    'pt': 'Portugal',
  }
  return allStats.filter(player => player.team === teamMap[teamId])
}

/**
 * Fetch team stats for a specific team
 * @param teamId - The team ID
 * @returns Promise<TeamStats | null> - Team stats or null if not found
 */
export async function fetchTeamStatsById(teamId: string, allTeams: any[]): Promise<TeamStats | null> {
  const allStats = await fetchTeamStats(allTeams)
  return allStats.find(team => team.id === teamId) || null
}
