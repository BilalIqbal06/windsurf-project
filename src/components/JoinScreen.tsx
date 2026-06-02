import { useState } from 'react'

interface JoinScreenProps {
  onJoin: (username: string, code: string) => void
  onBack: () => void
  username: string
}

export default function JoinScreen({ onJoin, onBack, username }: JoinScreenProps) {
  const [code, setCode] = useState('')

  const handleJoin = () => {
    if (code.length !== 7 || !/^\d{7}$/.test(code)) {
      alert('Please enter a valid 7-digit code')
      return
    }
    onJoin(username, code)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-blue-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-4">
            🎮 Join a Tournament
          </h1>
          <p className="text-xl text-blue-400">
            Enter the 7-digit code shared by the host
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-gray-900/80 backdrop-blur-lg rounded-3xl p-8 border-2 border-blue-500/30 shadow-2xl">
          {/* Code Input */}
          <div className="mb-8">
            <label className="block text-lg font-semibold text-white mb-3">
              Invite Code
            </label>
            <input
              type="text"
              value={code}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '').slice(0, 7)
                setCode(value)
              }}
              placeholder="Enter 7-digit code"
              className="w-full bg-gray-800 border-2 border-gray-700 rounded-xl px-4 py-4 text-white text-3xl font-mono text-center tracking-widest focus:border-blue-500 focus:outline-none transition-colors"
              maxLength={7}
            />
            <p className="text-gray-400 mt-3 text-sm text-center">
              Enter the 7-digit code provided by the tournament host
            </p>
          </div>

          {/* Instructions */}
          <div className="bg-gray-800/50 rounded-xl p-6 mb-8 border border-gray-700">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">📋 Instructions</h3>
            <ol className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 font-bold">1.</span>
                <span>Get the 7-digit invite code from the tournament host</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 font-bold">2.</span>
                <span>Enter the code above to join the tournament lobby</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 font-bold">3.</span>
                <span>Wait in the lobby for other players to join</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 font-bold">4.</span>
                <span>Set your username and place your bet on the winning team</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 font-bold">5.</span>
                <span>Click "Ready" when you're prepared to start the tournament</span>
              </li>
            </ol>
          </div>

          {/* Note */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 mb-8">
            <p className="text-blue-200 text-sm">
              <strong className="text-blue-400">Note:</strong> You can join from different networks. 
              The code system allows players to connect regardless of their location or network.
            </p>
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
              onClick={handleJoin}
              disabled={code.length !== 7}
              className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white text-xl font-semibold py-4 px-6 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              Join Tournament →
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-gray-500 text-sm">
          <p>Make sure you have the correct code from your host</p>
        </div>
      </div>
    </div>
  )
}
