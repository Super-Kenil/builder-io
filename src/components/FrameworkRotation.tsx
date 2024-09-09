import Image from 'next/image'

import { assets } from '@/utils/asset-utils'
import { cn } from '@/utils/cn'
import { frameworks, type Framework } from '@/utils/framework-utils'

const FrameworkRotation = ({ currentFramework }: { currentFramework: Framework }) => {
  return (
    <div className='w-20 h-20 mx-2 -mt-2 align-middle inline-flex relative'>
      {frameworks.map((framework, idx) => (
        <Image
          key={framework + idx}
          src={assets[framework]}
          alt='framework-logo'
          height={80}
          width={80}
          className={cn('w-full h-full object-contain object-center absolute top-0 start-0 transition-all duration-300',
            currentFramework === framework ?
              'opacity-100 transnform-none' :
              idx > frameworks.indexOf(currentFramework) ?
                'opacity-0 -translate-y-2' :
                'opacity-0 translate-y-2k'
          )}
        />
      ))}
    </div>
  )
}

export default FrameworkRotation