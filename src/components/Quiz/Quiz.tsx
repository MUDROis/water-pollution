import React from 'react'

interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correct: number
}

interface QuizProps {
  questions: QuizQuestion[]
  onResult: (score: number, total: number) => void
}

function Quiz({ questions, onResult }: QuizProps) {
  const [answers, setAnswers] = React.useState<Record<number, number>>({})
  const [showResults, setShowResults] = React.useState(false)

  const handleAnswer = (questionId: number, answerIndex: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerIndex }))
  }

  const handleSubmit = () => {
    let score = 0
    questions.forEach(q => {
      if (answers[q.id] === q.correct) {
        score++
      }
    })
    onResult(score, questions.length)
    setShowResults(true)
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">Knowledge Check</h2>
      
      {questions.map((q, index) => (
        <div key={q.id} className="mb-6 p-4 bg-white rounded-lg shadow-md">
          <p className="text-lg font-semibold mb-4">{index + 1}. {q.question}</p>
          <div className="space-y-2">
            {q.options.map((option, optIndex) => (
              <button
                key={optIndex}
                onClick={() => handleAnswer(q.id, optIndex)}
                className={`w-full text-left p-3 rounded-lg transition ${
                  answers[q.id] === optIndex
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}

      {!showResults && (
        <button
          onClick={handleSubmit}
          className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
        >
          Submit Answers
        </button>
      )}

      {showResults && (
        <div className="mt-6 p-6 bg-green-50 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-2">Your Score: {questions.filter(q => answers[q.id] === q.correct).length} / {questions.length}</h3>
          <p className="text-gray-600">
            {questions.filter(q => answers[q.id] === q.correct).length >= questions.length * 0.7
              ? 'Excellent work! You have a good understanding of water pollution.'
              : 'Good effort! Review the material and try again.'}
          </p>
        </div>
      )}
    </div>
  )
}

export default Quiz
