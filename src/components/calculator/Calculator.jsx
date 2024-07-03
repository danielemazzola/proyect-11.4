import { useRef } from 'react'
import './Calculator.css'

const Calculator = () => {
  const inputRef = useRef()
  const resultRef = useRef()
  const historyRef = useRef([])
  const numOneRef = useRef(null)
  const operatorRef = useRef(null)

  const calculateResult = () => {
    const numTwo = Number(inputRef.current.value)
    let result

    switch (operatorRef.current) {
      case '+':
        result = numOneRef.current + numTwo
        break
      case '-':
        result = numOneRef.current - numTwo
        break
      case '*':
        result = numOneRef.current * numTwo
        break
      case '/':
        result = numOneRef.current / numTwo
        break
      case '%':
        result = numOneRef.current % numTwo
        break
      default:
        result = 0
    }

    resultRef.current.textContent = `Resultado: ${result}`
    historyRef.current.push(result)
    historyRef.current.sort((a, b) => a - b)
    inputRef.current.value = ''
    numOneRef.current = null
    operatorRef.current = null
  }

  const handleOperation = (operation) => {
    if (numOneRef.current === null) {
      numOneRef.current = Number(inputRef.current.value)
      operatorRef.current = operation
      inputRef.current.value = ''
    } else {
      calculateResult()
    }
  }

  return (
    <div>
      <input
        ref={inputRef}
        type='number'
        className='result'
        placeholder='Enter number'
      />
      <div ref={resultRef}>Resultado: 0</div>
      <div className='btnControllers'>
        <button onClick={() => handleOperation('+')}>+</button>
        <button onClick={() => handleOperation('-')}>-</button>
        <button onClick={() => handleOperation('*')}>x</button>
        <button onClick={() => handleOperation('/')}>/</button>
        <button onClick={() => handleOperation('%')}>%</button>
        <button onClick={calculateResult}>=</button>
      </div>
      <div>
        <h3>Histórico:</h3>
        <ul>
          {historyRef.current.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Calculator
