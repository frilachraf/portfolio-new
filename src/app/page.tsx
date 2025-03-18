'use client';
import Image from "next/image";
import {motion} from 'framer-motion';
import { IconHome, IconNewSection, IconTerminal2 } from "@tabler/icons-react";
import { FloatingDock } from "@/components/ui/floating-dock";

export default function Home() {
  return (
    <>
    <div className="h-screen">
      {/* Hero */}
      {/* Experience */}
      <div className="fixed bottom-4 mx-auto z-50 h-fit">
      <FloatingDock
          items={links}
          
        />
    </div>
    </div>
    
    </>
  );
}
const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Products",
    icon: (
      <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Components",
    icon: (
      <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Aceternity UI",
    icon: (
      <Image
        src="https://assets.aceternity.com/logo-dark.png"
        width={20}
        height={20}
        alt="Aceternity Logo"
      />
    ),
    href: "#",
  },
  
];