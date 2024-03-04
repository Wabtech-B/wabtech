"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

interface CustomButtonProps {
  text: string;
  link: string;
}

const CustomButton = ({ text, link }: CustomButtonProps) => {
  return (
    <AnimatePresence>
      <motion.div
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.1 }}
        className="group w-max"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <Button asChild variant="brand">
          <Link href={link}>
            <span>{text}</span>
            <span className="group-hover:translate-x-2 transition-a ml-2">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </Button>
      </motion.div>
    </AnimatePresence>
  );
};

export default CustomButton;
