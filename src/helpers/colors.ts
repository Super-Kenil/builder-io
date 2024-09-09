import { cn } from '@/utils/cn'
import { type Framework } from "../utils/framework-utils"

export const getFrameworkColor = (type: 'text' | 'bg', currentFramework: Framework): string => {
  return cn({
    [`${type}-purple-300`]: currentFramework === "qwik",
    [`${type}-sky-300`]: currentFramework === "safari",
    [`${type}-yellow-300`]: currentFramework === "chrome",
    [`${type}-teal-300`]: currentFramework === "tailwind",
    [`${type}-blue-300`]: currentFramework === "react",
    [`${type}-green-300`]: currentFramework === "vue",
    [`${type}-orange-400`]: currentFramework === "svelte",
    [`${type}-red-300`]: currentFramework === "mobile",
    [`${type}-neutral-300`]: currentFramework === "desktop",
  })
}