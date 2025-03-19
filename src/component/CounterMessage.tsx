
interface CounterMessageProps{
    currentNumber: number
}

const CounterMessage: React.FC<CounterMessageProps> = ({currentNumber}) => {
  return (
    <div>
        <h1 className="mt-2 font-medium text-right">Current number is {currentNumber}</h1>
    </div>
  )
}

export default CounterMessage