'use client';
import { links } from "@/data/content"
import { BackgroundBeams } from "./ui/background"
import { Button } from "./ui/button"
import { FloatingDock, FloatingDockMobile } from "./ui/floating-dock"
import { IoMoon, IoSunny } from "react-icons/io5";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes";
import LocaleSwitcherSelect from "./LocalSwitcher";
import { Locale, useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "@/i18n/navigation";
 
function LayoutWrapper({children}:{children : React.ReactNode}) {
  
  const {theme, setTheme } = useTheme()
  const locale = useLocale();
  const router = useRouter();
    const pathname = usePathname();
    const params = useParams();
  const ToggleMode = () => {
    if(theme === "dark"){
      setTheme("light")
    }else{
      setTheme("dark")}
  }
  const handleSwitchLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value as Locale;
  }

  return (
    <div className="p-2 h-screen flex flex-col gap-2 ">
      
      <header className='flex justify-between items-center border rounded-2xl px-4 py-4'>
        <div className="w-fit mx-auto sticky top-4 z-50 rounded-full">
          <FloatingDock
              items={links}  
            />
        </div>
          {/* <LocaleSwitcherSelect defaultValue={locale} label={'langugae'}>
            {routing.locales.map((cur) => (
              <option key={cur} value={cur}>
                {t('locale', {locale: cur})}
                {cur}
              </option>
            ))}
          </LocaleSwitcherSelect> */}
          <select name="" id="" onChange={handleSwitchLang}>
            <option value="ar">ar</option>
            <option value="fr">fr</option>
            <option value="es">es</option>
          </select>
            <Button variant="outline" size="icon" onClick={() => ToggleMode()} className="relative p-2 cursor-pointer">
              <IoSunny className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <IoMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
      </header>
      <main className="grow no-scrollbar overflow-y-scroll border rounded-2xl relative">
        <div className="fixed bottom-4 right-4 z-50">
          <FloatingDockMobile items={links}/>
        </div>
        {children}
      </main>
      {/* <BackgroundBeams className='bg-slate-900/50 z-0'/> */}
    </div>
  )
}

export default LayoutWrapper