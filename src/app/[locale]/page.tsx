import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import { FloatingDock } from '@/components/ui/floating-dock';
import { links } from '@/data/content';
import { BackgroundBeams } from '@/components/ui/background';
import { Button } from '@/components/ui/button';
import LayoutWrapper from '@/components/LayoutWrapper';
import { TextGenerateEffect } from '@/components/ui/text-blur';
import { FlipWords } from '@/components/ui/flip-words';
export default function HomePage() {
  const t = useTranslations('HomePage');
  const words = ["better", "cute", "beautiful", "modern"];
  return (
    <LayoutWrapper>
      {/* hero */}
      <div className="h-full flex items-center">
        <section className="text-center flex flex-col gap-4 p-4">
          <h1 className="text-3xl sm:text-7xl font-bold">Hi I'm <FlipWords words={['Achraf','Fril']}/></h1>
          <h2 className="text-3xl sm:text-7xl font-bold">I Build Scalable Web Applications</h2>
          <TextGenerateEffect 
            words={'I’m a full-stack developer with 3+ years of experience building modern web applications. I specialize in React, Node.js, and cloud technologies, and I love solving complex problems with clean, efficient code.'} 
            className='font-light text-lg sm:text-lg'
          />
          <div className="flex gap-8 justify-center mt-10">
            <Button variant={'outline'} className='p-6 px-12 rounded-full' >Button 1</Button>
          </div>
        </section>
      </div>
    </LayoutWrapper>
  );
}