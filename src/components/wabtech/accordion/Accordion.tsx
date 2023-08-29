"use client";

import React, { ReactElement, useEffect, useRef, useState } from "react";

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
    <div className="border border-zinc-300 dark:border-zinc-600 rounded-md mb-2">
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={onClick}
      >
        <span className="text-xl font-medium">{title}</span>
        {isOpen ? (
          openIcon ? (
            openIcon
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-minus"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          )
        ) : closeIcon ? (
          closeIcon
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-plus"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        )}
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
