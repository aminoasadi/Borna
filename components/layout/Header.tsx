"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "خانه" },
  { href: "/features", label: "امکانات" },
  { href: "/contact", label: "ارتباط با ما" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 h-16 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo — right side in RTL */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image src="/logo.svg" alt="برنا پلاستیک" width={36} height={36} />
          <div>
            <div className="text-sm font-bold text-slate-900 leading-tight">برنا پلاستیک</div>
            <div className="text-[10px] text-slate-500 leading-tight">پورتال بنکداران</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-brand-primary rounded-lg hover:bg-slate-50 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile */}
        <div className="flex items-center gap-3">
          <Button
            render={<Link href="#" />}
            variant="outline"
            size="sm"
            className="hidden md:inline-flex border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-colors"
          >
            ورود به پورتال
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="md:hidden" />
              }
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 pt-12">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 border-t mt-2">
                  <Button
                    render={<Link href="#" />}
                    className="w-full bg-brand-primary hover:bg-brand-light"
                  >
                    ورود به پورتال
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
