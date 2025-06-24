// src/components/Header/Header.tsx

import React, { useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { mainNavItems, rightNavItems } from './NavData';
import MobileMenu from './MobileMenu';
import images from '../../constants/images';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-[48px] bg-white/80 backdrop-blur-md z-30 border-b border-gray-200">
        <div className="container mx-auto px-4">
          {/* Main flex container. justify-between will now arrange 3 items. */}
          <div className="flex justify-between items-center h-20">

            {/* --- NEW 3-COLUMN STRUCTURE --- */}

            {/* COLUMN 1: LOGO (Aligns to the left) */}
            {/* We add a div with `flex-1` to help balance the layout */}
            <div className="flex-1 flex justify-start">
              <a href="/">
                <img src={images.logo} alt="Capsule Logo" className="h-12" />
              </a>
            </div>

            {/* COLUMN 2: MAIN NAVIGATION (Automatically centers) */}
            <nav className="hidden md:flex items-center gap-6">
              {mainNavItems.map((item) => (
                <div key={item.id}>
                  {item.isDropdown ? (
                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button className="flex items-center gap-1.5 text-brand-dark font-medium hover:text-brand-blue outline-none transition-colors">
                            <span>{item.label}</span>
                            <img 
                              src={images.chevrondown} 
                              alt="" 
                              className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} 
                            />
                          </Popover.Button>
                          <Transition
                            as={React.Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel 
                              className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden
                                ${item.isMegaMenu ? '' : 'w-max'}`
                              }
                            >
                              {item.dropdownContent}
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ) : (
                    <a href={item.href} className="text-brand-dark font-medium hover:text-brand-blue transition-colors">
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            {/* COLUMN 3: RIGHT SIDE ACTIONS (Aligns to the right) */}
            {/* We add a div with `flex-1` to help balance the layout */}
            <div className="hidden md:flex flex-1 justify-end items-center gap-6">
              {rightNavItems.map((item) => (
                 <div key={item.id}>
                  {item.isDropdown ? (
                     <Popover className="relative">
                        {({ open }) => (
                          <>
                            <Popover.Button className="flex items-center text-brand-dark hover:text-brand-blue outline-none transition-colors">
                                {item.label}
                            </Popover.Button>
                             <Transition as={React.Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1">
                              <Popover.Panel className="absolute top-full right-0 mt-4 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                                {item.dropdownContent}
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                  ) : (
                    <a href={item.href} className="text-brand-dark font-medium hover:text-brand-blue transition-colors">
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              <a href="/signup" className="bg-black text-white font-bold px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors">
                Try Free
              </a>
            </div>

            {/* Mobile Menu Button (unaffected by this change) */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(true)} className="text-brand-dark">
                <img src={images.hamburger} alt="Open Menu" className="w-10 h-10" />
              </button>
            </div>
            
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setMobileMenuOpen(false)} items={[...mainNavItems, ...rightNavItems]} />
    </>
  );
};

export default Header;