"use client";

import React, { useState, useEffect } from "react";
import { menuItems } from "@/components/landing/Header/constants";
import MobileMenu from "@/components/landing/Header/MobileMenu";
import { CircleX, LucideArrowRight } from "lucide-react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { PATH_AUTH_LOGIN } from "@/constants/paths";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky navbar-home top-0 p-5 w-full bg-transparent z-50 container mx-auto">
      <nav className="bg-background/70 backdrop-blur-lg border border-slate-400/40 max-w-4xl xl:max-w-5xl mx-auto px-0 p-1 lg:p-2 rounded-full">
        <div className="flex items-center justify-between px-5 lg:px-0">
          <div className="flex-1">
            <button>
              <div className="header-logo p-2 flex items-center space-x-2">
                <h2 className="text-primary font-bold text-base">
                  Akıllı <span className="text-foreground">Prompt</span>
                </h2>
              </div>
            </button>
          </div>

          <div className="hidden lg:flex items-center justify-center gap-x-10 flex-1">
            <ul className="flex space-x-10 text-sm font-bold text-foreground/60">
              {menuItems.map((menuItem, index) => (
                <li key={index}>
                  <Link href={menuItem.url}>
                    <button className="border-b border-transparent hover:border-b-foreground hover:text-foreground">
                      {menuItem.text}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex cursor-pointer gap-x-2 flex-1 justify-end">
            <div className="text-sm border-transparent border rounded-full hover:shadow-lg px-3 py-2.5 font-semibold bg-primary text-background transition-colors duration-200">
              <Link href={PATH_AUTH_LOGIN}>Giriş Yap</Link>
            </div>

            <div className="text-sm hover:border-primary hover:border-b text-primary rounded-full px-3 py-2.5 font-semibold hover:bg-secondary transition-colors duration-200">
              <Link href={PATH_AUTH_LOGIN}>Aramıza Katıl</Link>
              <LucideArrowRight className="inline-block ml-2" size={16} />
            </div>
          </div>

          <div className="flex items-center justify-center lg:hidden">
            <button
              className={cn(
                "advanced-setting-toggle focus:outline-none transition-all duration-150",
                {
                  "rounded-full bg-slate-200 text-slate-800": isMobileMenuOpen,
                  "text-slate-200": !isMobileMenuOpen,
                }
              )}
              onClick={handleMobileMenuToggle}
            >
              {isMobileMenuOpen ? (
                <CircleX className=" focus:outline-none" />
              ) : (
                <HamburgerMenuIcon className="text-slate-800 focus:outline-none" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="main-nav-menu fixed inset-0 z-50 transform overflow-auto bg-transparent transition-all duration-300 lg:hidden">
          <MobileMenu onClose={handleMobileMenuClose} />
        </div>
      )}
    </header>
  );
}

export default Navbar;
