import { useState, useEffect } from 'react'

interface HostScreenProps {
  onHostCreated: (username: string, code: string, tournamentName: string) => void
  onBack: () => void
  username: string
}

export default function HostScreen({ onHostCreated, onBack, username }: HostScreenProps) {
  const [tournamentName, setTournamentName] = useState('')
  const [code, setCode] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  useEffect(() => {
    // Generate a random 7-digit code when component mounts
    const generateCode = () => {
      const digits = '0123456789'
      let code = ''
      for (let i = 0; i < 7; i++) {
        code += digits.charAt(Math.floor(Math.random() * digits.length))
      }
      return code
    }
    setCode(generateCode())
  }, [])

  const handleHost = () => {
    if (!tournamentName.trim()) {
      alert('Please enter a tournament name')
      return
    }
    onHostCreated(username, code, tournamentName)
  }

  const handleRegenerateCode = () => {
    setIsGenerating(true)
    const digits = '0123456789'
    let newCode = ''
    for (let i = 0; i < 7; i++) {
      newCode += digits.charAt(Math.floor(Math.random() * digits.length))
    }
    setTimeout(() => {
      setCode(newCode)
      setIsGenerating(false)
    }, 300)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-black to-green-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-4">
            🏠 Host a Tournament
          </h1>
          <p className="text-xl text-green-400">
            Create your tournament and share the code with friends
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-gray-900/80 backdrop-blur-lg rounded-3xl p-8 border-2 border-green-500/30 shadow-2xl">
          {/* Tournament Name Input */}
          <div className="mb-8">
            <label className="block text-lg font-semibold text-white mb-3">
              Tournament Name
            </label>
            <input
              type="text"
              value={tournamentName}
              onChange={(e) => setTournamentName(e.target.value)}
              placeholder="Enter tournament name (e.g., 'World Cup 2026 with Friends')"
              className="w-full bg-gray-800 border-2 border-gray-700 rounded-xl px-4 py-4 text-white text-lg focus:border-green-500 focus:outline-none transition-colors"
              maxLength={50}
            />
          </div>

          {/* Invite Code Display */}
          <div className="mb-8">
            <label className="block text-lg font-semibold text-white mb-3">
              Your Invite Code
            </label>
            <div className="bg-gray-800 border-2 border-green-500/50 rounded-xl p-6 flex items-center justify-between">
              <span className="text-5xl font-mono font-bold text-green-400 tracking-wider">
                {code}
              </span>
              <button
                onClick={handleRegenerateCode}
                disabled={isGenerating}
                className="ml-4 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
              >
                🔄 Regenerate
              </button>
            </div>
            <p className="text-gray-400 mt-3 text-sm">
              Share this 7-digit code with other players so they can join your tournament
            </p>
          </div>

          {/* Instructions */}
          <div className="bg-gray-800/50 rounded-xl p-6 mb-8 border border-gray-700">
            <h3 className="text-xl font-semibold text-green-400 mb-4">📋 Instructions</h3>
            <ol className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold">1.</span>
                <span>Give your tournament a unique name that your group will recognize</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold">2.</span>
                <span>Share the 7-digit invite code with your friends via text, email, or any messaging app</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold">3.</span>
                <span>Wait for players to join using the "Join a Tournament" option</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold">4.</span>
                <span>Once everyone has joined and is ready, start the tournament together</span>
              </li>
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={onBack}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white text-xl font-semibold py-4 px-6 rounded-xl transition-colors"
            >
              ← Back
            </button>
            <button
              onClick={handleHost}
              disabled={!tournamentName.trim()}
              className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-xl font-semibold py-4 px-6 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              Create Tournament →
            </button>
          </div>
        </div>

        {/* Note */}
        <div className="text-center mt-6 text-gray-500 text-sm">
          <p>Players can join from different networks using this code</p>
        </div>
      </div>
    </div>
  )
}
