import { getFrameworkColor } from "@/helpers/colors"
import { cn } from "@/utils/cn"
import { type Framework } from "@/utils/framework-utils"
import NumberRotation from "./NumberRotation"

type TimeUnitProps = {
  label: 'DAYS' | 'HOURS' | 'MINUTES' | 'SECONDS'
  value: number
  currentFramework: Framework
}

const TimeUnit = ({ label, value, currentFramework }: TimeUnitProps) => {
  return (
    <div className="flex flex-col">
      <div className="text-white text-3xl font-semibold">
        <NumberRotation number={value} />
      </div>
      <div className={cn('text-[8px] font-medium', getFrameworkColor('text', currentFramework))}>
        {label}
      </div>
    </div>
  )
}

export default TimeUnit