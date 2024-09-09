import { cn } from "@/utils/cn"

const NumberRotation = ({ number }: { number: number }) => {

  const numbers = Array.from({ length: 60 }, (_, i) => i)

  const getClassName = (num: number) => {
    if (number === num) return 'opacity-100 transform-none'
    if (number > num) return 'opacity-0 -translate-y-2'
    return 'opacity-0 translate-y-2'
  }

  return (
    <div className="relative h-10 w-10 flex">
      {numbers.map((num) => (
        <span key={num} className={cn('w-full h-full absolute transition-all duration-200',
          getClassName(num)
        )}>
          {num}
        </span>
      ))}
    </div>
  )
}

export default NumberRotation