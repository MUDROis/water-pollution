import { useEffect, useState } from 'react'
import QuizComponent from '../components/Quiz/Quiz'
import quizData from '../data/quizQuestions.json'

interface Question {
  id: number
  question: string
  options: string[]
  correct: number
}

function Quiz() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const [total, setTotal] = useState(0)
 

  useEffect(() => {
    setQuestions(quizData.questions)
    setTotal(quizData.questions.length)
  }, [])

  const handleResult = (currentScore: number, totalQuestions: number) => {
    setScore(currentScore)
    setTotal(totalQuestions)
    setShowScore(true)
    
  }

  const restartQuiz = () => {
    setShowScore(false)
    setScore(0)
  }

  return (
    <div className="p-8 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">Knowledge Check</h1>
          <p className="text-xl text-gray-600">Test your understanding of water pollution and filtration</p>
        </div>

        {!showScore ? (
          <QuizComponent questions={questions} onResult={handleResult} />
        ) : (
          <div className="bg-white rounded-xl p-8 shadow-lg animate-scale-in">
            <div className="text-center">
              <div className="text-6xl mb-4">
                {score / total >= 0.7 ? '🎉' : score / total >= 0.5 ? '👍' : '📚'}
              </div>
              
              <h2 className="text-3xl font-bold mb-4 text-primary">Quiz Results</h2>
              
              <div className="bg-gray-100 rounded-xl p-8 mb-6">
                <div className="text-5xl font-bold text-primary mb-2">
                  {score} / {total}
                </div>
                <div className="text-xl text-gray-600">
                  {Math.round((score / total) * 100)}% Correct
                </div>
              </div>

              <p className="text-lg mb-8 text-gray-700">
                {score / total >= 0.9 
                  ? "🌟 Outstanding! You're a water pollution expert!" 
                  : score / total >= 0.7 
                    ? "🎉 Excellent work! You have a good understanding of water pollution." 
                    : score / total >= 0.5 
                      ? "👍 Good effort! Review the material and try again." 
                      : "📚 Keep learning! Review the material and try again."}
              </p>

              <button
                onClick={restartQuiz}
                className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-600 transition"
              >
                Take Quiz Again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Quiz
