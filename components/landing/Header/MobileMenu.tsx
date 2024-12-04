import React, {useEffect} from 'react';
import {iconComponents, menuItems} from '@/components/landing/Header/constants';
import Link from 'next/link';
import {LucideArrowRight} from 'lucide-react';
import {cn} from '@/lib/utils';
import {PATH_AUTH_LOGIN} from '@/constants/paths';

const IconList = () => (
  <div className="header-follow absolute bottom-2 left-0 right-0">
    <div className="flex items-center justify-evenly space-x-2 px-6 py-4">
      {iconComponents.map(({Icon, color, url}) => (
        <Link key={color} href={url}>
          <Icon className={cn('text-2xl text-zinc-800', color)} width={24} height={24}/>
        </Link>
      ))}
    </div>
  </div>
);

export default function MobileMenu({onClose}: { onClose: () => void }) {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.main-nav-menu-mobile')) {
        onClose();
      }
    };
    document.body.addEventListener('click', handleOutsideClick);
    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div
      className="main-nav-menu-mobile z-50 bg-background shadow-sm lg:shadow-none absolute left-0 top-0 bottom-0 right-0 border-r border-slate-400/30 border-dashed w-[270px] md:w-[300px] lg:flex lg:w-[300px] lg:flex-col">
      <button>
        <div className="header-logo p-2 pt-7 px-5 flex items-center gap-x-2">
          <h2 className="tebg-primary font-bold text-base">
                        Orange <span className="text-foreground">Bandit</span>
          </h2>
        </div>
      </button>
      <div className="header-menu lg:hidden">
        <ul className="flex-col space-y-5 px-8 py-5 pb-8 text-base font-medium text-zinc-800">
          {menuItems.map((menuItem, index) => (
            <li key={index}>
              <Link href={menuItem.url}>
                <button className="hover:border-b border-b-black">{menuItem.text}</button>
              </Link>
            </li>
          ))}
        </ul>
        <div className="space-y-2">
          <div className="px-6 lg:flex lg:items-center">
            <Link
              href={PATH_AUTH_LOGIN}
              className="shadow-[5px_5px_0px_0px_rgba(239,73,35,0.5)] bg-primary hover:shadow-md focus:ring-2 focus:ring-orange-500 ring-offset-2 ring-offset-background hover:drop-shadow transition duration-200 lg:w-1/3 w-full text-background text-sm rounded-lg px-5 py-2.5 group font-clash font-[500]">
                            Join now
              <LucideArrowRight className="inline-block ml-2"/>
            </Link>
          </div>
        </div>
      </div>
      <IconList/>
    </div>
  );
}