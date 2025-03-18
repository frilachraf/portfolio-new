'use client';
import Image from "next/image";
import {motion} from 'framer-motion';
import { IconHome, IconNewSection, IconTerminal2 } from "@tabler/icons-react";
import {links, stickyContent, tabsContent} from "@/data/content";
import { Tabs } from "@/components/ui/tabs";
import { FloatingDock } from "@/components/ui/floating-dock";
export default function Home() {
  return (
    <>
    <div className="h-screen">
      {/* Hero */}
      {/* Skills */}
      {/* Projects */}
      {/* Experience */}
      {/* Features I can do */}
      {/* Footer */}
      {/* contact */}
      
      {/* Test */}

      {/* <StickyScroll content={stickyContent} /> */}
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabsContent} />
      </div>
      <div className="fixed bottom-4 right-4 mx-auto z-50 h-fit">
      <FloatingDock
          items={links}
          
        />
    </div>
    </div>
    
    </>
  );
}
