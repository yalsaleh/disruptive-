"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function GlassNavbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="rounded-full border border-white/20 bg-white/5 px-6 py-3 backdrop-blur-md flex items-center gap-8 shadow-[0_4px_24px_0_rgba(0,0,0,0.1)]"
    >
      <div className="flex md:flex items-center gap-6 text-sm font-light text-white/80 tracking-wide">
        <Link href="#services" className="hover:text-white transition-colors">Services</Link>
        <Link href="#partnership" className="hover:text-white transition-colors">Partnership</Link>
        <Link href="#process" className="hover:text-white transition-colors">Process</Link>
        <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
      </div>
    </motion.nav>
  );
}
