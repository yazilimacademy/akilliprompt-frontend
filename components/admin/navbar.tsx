"use client";

import { ThemeToggle } from "@/components/shared/theme-toggle-button";
import { CircleUser, Cpu, Home, Menu, Package, Package2, Search, Sparkle, Users } from "lucide-react";

import Link from "next/link";
import { useState } from "react";
import { ProfileButton } from "../shared/profile-button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { usePathname } from "next/navigation";

export default function AdminNavbar() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const pathname = usePathname();
  const handleTabClick = (tab: string) => {
    setActiveTab(tab.toLowerCase());
  };
  const navItems = [
    {
      name: "Dashboard",
      icon: <Home className='h-6 w-6' />,
      href: "/admin",
    },
    {
      name: "Prompts",
      icon: <Sparkle className='h-6 w-6' />,
      href: "/admin/prompts",
    },
    {
      name: "Categories",
      icon: <Package2 className='h-6 w-6' />,
      href: "/admin/categories",
    },
    {
      name: "Users",
      icon: <Users className='h-6 w-6' />,
      href: "/admin/users",
    },
  ];
  return (
    <header className='sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6'>
      <nav className='hidden flex-col absolute gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
        <Link
          href='/'
          className='flex items-center gap-2 text-lg font-semibold md:text-base'
        >
          <Package2 className='h-6 w-6' />
          <span className='sr-only'>Akıllı Prompt</span>
        </Link>
        {navItems.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className={cn(
              'text-foreground transition-colors hover:text-foreground',
              pathname === item.href.toLowerCase() && 'border-b-2 border-primary',
            )}
            onClick={() => handleTabClick(item.name)}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant='outline'
            size='icon'
            className='shrink-0 md:hidden'
          >
            <Menu className='h-5 w-5' />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left'>
          <nav className='grid gap-6 text-lg font-medium'>
            <Link
              href='#'
              className='flex items-center gap-2 text-lg font-semibold'
            >
              <Package2 className='h-6 w-6' />
              <span className='sr-only'>Akıllı Prompt</span>
            </Link>
            <Link href='#' className='hover:text-foreground'>
              Dashboard
            </Link>
            <Link
              href='#'
              className='text-muted-foreground hover:text-foreground'
            >
              Orders
            </Link>
            <Link
              href='#'
              className='text-muted-foreground hover:text-foreground'
            >
              Products
            </Link>
            <Link
              href='#'
              className='text-muted-foreground hover:text-foreground'
            >
              Customers
            </Link>
            <Link
              href='#'
              className='text-muted-foreground hover:text-foreground'
            >
              Analytics
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className='flex w-full justify-end items-center gap-4 md:ml-auto md:gap-2 lg:gap-4'>
        {
          pathname !== "/admin" && (
            <form className='ml-auto flex-1 sm:flex-initial'>
              <div className='relative'>
                <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
                <Input
                  type='search'
                  placeholder='Search...'
                  className='pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]'
                />
              </div>
            </form>
          )
        }
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='secondary' size='icon' className='rounded-full'>
              <CircleUser className='h-5 w-5' />
              <span className='sr-only'>Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
