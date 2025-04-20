import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  { label: "News", href: "/news" },
  { label: "Syllabus", href: "/syllabus", hasSubmenu: true },
  { label: "Calendar", href: "/calendar", hasSubmenu: true },
  { label: "Programs", href: "/programs" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

export const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-gray-700">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] bg-[#12A5BF] p-0 border-none">
        <div className="flex flex-col h-full">
          <div className="p-4 flex justify-end">
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <X className="h-6 w-6" />
              </Button>
            </SheetTrigger>
          </div>
          <nav className="flex-1 px-4 py-2">
            {menuItems.map((item) => (
              <div key={item.label} className="mb-4">
                <Link
                  to={item.href}
                  className="flex items-center justify-between py-3 px-4 text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  <span className="text-lg font-medium">{item.label}</span>
                  {item.hasSubmenu && (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </Link>
              </div>
            ))}
          </nav>
          <div className="mt-auto p-6 flex justify-center border-t border-white/10">
            <div className="w-16 h-16 rounded-full bg-white/10 overflow-hidden flex items-center justify-center">
              <img
                src="/user-avatar.jpg"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};