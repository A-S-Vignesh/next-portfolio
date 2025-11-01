"use client";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Cloud, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function DarkmodeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Fix hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative flex items-center w-16 h-8 rounded-full p-1 transition-colors duration-500
      ${
        isDark
          ? "bg-linear-to-r from-gray-700 to-gray-900"
          : "bg-linear-to-r from-blue-300 to-blue-500"
      }
      shadow-inner`}
      aria-label="Toggle dark mode"
    >
      {/* Animated circle */}
      <motion.div
        className="absolute bg-white dark:bg-gray-800 w-6 h-6 rounded-full shadow-lg flex items-center justify-center"
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        style={{
          left: isDark ? "calc(100% - 1.75rem)" : "0.25rem",
        }}
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-yellow-300" />
        ) : (
          <Cloud className="w-4 h-4 text-blue-400" />
        )}
      </motion.div>

      {/* Small gradient glow */}
      <motion.div
        className="absolute inset-0 rounded-full blur-md opacity-50"
        animate={{
          background: isDark
            ? "linear-gradient(90deg, #4f46e5, #1e293b)"
            : "linear-gradient(90deg, #42daf5, #f97316)",
        }}
      />
    </button>
  );
}
