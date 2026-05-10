"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function GlassNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="rounded-full border border-white/20 bg-white/5 px-6 py-3 backdrop-blur-md flex items-center justify-between shadow-[0_4px_24px_0_rgba(0,0,0,0.1)] relative z-50"
      >
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-light text-white/80 tracking-wide">
          <Link href="#services" className="hover:text-white transition-colors">Services</Link>
          <Link href="#partnership" className="hover:text-white transition-colors">Partnership</Link>
          <Link href="#process" className="hover:text-white transition-colors">Process</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center justify-between w-full min-w-[200px]">
          <span className="text-white font-medium tracking-widest text-xs">DISRUPTIVE</span>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-1 focus:outline-none">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 p-6 rounded-3xl border border-white/10 bg-black/80 backdrop-blur-2xl z-40 md:hidden flex flex-col gap-6 shadow-2xl"
          >
            <Link onClick={() => setIsOpen(false)} href="#services" className="text-2xl font-light text-white tracking-tight">Services</Link>
            <div className="h-[1px] w-full bg-white/10" />
            <Link onClick={() => setIsOpen(false)} href="#partnership" className="text-2xl font-light text-white tracking-tight">Partnership</Link>
            <div className="h-[1px] w-full bg-white/10" />
            <Link onClick={() => setIsOpen(false)} href="#process" className="text-2xl font-light text-white tracking-tight">Process</Link>
            <div className="h-[1px] w-full bg-white/10" />
            <Link onClick={() => setIsOpen(false)} href="#contact" className="text-2xl font-light text-white tracking-tight">Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
