"use client";

import { cn } from "@/lib/utils";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onClick?: () => void;
  openIcon?: JSX.Element;
  closeIcon?: JSX.Element;
}

interface AccordionProps {
  openMultiple?: boolean;
  children: ReactElement[];
  openIcon?: JSX.Element;
  closeIcon?: JSX.Element;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  isOpen,
  onClick,
  openIcon,
  closeIcon,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const contentHeight = contentRef?.current?.getBoundingClientRect().height;
    wrapperRef.current!.style.height = isOpen ? contentHeight + "px" : "0px";
  }, [isOpen]);

  return (
    <div className="mb-2 bg-white border dark:bg-gray-900 rounded-xl">
      <div
        className="flex-align-center gap-x-4 p-4 cursor-pointer"
        onClick={onClick}
      >
        {isOpen ? (
          openIcon ? (
            openIcon
          ) : (
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full shrink-0"
            >
              <Minus className={cn("w-5 h-5", isOpen && "text-brand")} />
            </Button>
          )
        ) : closeIcon ? (
          closeIcon
        ) : (
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full shrink-0"
          >
            <Plus className="w-5 h-5" />
          </Button>
        )}
        <span className={cn("text-xl font-medium", isOpen && "text-brand")}>
          {title}
        </span>
      </div>
      <div
        ref={wrapperRef}
        className="overflow-hidden transition-all duration-300"
      >
        <div className="p-4" ref={contentRef}>
          {children}
        </div>
      </div>
    </div>
  );
};

const Accordion: React.FC<AccordionProps> = ({
  openMultiple = false,
  children,
  openIcon,
  closeIcon,
}) => {
  const [activeAccordions, setActiveAccordions] = useState<number[]>([]);

  const handleAccordionClick = (index: number) => {
    if (openMultiple) {
      const currentIndex = activeAccordions.indexOf(index);
      if (currentIndex !== -1) {
        setActiveAccordions(activeAccordions.filter((item) => item !== index));
      } else {
        setActiveAccordions([...activeAccordions, index]);
      }
    } else {
      if (activeAccordions[0] === index) {
        setActiveAccordions([]);
      } else {
        setActiveAccordions([index]);
      }
    }
  };

  return (
    <div>
      {React.Children.map(children, (child, index) =>
        React.isValidElement(child)
          ? React.cloneElement(child as ReactElement, {
              isOpen: activeAccordions.includes(index),
              onClick: () => handleAccordionClick(index),
              openIcon: openIcon,
              closeIcon: closeIcon,
            })
          : null
      )}
    </div>
  );
};

export { AccordionItem, Accordion };
