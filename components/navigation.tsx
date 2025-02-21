"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'Why Islam', href: '/why-islam' },
    { title: 'Resources', href: '/resources' },
    { title: 'Community', href: '/community' },
  ];

  return (
    <nav className="bg-[#8BA888] text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold hover-effect">
            Truth of Islam
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="hover-effect"
              >
                {item.title}
              </Link>
            ))}
            <Button
              className="bg-[#D4AF37] hover:bg-[#B89B30] text-white"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-[#8BA888] text-white">
              <div className="flex flex-col space-y-4 mt-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-lg hover-effect"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
                <Button
                  className="bg-[#D4AF37] hover:bg-[#B89B30] text-white w-full"
                >
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}