import Link from 'next/link';
import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';
import { Trello } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const headingFont = localFont({
  src: '../../public/fonts/font.woff2'
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900'
  ],
});

const MarketingPage = () => {
  return (
    <div className='flex items-center justify-center flex-col'>
      <div className={cn('flex items-center justify-center flex-col', headingFont.className)}>
        <h1 className='text-3xl md:text-6xl text-center text-neutral-800 mb-6'>
          Task Canvas just helps get tasks done!
        </h1>
        <div className='text-3xl md:text-6xl bg-gradient-to-r from-blue-600 to-red-600 text-white px-4 p-2 rounded-md w-fit'>
          Get ahead
        </div>
      </div>
      <div className={cn('text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto', textFont.className)}>
        Manage all your projects in a productive and collaborative way.
        From the home business to enterprise projects, Task Canvas helps
        your team work without the extraneous bells and whistles.
      </div>
      <Button className='mt-6' size='lg' asChild>
        <Link href="/signup">
          Get Task Canvas for FREE
        </Link>
      </Button>
    </div>
  )
}

export default MarketingPage