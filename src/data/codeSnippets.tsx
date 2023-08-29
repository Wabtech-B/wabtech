// --------------------------------------------------Accordion------------------------------------------------------------
export const accordionComponentCodeTS = `import React, { ReactElement, useEffect, useRef, useState } from "react";

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
    wrapperRef.current.style.height = isOpen ? contentHeight + "px" : "0px";
  }, [isOpen]);

  return (
    <div className="mb-2 border rounded-md border-zinc-300 dark:border-zinc-600">
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
`;
export const accordionComponentCodeJS = `import React, { useEffect, useRef, useState } from "react";

const AccordionItem = ({
  title,
  children,
  isOpen,
  onClick,
  openIcon,
  closeIcon,
}) => {
  const contentRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const contentHeight = contentRef?.current?.getBoundingClientRect().height;
    wrapperRef.current.style.height = isOpen ? contentHeight + "px" : "0px";
  }, [isOpen]);

  return (
    <div className="mb-2 border rounded-md border-zinc-300 dark:border-zinc-600">
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

const Accordion = ({ openMultiple = false, children, openIcon, closeIcon }) => {
  const [activeAccordions, setActiveAccordions] = useState([]);

  const handleAccordionClick = (index) => {
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
          ? React.cloneElement(child, {
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
`;
export const accordionPreviewCodeTS = `import { Accordion, AccordionItem } from "./Accordion";

const App = () => {
  return (
    <div>
      <Accordion>
        <AccordionItem title="What is React?">
          React is a JavaScript library for building user interfaces.
        </AccordionItem>
        <AccordionItem title="How does React work?">
          React uses a virtual DOM and a reconciliation algorithm to efficiently
          update the user interface.
        </AccordionItem>
        <AccordionItem title="What are components in React?">
          Components are the building blocks of a React application, allowing
          you to create reusable UI elements.
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default App;
`;
export const accordionPreviewCodeJS = `import { Accordion, AccordionItem } from "./Accordion";

const App = () => {
  return (
    <div>
      <Accordion>
        <AccordionItem title="What is React?">
          React is a JavaScript library for building user interfaces.
        </AccordionItem>
        <AccordionItem title="How does React work?">
          React uses a virtual DOM and a reconciliation algorithm to efficiently
          update the user interface.
        </AccordionItem>
        <AccordionItem title="What are components in React?">
          Components are the building blocks of a React application, allowing
          you to create reusable UI elements.
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default App;
`;

export const multipleOpenPreviewCode = `import { Accordion, AccordionItem } from "./Accordion";

const App = () => {
  return (
    <div>
      <Accordion openMultiple>
        <AccordionItem title="What is React?">
          React is a JavaScript library for building user interfaces.
        </AccordionItem>
        <AccordionItem title="How does React work?">
          React uses a virtual DOM and a reconciliation algorithm to efficiently
          update the user interface.
        </AccordionItem>
        <AccordionItem title="What are components in React?">
          Components are the building blocks of a React multipleOpenlication,
          allowing you to create reusable UI elements.
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default App;
`;
export const openCloseIconsPreviewCode = `import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Accordion, AccordionItem } from "./Accordion";

const App = () => {
  return (
    <div>
      <Accordion openIcon={<FiChevronUp />} closeIcon={<FiChevronDown />}>
        <AccordionItem title="What is React?">
          React is a JavaScript library for building user interfaces.
        </AccordionItem>
        <AccordionItem title="How does React work?">
          React uses a virtual DOM and a reconciliation algorithm to efficiently
          update the user interface.
        </AccordionItem>
        <AccordionItem title="What are components in React?">
          Components are the building blocks of a React application, allowing
          you to create reusable UI elements.
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default App;
`;

// --------------------------------------------------Alert------------------------------------------------------------
export const alertComponentCodeTS = `import React, { useState } from "react";

interface AlertProps {
  title?: string;
  variant?: "default" | "success" | "warning" | "error";
  removable?: boolean;
  children: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({
  title,
  variant = "default",
  removable,
  children,
}) => {
  const [dismissed, setDismissed] = useState(false);

  const getVariantClasses = (() => {
    switch (variant) {
      case "success":
        return "bg-green-100 border-l-4 border-green-500 text-green-500";
      case "warning":
        return "bg-yellow-100 border-l-4 border-yellow-500 text-yellow-500";
      case "error":
        return "bg-red-100 border-l-4 border-red-500 text-red-500";
      default:
        return "bg-blue-100 border-l-4 border-[#0bab7c] text-[#0bab7c]";
    }
  })();

  const getVariantIcon = () => {
    switch (variant) {
      case "success":
        return (
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
            className="feather feather-check"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        );
      case "warning":
        return (
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
            className="feather feather-alert-triangle"
          >
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        );
      case "error":
        return (
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
            className="feather feather-x-circle"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        );
      default:
        return (
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
            className="feather feather-info"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        );
    }
  };

  return dismissed ? null : (
    <div
      className={\`px-4 py-2 flex items-center justify-between dark:bg-zinc-800 my-3 \${getVariantClasses}\`}
    >
      <div className="flex gap-x-3">
     <div className="flex-shrink-0">{getVariantIcon()}</div>
        <div>
          {title && <div className="font-semibold">{title}</div>}
          {children}
        </div>
      </div>
      {removable && (
        <button
          onClick={() => setDismissed(true)}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Alert;
`;
export const alertComponentCodeJS = `import React, { useState } from "react";

const Alert = ({ title, variant = "default", removable, children }) => {
  const [dismissed, setDismissed] = useState(false);

  const getVariantClasses = (() => {
    switch (variant) {
      case "success":
        return "bg-green-100 border-l-4 border-green-500 text-green-500";
      case "warning":
        return "bg-yellow-100 border-l-4 border-yellow-500 text-yellow-500";
      case "error":
        return "bg-red-100 border-l-4 border-red-500 text-red-500";
      default:
        return "bg-blue-100 border-l-4 border-[#0bab7c] text-[#0bab7c]";
    }
  })();

  const getVariantIcon = () => {
    switch (variant) {
      case "success":
        return (
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
            className="feather feather-check"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        );
      case "warning":
        return (
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
            className="feather feather-alert-triangle"
          >
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        );
      case "error":
        return (
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
            className="feather feather-x-circle"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        );
      default:
        return (
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
            className="feather feather-info"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        );
    }
  };

  return dismissed ? null : (
    <div
      className={\`px-4 py-2 flex items-center justify-between dark:bg-zinc-800 my-3 \${getVariantClasses}\`}
    >
      <div className="flex gap-x-3">
      <div className="flex-shrink-0">{getVariantIcon()}</div>
        <div>
          {title && <div className="font-semibold">{title}</div>}
          {children}
        </div>
      </div>
      {removable && (
        <button
          onClick={() => setDismissed(true)}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Alert;
`;

export const alertPreviewCodeTS = `import Alert from "./Alert";

const App = () => {
  return (
    <>
      <Alert>This is a default alert</Alert>
    </>
  );
};

export default App;
`;
export const alertPreviewCodeJS = `import Alert from "./Alert";

const App = () => {
  return (
    <>
      <Alert>This is a default alert</Alert>
    </>
  );
};

export default App;
`;

export const alertVariantsPreviewCode = `import Alert from "./Alert";

const App = () => {
  return (
    <>
      <Alert>This is a default alert</Alert>
      <Alert variant="success">This is a success alert</Alert>
      <Alert variant="warning">This is a warning alert</Alert>
      <Alert variant="error">This is a error alert</Alert>
    </>
  );
};

export default App;
`;
export const alertTitlePreviewCode = `import Alert from "./Alert";

const App = () => {
  return (
    <>
      <Alert title="Default Alert">This is a default alert with title</Alert>
      <Alert variant="success" title="Success Alert">
        This is a success alert with title
      </Alert>
      <Alert variant="warning" title="Warning Alert">
        This is a warning alert with title
      </Alert>
      <Alert variant="error" title="Error Alert">
        This is a error alert with title
      </Alert>
    </>
  );
};

export default App;
`;
export const removableAlertPreviewCode = `import Alert from "./Alert";

const App = () => {
  return (
    <>
      <Alert removable>This is a removable default alert</Alert>
      <Alert variant="success" title="Success Alert" removable>
        This is a removable success alert with title
      </Alert>
      <Alert variant="warning" removable>
        This is a removable warning alert
      </Alert>
    </>
  );
};

export default App;
`;

// --------------------------------------------------Avatar------------------------------------------------------------
export const avatarComponentCodeTS = `import React from "react";

interface AvatarProps {
  src?: string;
  name?: string;
  size?: "small" | "medium" | "large";
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  name,
  size = "medium",
  className,
}) => {
  const renderInitials = () => {
    if (name) {
      const initials = name
        .split(" ")
        .map((part) => part.charAt(0))
        .join("")
        .toUpperCase();

      return initials;
    }
    return (
      <svg
        className="svg-icon"
        style={{
          width: size === "small" ? "1.5em" : "2.5rem",
          height: size === "small" ? "1.5em" : "2.5rem",
          verticalAlign: "middle",
          fill: "currentColor",
          overflow: "hidden",
        }}
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M512 597.994667q108.010667 0 225.002667 46.997333t116.992 123.008l0 85.994667-684.010667 0 0-85.994667q0-76.010667 116.992-123.008t225.002667-46.997333zM512 512q-69.994667 0-120-50.005333t-50.005333-120 50.005333-121.002667 120-51.008 120 51.008 50.005333 121.002667-50.005333 120-120 50.005333z" />
      </svg>
    );
  };

  const avatarClasses = \`rounded-full \${
    size === "small"
      ? "h-8 w-8 text-sm"
      : size === "medium"
      ? "h-12 w-12 text-2xl"
      : "h-16 w-16 text-3xl"
  } text-white\`;

  return (
    <div className={avatarClasses}>
      {src ? (
        <img src={src} alt={name || "Avatar"} className="rounded-full" />
      ) : (
        <div
          className={\`bg-[#0bab7c] h-full w-full rounded-full grid place-items-center \${
            className || ""
          }\`}
        >
          {renderInitials()}
        </div>
      )}
    </div>
  );
};

export default Avatar;
`;
export const avatarComponentCodeJS = `const Avatar = ({ src, name, size = "medium", className }) => {
  const renderInitials = () => {
    if (name) {
      const initials = name
        .split(" ")
        .map((part) => part.charAt(0))
        .join("")
        .toUpperCase();

      return initials;
    }
    return (
      <svg
        className="svg-icon"
        style={{
          width: size === "small" ? "1.5em" : "2.5rem",
          height: size === "small" ? "1.5em" : "2.5rem",
          verticalAlign: "middle",
          fill: "currentColor",
          overflow: "hidden",
        }}
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M512 597.994667q108.010667 0 225.002667 46.997333t116.992 123.008l0 85.994667-684.010667 0 0-85.994667q0-76.010667 116.992-123.008t225.002667-46.997333zM512 512q-69.994667 0-120-50.005333t-50.005333-120 50.005333-121.002667 120-51.008 120 51.008 50.005333 121.002667-50.005333 120-120 50.005333z" />
      </svg>
    );
  };

  const avatarClasses = \`rounded-full \${
    size === "small"
      ? "h-8 w-8 text-sm"
      : size === "medium"
      ? "h-12 w-12 text-2xl"
      : "h-16 w-16 text-3xl"
  } text-white\`;

  return (
    <div className={avatarClasses}>
      {src ? (
        <img src={src} alt={name || "Avatar"} className="rounded-full" />
      ) : (
        <div
          className={\`bg-[#0bab7c] h-full w-full rounded-full grid place-items-center \${
            className || ""
          }\`}
        >
          {renderInitials()}
        </div>
      )}
    </div>
  );
};

export default Avatar;
`;

export const avatarPreviewCodeTS = `import Avatar from "./Avatar";

const App = () => {
  return (
    <>
      <Avatar />
    </>
  );
};

export default App;
`;
export const avatarPreviewCodeJS = `import Avatar from "./Avatar";

const App = () => {
  return (
    <>
      <Avatar />
    </>
  );
};

export default App;
`;

export const avatarSizesPreviewCode = `import Avatar from "./Avatar";

const App = () => {
  return (
    <>
      {/* Small */}
      <div>
        <h1 className="text-lg">Small</h1>
        <div className="flex flex-wrap items-center gap-3 mt-3">
          <Avatar size="small" src="/1.png" />
          <Avatar size="small" src="/2.png" />
          <Avatar size="small" name="Brian" />
          <Avatar size="small" />
          <Avatar size="small" src="/5.png" />
          <Avatar size="small" name="Tom Brown" />
        </div>
      </div>

      {/* Medium */}
      <div className="mt-6">
        <h1 className="text-lg">Medium/Default</h1>
        <div className="flex flex-wrap items-center gap-3 mt-3">
          <Avatar size="medium" src="/1.png" />
          <Avatar size="medium" src="/2.png" />
          <Avatar size="medium" name="Brian" />
          <Avatar />
          <Avatar src="/5.png" />
          <Avatar name="Tom Brown" />
        </div>
      </div>

      {/* Large */}
      <div className="mt-6">
        <h1 className="text-lg">Large</h1>
        <div className="flex flex-wrap items-center gap-3 mt-3">
          <Avatar size="large" src="/1.png" />
          <Avatar size="large" src="/2.png" />
          <Avatar size="large" name="Brian" />
          <Avatar size="large" />
          <Avatar size="large" src="/5.png" />
          <Avatar size="large" name="Tom Brown" />
        </div>
      </div>
    </>
  );
};

export default App;
`;
export const customAvatarPreviewCode = `import Avatar from "./Avatar";

const App = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-3 mt-3">
        <Avatar name="Raven Kent" size="medium" className="bg-blue-500" />
        <Avatar name="Wabweni Brian" size="large" className="bg-red-500" />
      </div>
    </>
  );
};

export default App;
`;

// --------------------------------------------------Avatar Group------------------------------------------------------------
export const avatarGroupComponentCodeTS = `import React, { ReactElement } from "react";
interface AvatarGroupProps {
  size?: "small" | "medium" | "large";
  max?: number;
  children: React.ReactNode;
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({
  children,
  size = "medium",
  max = 3,
}) => {
  const avatars = React.Children.toArray(children).slice(0, max);

  return (
    <div className="flex">
      {avatars.map((avatar, index) => (
        <div
          key={index}
          className="relative -ml-4 transition-transform duration-300 ease-in-out transform rounded-full cursor-pointer hover:scale-110 first:ml-0"
        >
          <div className="border-2 border-white rounded-full dark:border-zinc-900">
            {React.isValidElement(avatar) &&
              React.cloneElement(avatar as ReactElement, { size })}
          </div>
          {index === max - 1 && React.Children.count(children) > max && (
            <div className="absolute bottom-0 right-0 bg-[#0bab7c] h-full w-full rounded-full flex items-center justify-center text-white border-2 border-white dark:border-zinc-900">
              +{React.Children.count(children) - max + 1}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AvatarGroup;
`;
export const avatarGroupComponentCodeJS = `import React from "react";

const AvatarGroup = ({ children, size = "medium", max = 3 }) => {
  const avatars = React.Children.toArray(children).slice(0, max);

  return (
    <div className="flex">
      {avatars.map((avatar, index) => (
        <div
          key={index}
          className="relative -ml-4 transition-transform duration-300 ease-in-out transform rounded-full cursor-pointer hover:scale-110 first:ml-0"
        >
          <div className="border-2 border-white rounded-full dark:border-zinc-900">
            {React.isValidElement(avatar) &&
              React.cloneElement(avatar, { size })}
          </div>
          {index === max - 1 && React.Children.count(children) > max && (
            <div className="absolute bottom-0 right-0 bg-[#0bab7c] h-full w-full rounded-full flex items-center justify-center text-white border-2 border-white dark:border-zinc-900">
              +{React.Children.count(children) - max + 1}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AvatarGroup;
`;

export const avatarGroupPreviewCodeTS = `import Avatar from "../avatar/Avatar";
import AvatarGroup from "./AvatarGroup";

const App = () => {
  return (
    <>
      <AvatarGroup>
        <Avatar src="1.png" />
        <Avatar src="2.png" />
        <Avatar name="Brian" />
        <Avatar />
        <Avatar src="5.png" />
        <Avatar name="Tom Brown" />
      </AvatarGroup>
    </>
  );
};

export default App;
`;
export const avatarGroupPreviewCodeJS = `import Avatar from "../avatar/Avatar";
import AvatarGroup from "./AvatarGroup";

const App = () => {
  return (
    <>
      <AvatarGroup>
        <Avatar src="1.png" />
        <Avatar src="2.png" />
        <Avatar name="Brian" />
        <Avatar />
        <Avatar src="5.png" />
        <Avatar name="Tom Brown" />
      </AvatarGroup>
    </>
  );
};

export default App;
`;

export const avatarGroupSizesPreviewCode = `import Avatar from "../avatar/Avatar";
import AvatarGroup from "./AvatarGroup";

const App = () => {
  return (
    <>
      {/* Small */}
      <div>
        <h1 className="text-lg">Small</h1>
        <div className="mt-3">
          <AvatarGroup size="small">
            <Avatar src="/1.png" />
            <Avatar src="/2.png" />
            <Avatar name="Brian" />
            <Avatar />
            <Avatar src="/5.png" />
            <Avatar name="Tom Brown" />
          </AvatarGroup>
        </div>
      </div>

      {/* Medium */}
      <div className="mt-6">
        <h1 className="text-lg">Medium/Default</h1>
        <div className="mt-3">
          <AvatarGroup>
            <Avatar src="/1.png" />
            <Avatar src="/2.png" />
            <Avatar name="Brian" />
            <Avatar />
            <Avatar src="/5.png" />
            <Avatar name="Tom Brown" />
          </AvatarGroup>
        </div>
      </div>

      {/* Large */}
      <div className="mt-6">
        <h1 className="text-lg">Large</h1>
        <div className="mt-3">
          <AvatarGroup size="large">
            <Avatar src="/1.png" />
            <Avatar src="/2.png" />
            <Avatar name="Brian" />
            <Avatar />
            <Avatar src="/5.png" />
            <Avatar name="Tom Brown" />
          </AvatarGroup>
        </div>
      </div>
    </>
  );
};

export default App;
`;
export const maxAvatarsPreviewCode = `import Avatar from "../avatar/Avatar";
import AvatarGroup from "./AvatarGroup";

const App = () => {
  return (
    <>
      <div className="mt-3">
        <AvatarGroup max={3}>
          <Avatar src="/1.png" />
          <Avatar src="/2.png" />
          <Avatar name="Brian" />
          <Avatar />
          <Avatar src="/5.png" />
          <Avatar name="Tom Brown" />
        </AvatarGroup>
      </div>

      <div className="mt-6">
        <AvatarGroup max={5}>
          <Avatar src="/1.png" />
          <Avatar src="/2.png" />
          <Avatar name="Brian" />
          <Avatar />
          <Avatar src="/5.png" />
          <Avatar name="Tom Brown" />
        </AvatarGroup>
      </div>

      <div className="mt-6">
        <AvatarGroup max={6}>
          <Avatar src="/1.png" />
          <Avatar src="/2.png" />
          <Avatar name="Brian" />
          <Avatar />
          <Avatar src="/5.png" />
          <Avatar name="Tom Brown" />
        </AvatarGroup>
      </div>
    </>
  );
};

export default App;
`;

// --------------------------------------------------Badge------------------------------------------------------------
export const badgeComponentCodeTS = `import React from "react";
import classNames from "classnames";

interface BadgeProps {
  label: string;
  variant?: "default" | "primary" | "success" | "warning" | "danger";
  avatar?: JSX.Element;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  label,
  variant = "default",
  avatar,
  className,
}) => {
  const badgeClasses = classNames(
    \`flex items-center flex-shrink-0 w-fit px-2 py-0.5 rounded-full text-xs font-medium \${
      className || ""
    } \${avatar ? "pl-1" : ""}\`,
    {
      "bg-slate-100 dark:bg-zinc-700 dark:text-zinc-100": variant === "default",
      "bg-blue-200 text-[#0bab7c]": variant === "primary",
      "bg-green-200 text-green-700": variant === "success",
      "bg-yellow-200 text-yellow-700": variant === "warning",
      "bg-red-200 text-red-700": variant === "danger",
    }
  );

  return (
    <span className={badgeClasses}>
      {avatar && (
        <div className="grid flex-shrink-0 w-8 h-8 mr-1 overflow-hidden rounded-full place-items-center">
          {avatar}
        </div>
      )}
      <div className="flex-shrink-0">{label}</div>
    </span>
  );
};

export default Badge;
`;
export const badgeComponentCodeJS = `import React from "react";
import classNames from "classnames";

const Badge = ({ label, variant = "default", avatar, className }) => {
  const badgeClasses = classNames(
    \`flex items-center flex-shrink-0 w-fit px-2 py-0.5 rounded-full text-xs font-medium \${
      className || ""
    } \${avatar ? "pl-1" : ""}\`,
    {
      "bg-slate-100 dark:bg-zinc-700 dark:text-zinc-100": variant === "default",
      "bg-blue-200 text-[#0bab7c]": variant === "primary",
      "bg-green-200 text-green-700": variant === "success",
      "bg-yellow-200 text-yellow-700": variant === "warning",
      "bg-red-200 text-red-700": variant === "danger",
    }
  );

  return (
    <span className={badgeClasses}>
      {avatar && (
        <div className="grid flex-shrink-0 w-8 h-8 mr-1 overflow-hidden rounded-full place-items-center">
          {avatar}
        </div>
      )}
      <div className="flex-shrink-0">{label}</div>
    </span>
  );
};

export default Badge;
`;

export const badgePreviewCodeTS = `import Badge from "./Badge";

const App = () => {
  return (
    <>
      <Badge label="Default" />
    </>
  );
};

export default App;
`;
export const badgePreviewCodeJS = `import Badge from "./Badge";

const App = () => {
  return (
    <>
      <Badge label="Default" />
    </>
  );
};

export default App;
`;

export const badgeVariantsPreviewCode = `import Badge from "./Badge";

const App = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge label="Default" />
      <Badge label="Primary" variant="primary" />
      <Badge label="Sucess" variant="success" />
      <Badge label="Danger" variant="danger" />
      <Badge label="Warning" variant="warning" />
    </div>
  );
};

export default App;
`;
export const badgeWithAvatarPreviewCode = `import Avatar from "../avatar/Avatar";
import Badge from "./Badge";

const App = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge label="Avatar" avatar={<Avatar size="small" />} />
      <Badge label="Raven Kent" avatar={<img src="/1.png" alt="Avatar" />} />
      <Badge label="Jane Doe" avatar={<Avatar size="small" src="/2.png" />} />
      <Badge label="Icon" variant="warning" avatar={<span>🔔</span>} />
    </div>
  );
};

export default App;
`;
export const customBadgePreviewCode = `import Badge from "./Badge";

const App = () => {
  return (
    <>
     <Badge label="Custom color" className="!bg-cyan-500 text-white" />
      <Badge label="Custom color" className="!bg-teal-500 text-white mt-2" />
    </>
  );
};

export default App;
`;

// --------------------------------------------------Breadcrumb------------------------------------------------------------
export const breadcrumbComponentCodeTS = `import React from "react";
import { FiChevronRight } from "react-icons/fi";

interface BreadcrumbItem {
  label: string;
  icon?: React.ReactNode;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: string | React.ReactNode;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, separator = <FiChevronRight />}) => {
  return (
    <div className="flex items-center space-x-2">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.icon && <span className="mr-1">{item.icon}</span>}
          <span>{item.label}</span>
          {index < items.length - 1 && (
            <span className="mx-1">{separator}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
`;
export const breadcrumbComponentCodeJS = `import React from "react";
import { FiChevronRight } from "react-icons/fi";

const Breadcrumb = ({ items, separator = <FiChevronRight /> }) => {
  return (
    <div className="flex items-center space-x-2">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.icon && <span className="mr-1">{item.icon}</span>}
          <span>{item.label}</span>
          {index < items.length - 1 && (
            <span className="mx-1">{separator}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
`;

export const breadcrumbPreviewCodeTS = `import Breadcrumb from "./Breadcrumb";

const App = () => {
  const items = [{ label: "Home" }, { label: "Users" }, { label: "Comments" }];

  return (
    <>
      <Breadcrumb items={items} />
    </>
  );
};

export default App;
`;
export const breadcrumbPreviewCodeJS = `import Breadcrumb from "./Breadcrumb";

const App = () => {
  const items = [{ label: "Home" }, { label: "Users" }, { label: "Comments" }];

  return (
    <>
      <Breadcrumb items={items} />
    </>
  );
};

export default App;
`;

export const customSeparatorPreviewCode = `import { FiArrowRight } from "react-icons/fi";
import Breadcrumb from "./Breadcrumb";

const App = () => {
  const items = [{ label: "Home" }, { label: "Users" }, { label: "Comments" }];

  return (
    <>
      <div>
        <Breadcrumb items={items} separator={<FiArrowRight />} />
      </div>
      <div className="mt-5">
        <Breadcrumb items={items} separator="|" />
      </div>
    </>
  );
};

export default App;
`;
export const breadcrumbWithIconsPreviewCode = `import { FiHome, FiMessageSquare, FiUser } from "react-icons/fi";
import Breadcrumb from "./Breadcrumb";

const App = () => {
  const items = [
    { label: "Home", icon: <FiHome />, to: "/" },
    { label: "Users", icon: <FiUser />, to: "/users" },
    { label: "Comments", icon: <FiMessageSquare />, to: "/comments" },
  ];

  return (
    <>
      <Breadcrumb items={items} />
    </>
  );
};

export default App;
`;

// --------------------------------------------------Breadcrumb with react router dom------------------------------------------------------------
export const breadcrumbWithReactRouterComponentCodeTS = `import React from "react";
import { FiHome } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

interface BreadcrumbProps {
  separator: string | React.ReactNode;
}

const RouterBreadcrumb: React.FC<BreadcrumbProps> = ({ separator }) => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path !== "");

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center list-none">
        <li className="flex items-center">
          <Link
            to="/"
            className="text-[#0bab7c] hover:underline flex items-center gap-x-2"
          >
            <FiHome className="mr-1" />
            Home
          </Link>
          {paths.length > 0 && <span className="mx-1">{separator}</span>}
        </li>
        {paths.map((path, index) => {
          if (path !== "/") {
            return (
              <li key={index} className="flex items-center">
                {index !== paths.length - 1 ? (
                  <>
                    <Link
                      to={\`/\${paths.slice(0, index + 1).join("/")}\`}
                      className="text-[#0bab7c] hover:underline capitalize"
                    >
                      {path}
                    </Link>
                    <span className="mx-1">
                      {index < paths.length - 1 && (
                        <span className="mx-1">{separator}</span>
                      )}
                    </span>
                  </>
                ) : (
                  <span className="capitalize">{path}</span>
                )}
              </li>
            );
          }
          return null;
        })}
      </ol>
    </nav>
  );
};

export default RouterBreadcrumb;
`;
export const breadcrumbWithReactRouterComponentCodeJS = `import React from "react";
import { FiHome } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const RouterBreadcrumb = ({ separator }) => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path !== "");

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center list-none">
        <li className="flex items-center">
          <Link
            to="/"
            className="text-[#0bab7c] hover:underline flex items-center gap-x-2"
          >
            <FiHome className="mr-1" />
            Home
          </Link>
          {paths.length > 0 && <span className="mx-1">{separator}</span>}
        </li>
        {paths.map((path, index) => {
          if (path !== "/") {
            return (
              <li key={index} className="flex items-center">
                {index !== paths.length - 1 ? (
                  <>
                    <Link
                      to={\`/\${paths.slice(0, index + 1).join("/")}\`}
                      className="text-[#0bab7c] hover:underline capitalize"
                    >
                      {path}
                    </Link>
                    <span className="mx-1">
                      {index < paths.length - 1 && (
                        <span className="mx-1">{separator}</span>
                      )}
                    </span>
                  </>
                ) : (
                  <span className="capitalize">{path}</span>
                )}
              </li>
            );
          }
          return null;
        })}
      </ol>
    </nav>
  );
};

export default RouterBreadcrumb;
`;

export const routerBreadcrumbPreviewCode = `import { FiChevronRight } from "react-icons/fi";
import RouterBreadcrumb from "./RouterBreadcrumb";

const App = () => {
  return (
    <>
      <RouterBreadcrumb separator={<FiChevronRight />} />
    </>
  );
};

export default App;
`;

// --------------------------------------------------Button------------------------------------------------------------
export const buttonComponentCodeTS = `import React from "react";

interface ButtonProps {
  children: JSX.Element | string;
  icon?: JSX.Element;
  variant?: "default" | "outlined" | "gradient";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  block?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  variant = "default",
  size = "medium",
  onClick,
  className,
  disabled = false,
  loading = false,
  block = false,
}) => {
  const buttonSizes = (() => {
    switch (size) {
      case "small":
        return "px-4 py-1 text-sm";
      case "medium":
        return "px-6 py-2";
      case "large":
        return "px-10 py-3 text-lg";
      default:
        return "px-6 py-2";
    }
  })();

  const buttonVariants = (() => {
    switch (variant) {
      case "default":
        return "bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80";
      case "outlined":
        return "border border-[#0bab7c] text-[#0bab7c]";
      case "gradient":
        return "bg-gradient-to-r text-white from-blue-600 to-cyan-400 hover:bg-gradient-to-l";
      default:
        return "bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80";
    }
  })();
  return (
    <>
      <button
        className={\`rounded-md \${buttonSizes} \${buttonVariants} \${
          disabled ? "opacity-60 !cursor-not-allowed" : ""
        } \${className || ""} \${
          icon || loading
            ? "flex items-center flex-shrink-0 gap-x-2 justify-center"
            : ""
        } \${block ? "block w-full" : ""}\`}
        onClick={onClick}
      >
        {icon && !loading && <span>{icon}</span>}
        {!icon && loading && (
          <div className="flex-shrink-0 w-4 h-4 border-2 border-solid rounded-full border-slate-100 animate-spin border-t-transparent"></div>
        )}
        {children}
      </button>
    </>
  );
};

export default Button;
`;
export const buttonComponentCodeJS = `import React from "react";

const Button = ({
  children,
  icon,
  variant = "default",
  size = "medium",
  onClick,
  className,
  disabled = false,
  loading = false,
  block = false,
}) => {
  const buttonSizes = (() => {
    switch (size) {
      case "small":
        return "px-4 py-1 text-sm";
      case "medium":
        return "px-6 py-2";
      case "large":
        return "px-10 py-3 text-lg";
      default:
        return "px-6 py-2";
    }
  })();

  const buttonVariants = (() => {
    switch (variant) {
      case "default":
        return "bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80";
      case "outlined":
        return "border border-[#0bab7c] text-[#0bab7c]";
      case "gradient":
        return "bg-gradient-to-r text-white from-blue-600 to-cyan-400 hover:bg-gradient-to-l";
      default:
        return "bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80";
    }
  })();
  return (
    <>
      <button
        className={\`rounded-md \${buttonSizes} \${buttonVariants} \${
          disabled ? "opacity-60 !cursor-not-allowed" : ""
        } \${className || ""} \${
          icon || loading
            ? "flex items-center flex-shrink-0 gap-x-2 justify-center"
            : ""
        } \${block ? "block w-full" : ""}\`}
        onClick={onClick}
      >
        {icon && !loading && <span>{icon}</span>}
        {!icon && loading && (
          <div className="flex-shrink-0 w-4 h-4 border-2 border-solid rounded-full border-slate-100 animate-spin border-t-transparent"></div>
        )}
        {children}
      </button>
    </>
  );
};

export default Button;
`;

export const buttonPreviewCodeTS = `import Button from "./Button";

const App = () => {
  return (
    <>
      <Button>Default</Button>
    </>
  );
};

export default App;
`;
export const buttonPreviewCodeJS = `import Button from "./Button";

const App = () => {
  return (
    <>
      <Button>Default</Button>
    </>
  );
};

export default App;
`;

export const buttonSizesPreviewCode = `import Button from "./Button";

const App = () => {
  return (
     <div className="flex flex-wrap items-center gap-3">
      <Button size="small">Small</Button>
      <Button>Medium</Button>
      <Button size="large">Large</Button>
    </div>
  );
};

export default App;
`;

export const buttonVariantsPreviewCode = `import Button from "./Button";

const App = () => {
  return (
     <div className="flex flex-wrap items-center gap-3">
      <Button>Default</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="gradient">Gradient</Button>
    </div>
  );
};

export default App;
`;
export const buttonWithIconPreviewCode = `import { FiUser } from "react-icons/fi";
import Button from "./Button";

const App = () => {
  return (
    <>
      <Button icon={<FiUser />} variant="gradient">
        Icon
      </Button>
    </>
  );
};

export default App;
`;
export const buttonWithLoadingPreviewCode = `import Button from "./Button";

const App = () => {
  return (
    <>
      <Button loading>Loading...</Button>
    </>
  );
};

export default App;
`;
export const blockButtonPreviewCode = `import Button from "./Button";

const App = () => {
  return (
    <>
      <Button block>Block</Button>
    </>
  );
};

export default App;
`;
export const disabledButtonPreviewCode = `import Button from "./Button";

const App = () => {
  return (
    <>
      <Button disabled>Disabled</Button>
    </>
  );
};

export default App;
`;
export const buttonWithOnclickPreviewCode = `import Button from "./Button";

const App = () => {
  return (
    <>
      <Button onClick={() => alert("Hello there!")}>Click me</Button>
    </>
  );
};

export default App;
`;
export const customButtonPreviewCode = `import Button from "./Button";

const App = () => {
  return (
    <>
      <Button className="bg-yellow-500 hover:bg-yellow-500/80">
        <div className="flex items-center gap-x-2">
          <span>🚀</span>
          <h1 className="text-2xl font-bold">Custom Content</h1>
        </div>
      </Button>
    </>
  );
};

export default App;
`;

// --------------------------------------------------Card------------------------------------------------------------
export const cardComponentCodeTS = `import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}
const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={\`p-4 bg-white shadow-sm border dark:border-zinc-600 dark:bg-zinc-700 rounded-lg \${
        className || ""
      }\`}
    >
      {children}
    </div>
  );
};

export default Card;
`;
export const cardComponentCodeJS = `import React from "react";

const Card = ({ children, className }) => {
  return (
    <div
      className={\`p-4 bg-white shadow-sm border dark:border-zinc-600 dark:bg-zinc-700 rounded-lg \${
        className || ""
      }\`}
    >
      {children}
    </div>
  );
};

export default Card;
`;

export const cardPreviewCodeTS = `import Card from "./Card";

const App = () => {
  return (
    <>
      <Card>
        <h1 className="text-2xl font-semibold">Card Content</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          voluptates, veniam, vel impedit reiciendis blanditiis libero sint non
          dignissimos consequuntur sequi reprehenderit natus dolores praesentium
          dolor cumque error, repellat fuga!
        </p>
      </Card>
    </>
  );
};

export default App;
`;
export const cardPreviewCodeJS = `import Card from "./Card";

const App = () => {
  return (
    <>
      <Card>
        <h1 className="text-2xl font-semibold">Card Content</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          voluptates, veniam, vel impedit reiciendis blanditiis libero sint non
          dignissimos consequuntur sequi reprehenderit natus dolores praesentium
          dolor cumque error, repellat fuga!
        </p>
      </Card>
    </>
  );
};

export default App;
`;

export const customCardPreviewCode = `import Card from "./Card";

const App = () => {
  return (
    <>
      <Card className="!border-red-500">
        <h3 className="text-lg font-medium">Custom Card</h3>
        <p>This card has a custom border color.</p>
      </Card>
    </>
  );
};

export default App;
`;

// --------------------------------------------------Checkbox------------------------------------------------------------
export const checkboxComponentCodeTS = `import React from "react";

interface CheckboxProps {
  label: string;
  value: string;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  value,
  id,
  onChange,
  checked,
}) => {
  return (
    <label
      className="flex items-center gap-x-2 w-fit my-3 select-none cursor-pointer"
      htmlFor={id}
    >
      <input
        type="checkbox"
        className="appearance-none w-5 h-5 border border-zinc-300 shadow-sm dark:border-zinc-600 rounded grid place-items-center checked:before:content-['\\002714'] checked:text-white checked:text-[0.6rem] checked:bg-[#0bab7c] checked:border-2 checked:border-white dark:checked:border-[#1e1e1e]  relative checked:after:absolute checked:after:w-6 checked:after:h-6 checked:after:border-2 checked:after:border-[#0bab7c] checked:after:rounded"
        value={value}
        id={id}
        onChange={onChange}
        checked={checked}
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
`;
export const checkboxComponentCodeJS = `import React from "react";

const Checkbox = ({ label, value, id, onChange, checked }) => {
  return (
    <label className="flex items-center my-3 cursor-pointer select-none gap-x-2 w-fit">
      <input
        type="checkbox"
        className="appearance-none w-5 h-5 border border-zinc-300 shadow-sm dark:border-zinc-600 rounded grid place-items-center checked:before:content-['\\002714'] checked:text-white checked:text-[0.6rem] checked:bg-[#0bab7c] checked:border-2 checked:border-white dark:checked:border-[#1e1e1e]  relative checked:after:absolute checked:after:w-6 checked:after:h-6 checked:after:border-2 checked:after:border-[#0bab7c] checked:after:rounded"
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
`;

export const checkboxPreviewCodeTS = `import Checkbox from "./Checkbox";

const App = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    console.log(e.target.value);
  };
  return (
    <>
      <Checkbox
        label="Default Checkbox"
        value="Default"
        onChange={handleChange}
      />
    </>
  );
};

export default App;
`;
export const checkboxPreviewCodeJS = `import Checkbox from "./Checkbox";

const App = () => {
  const handleChange = (e) => {
    console.log(e.target.checked);
    console.log(e.target.value);
  };
  return (
    <>
      <Checkbox
        label="Default Checkbox"
        value="Default"
        onChange={handleChange}
      />
    </>
  );
};

export default App;
`;

export const groupCheckboxesPreviewCodeTS = `import { useState } from "react";
import Checkbox from "./Checkbox";

const languages = [
  { value: "javascript", label: "JavaScript" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "csharp", label: "C#" },
  { value: "php", label: "PHP" },
  { value: "ruby", label: "Ruby" },
  { value: "swift", label: "Swift" },
  { value: "typescript", label: "TypeScript" },
];

const App = () => {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const handleLanguageChange = (languageValue: string) => {
    const isSelected = selectedLanguages.includes(languageValue);
    if (isSelected) {
      const updatedLanguages = selectedLanguages.filter(
        (value) => value !== languageValue
      );
      setSelectedLanguages(updatedLanguages);
    } else {
      const updatedLanguages = [...selectedLanguages, languageValue];
      setSelectedLanguages(updatedLanguages);
    }
  };

  return (
    <div>
      <h2>Select Favorite Programming Languages:</h2>
      {languages.map((language) => (
        <Checkbox
          key={language.value}
          label={language.label}
          value={language.value}
          onChange={() => handleLanguageChange(language.value)}
          checked={selectedLanguages.includes(language.value)}
        />
      ))}
      <div>
        <h3>Selected Languages: {selectedLanguages.toString()}</h3>
      </div>
    </div>
  );
};

export default App;
`;
export const groupCheckboxesPreviewCodeJS = `import { useState } from "react";
import Checkbox from "./Checkbox";

const languages = [
  { value: "javascript", label: "JavaScript" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "csharp", label: "C#" },
  { value: "php", label: "PHP" },
  { value: "ruby", label: "Ruby" },
  { value: "swift", label: "Swift" },
  { value: "typescript", label: "TypeScript" },
];

const App = () => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleLanguageChange = (languageValue) => {
    const isSelected = selectedLanguages.includes(languageValue);
    if (isSelected) {
      const updatedLanguages = selectedLanguages.filter(
        (value) => value !== languageValue
      );
      setSelectedLanguages(updatedLanguages);
    } else {
      const updatedLanguages = [...selectedLanguages, languageValue];
      setSelectedLanguages(updatedLanguages);
    }
  };

  return (
    <div>
      <h2>Select Favorite Programming Languages:</h2>
      {languages.map((language) => (
        <Checkbox
          key={language.value}
          label={language.label}
          value={language.value}
          onChange={() => handleLanguageChange(language.value)}
          checked={selectedLanguages.includes(language.value)}
        />
      ))}
      <div>
        <h3>Selected Languages: {selectedLanguages.toString()}</h3>
      </div>
    </div>
  );
};

export default App;
`;
export const checkboxWithFormikPreviewCode = `import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Checkbox from "./Checkbox";
import { FaSpinner } from "react-icons/fa";
import toast from "react-hot-toast";

interface FormValues {
  acceptedTerms: boolean;
}

const validationSchema = Yup.object().shape({
  acceptedTerms: Yup.boolean().oneOf([true], "You must accept the terms"),
});

const App: React.FC = () => {
  const handleSubmit = async (values: FormValues) => {
    toast.success(values.acceptedTerms ? "Accepted" : "");
    console.log("Form values:", values);
  };

  const formik = useFormik<FormValues>({
    initialValues: {
      acceptedTerms: false,
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Checkbox
        label="I accept the terms and conditions"
        value="acceptedTerms"
        id="acceptedTerms"
        onChange={formik.handleChange}
        checked={formik.values.acceptedTerms}
      />
      {formik.errors.acceptedTerms && formik.touched.acceptedTerms && (
        <div className="text-red-500 mt-2">{formik.errors.acceptedTerms}</div>
      )}
      <div className="mt-5">
        <button
          type="submit"
          className="px-6 py-2 rounded-md bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? (
            <FaSpinner className="animate-spin" />
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </form>
  );
};

export default App;
`;

// --------------------------------------------------Darkmode toggle------------------------------------------------------------
export const darkmodeToggleComponentCodeTS = `import { useEffect, useState } from "react";

type Mode = "dark" | "light" | "system";

const useDarkMode = (
  localStorageKey: string
): { mode: Mode; handleModeChange: (newMode: Mode) => void } => {
  const [mode, setMode] = useState<Mode>(
    (localStorage.getItem(localStorageKey) as Mode) || "system"
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, mode);
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (mode === "system") {
      if (prefersDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode, localStorageKey]);

  const handleModeChange = (newMode: Mode): void => {
    setMode(newMode);
  };

  return { mode, handleModeChange };
};

export default useDarkMode;
`;
export const darkmodeToggleComponentCodeJS = `import { useEffect, useState } from "react";

const useDarkMode = (localStorageKey) => {
  const [mode, setMode] = useState(
    localStorage.getItem(localStorageKey) || "system"
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, mode);
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (mode === "system") {
      if (prefersDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode, localStorageKey]);

  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  return { mode, handleModeChange };
};

export default useDarkMode;
`;

export const darkmodeTogglePreviewCodeTS = `import { FiMonitor, FiMoon, FiSun } from "react-icons/fi";
import useDarkMode from "../hooks/useDarkmode/useDarkMode";

const App = () => {
  const { mode, handleModeChange } = useDarkMode("darkModePreference");
  return (
    <>
      <div className="flex items-center gap-3 mt-3">
        {/* Dark */}
        <button
          className={\`px-6 py-2 rounded-md bg-slate-200 hover:bg-slate-300 text-slate-600 dark:text-slate-200 dark:bg-zinc-700 hover:dark:bg-zinc-600 flex items-center justify-center gap-x-2 \${
            mode === "dark"
              ? "!bg-[#0bab7c] hover:!bg-[#0bab7c]/80 !text-white"
              : ""
          }\`}
          onClick={() => handleModeChange("dark")}
        >
          <div>
            <FiMoon />
          </div>
          Dark
        </button>

        {/* Light */}
        <button
          className={\`px-6 py-2 rounded-md bg-slate-200 hover:bg-slate-300 text-slate-600 dark:text-slate-200 dark:bg-zinc-700 hover:dark:bg-zinc-600 flex items-center justify-center gap-x-2 \${
            mode === "light"
              ? "!bg-[#0bab7c] hover:!bg-[#0bab7c]/80 !text-white"
              : ""
          }\`}
          onClick={() => handleModeChange("light")}
        >
          <div>
            <FiSun />
          </div>
          Light
        </button>

        {/* System */}
        <button
          className={\`px-6 py-2 rounded-md bg-slate-200 hover:bg-slate-300 text-slate-600 dark:text-slate-200 dark:bg-zinc-700 hover:dark:bg-zinc-600 flex items-center justify-center gap-x-2 \${
            mode === "system"
              ? "!bg-[#0bab7c] hover:!bg-[#0bab7c]/80 !text-white"
              : ""
          }\`}
          onClick={() => handleModeChange("system")}
        >
          <div>
            <FiMonitor />
          </div>
          System
        </button>
      </div>
    </>
  );
};

export default App;
`;
export const darkmodeTogglePreviewCodeJS = `import { FiMonitor, FiMoon, FiSun } from "react-icons/fi";
import useDarkMode from "../hooks/useDarkmode/useDarkMode";

const App = () => {
  const { mode, handleModeChange } = useDarkMode("darkModePreference");
  return (
    <>
      <div className="flex items-center gap-3 mt-3">
        {/* Dark */}
        <button
          className={\`px-6 py-2 rounded-md bg-slate-200 hover:bg-slate-300 text-slate-600 dark:text-slate-200 dark:bg-zinc-700 hover:dark:bg-zinc-600 flex items-center justify-center gap-x-2 \${
            mode === "dark"
              ? "!bg-[#0bab7c] hover:!bg-[#0bab7c]/80 !text-white"
              : ""
          }\`}
          onClick={() => handleModeChange("dark")}
        >
          <div>
            <FiMoon />
          </div>
          Dark
        </button>

        {/* Light */}
        <button
          className={\`px-6 py-2 rounded-md bg-slate-200 hover:bg-slate-300 text-slate-600 dark:text-slate-200 dark:bg-zinc-700 hover:dark:bg-zinc-600 flex items-center justify-center gap-x-2 \${
            mode === "light"
              ? "!bg-[#0bab7c] hover:!bg-[#0bab7c]/80 !text-white"
              : ""
          }\`}
          onClick={() => handleModeChange("light")}
        >
          <div>
            <FiSun />
          </div>
          Light
        </button>

        {/* System */}
        <button
          className={\`px-6 py-2 rounded-md bg-slate-200 hover:bg-slate-300 text-slate-600 dark:text-slate-200 dark:bg-zinc-700 hover:dark:bg-zinc-600 flex items-center justify-center gap-x-2 \${
            mode === "system"
              ? "!bg-[#0bab7c] hover:!bg-[#0bab7c]/80 !text-white"
              : ""
          }\`}
          onClick={() => handleModeChange("system")}
        >
          <div>
            <FiMonitor />
          </div>
          System
        </button>
      </div>
    </>
  );
};

export default App;
`;

export const darkModeExampleTwoPreviewCode = ``;

// --------------------------------------------------Draggable Box------------------------------------------------------------
export const draggableBoxComponentCodeTS = `import React, { useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";

interface Box {
  id: string;
  content: React.ReactNode;
}

const initialBoxes: Box[] = [
  { id: "box-1", content: <div>Box 1</div> },
  { id: "box-2", content: <div>Box 2</div> },
  { id: "box-3", content: <div>Box 3</div> },
  { id: "box-4", content: <div>Box 4</div> },
];

const DraggableBoxes: React.FC = () => {
  const [boxes, setBoxes] = useState(initialBoxes);
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const handleDragEnd = (result: DropResult) => {
    setIsDraggingOver(false);

    if (!result.destination) return;

    const updatedBoxes = Array.from(boxes);
    const draggedBox = updatedBoxes[result.source.index];
    const destinationBox = updatedBoxes[result.destination.index];

    // Swap the positions of the dragged item and the destination item
    updatedBoxes[result.source.index] = destinationBox;
    updatedBoxes[result.destination.index] = draggedBox;

    setBoxes(updatedBoxes);
  };

  const handleDragOver = () => {
    setIsDraggingOver(true);
  };

  const handleDragLeave = () => {
    setIsDraggingOver(false);
  };

  return (
    <div className="px-4 mx-auto max-w-7xl">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="boxes" direction="horizontal">
          {(provided) => (
            <div
              className="relative grid grid-cols-4 gap-4 p-4 overflow-hidden bg-white border rounded-lg shadow dark:bg-zinc-800 dark:border-0"
              ref={provided.innerRef}
              {...provided.droppableProps}
              onMouseOver={handleDragOver}
              onMouseLeave={handleDragLeave}
            >
              {boxes.map((box, index) => (
                <Draggable key={box.id} draggableId={box.id} index={index}>
                  {(provided) => (
                    <div
                      className="bg-white shadow-lg border dark:border-0 dark:bg-zinc-700 p-4 rounded-md h-[200px]"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {box.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {isDraggingOver && (
                <div
                  className="absolute inset-0 border-2 border-dashed rounded-lg pointer-events-none border-slate-300 dark:border-slate-500"
                  style={{ zIndex: 9999 }}
                ></div>
              )}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default DraggableBoxes;
`;
export const draggableBoxComponentCodeJS = `import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const initialBoxes = [
  { id: "box-1", content: <div>Box 1</div> },
  { id: "box-2", content: <div>Box 2</div> },
  { id: "box-3", content: <div>Box 3</div> },
  { id: "box-4", content: <div>Box 4</div> },
];

const DraggableBoxes = () => {
  const [boxes, setBoxes] = useState(initialBoxes);
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const handleDragEnd = (result) => {
    setIsDraggingOver(false);

    if (!result.destination) return;

    const updatedBoxes = Array.from(boxes);
    const draggedBox = updatedBoxes[result.source.index];
    const destinationBox = updatedBoxes[result.destination.index];

    // Swap the positions of the dragged item and the destination item
    updatedBoxes[result.source.index] = destinationBox;
    updatedBoxes[result.destination.index] = draggedBox;

    setBoxes(updatedBoxes);
  };

  const handleDragOver = () => {
    setIsDraggingOver(true);
  };

  const handleDragLeave = () => {
    setIsDraggingOver(false);
  };

  return (
    <div className="px-4 mx-auto max-w-7xl">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="boxes" direction="horizontal">
          {(provided) => (
            <div
              className="relative grid grid-cols-4 gap-4 p-4 overflow-hidden bg-white border rounded-lg shadow dark:bg-zinc-800 dark:border-0"
              ref={provided.innerRef}
              {...provided.droppableProps}
              onMouseOver={handleDragOver}
              onMouseLeave={handleDragLeave}
            >
              {boxes.map((box, index) => (
                <Draggable key={box.id} draggableId={box.id} index={index}>
                  {(provided) => (
                    <div
                      className="bg-white shadow-lg border dark:border-0 dark:bg-zinc-700 p-4 rounded-md h-[200px]"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {box.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {isDraggingOver && (
                <div
                  className="absolute inset-0 border-2 border-dashed rounded-lg pointer-events-none border-slate-300 dark:border-slate-500"
                  style={{ zIndex: 9999 }}
                ></div>
              )}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default DraggableBoxes;
`;

export const draggableBoxPreviewCodeTS = `import DraggableBoxes from "./DraggableBoxes";

const App = () => {
  return (
    <>
      <DraggableBoxes />
    </>
  );
};

export default App;
`;
export const draggableBoxPreviewCodeJS = `import DraggableBoxes from "./DraggableBoxes";

const App = () => {
  return (
    <>
      <DraggableBoxes />
    </>
  );
};

export default App;
`;

// --------------------------------------------------Draggable List------------------------------------------------------------
export const draggableListComponentCodeTS = `import React from "react";
import { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import ListItem from "./ListItem";

interface DraggableListProps {
  items: React.ReactNode[];
}

const DraggableList: React.FC<DraggableListProps> = ({ items }) => {
  const [stateItems, setItems] = useState(items);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const updatedItems = Array.from(stateItems);
    const [removed] = updatedItems.splice(result.source.index, 1);
    updatedItems.splice(result.destination.index, 0, removed);

    setItems(updatedItems);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="items">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {stateItems.map((item, index) => (
              <ListItem key={index} id={index.toString()} index={index}>
                {item}
              </ListItem>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableList;
`;
export const draggableListComponentCodeJS = `import React from "react";
import { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import ListItem from "./ListItem";

const DraggableList = ({ items }) => {
  const [stateItems, setItems] = useState(items);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const updatedItems = Array.from(stateItems);
    const [removed] = updatedItems.splice(result.source.index, 1);
    updatedItems.splice(result.destination.index, 0, removed);

    setItems(updatedItems);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="items">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {stateItems.map((item, index) => (
              <ListItem key={index} id={index.toString()} index={index}>
                {item}
              </ListItem>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableList;
`;
export const draggableListItemComponentCodeTS = `import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { CgLayoutGridSmall } from "react-icons/cg";

interface ListItemProps {
  id: string;
  index: number;
  children: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ id, index, children }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          className={\`bg-white border dark:border-0 shadow dark:bg-zinc-800 rounded-md my-2 flex items-center \${
            snapshot.isDragging ? "shadow-md" : ""
          }\`}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div
            {...provided.dragHandleProps}
            style={{
              cursor: "move",
              display: "inline-block",
              marginRight: "8px",
            }}
            className="p-3"
          >
            <span>
              <CgLayoutGridSmall className="text-2xl text-zinc-400 cursor-move" />
            </span>
          </div>
          <div>{children}</div>
        </div>
      )}
    </Draggable>
  );
};

export default ListItem;
`;
export const draggableListItemComponentCodeJS = `import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { CgLayoutGridSmall } from "react-icons/cg";

const ListItem = ({ id, index, children }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          className={\`bg-white border dark:border-0 shadow dark:bg-zinc-800 rounded-md my-2 flex items-center \${
            snapshot.isDragging ? "shadow-md" : ""
          }\`}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div
            {...provided.dragHandleProps}
            style={{
              cursor: "move",
              display: "inline-block",
              marginRight: "8px",
            }}
            className="p-3"
          >
            <span>
              <CgLayoutGridSmall className="text-2xl cursor-move text-zinc-400" />
            </span>
          </div>
          <div>{children}</div>
        </div>
      )}
    </Draggable>
  );
};

export default ListItem;
`;

export const draggableListPreviewCodeTS = `import { FiHome } from "react-icons/fi";
import DraggableList from "./DraggableList";

const App = () => {
  const items = [
    <div className="flex items-center gap-2">
      <img src="/user.jpg" alt="" className="w-8 h-8 rounded-md" />
      <p>Wabweni Brian</p>
    </div>,
    <div className="flex items-center gap-2">
      <FiHome />
      <p>With icons also</p>
    </div>,
    <div className="flex items-center gap-2">
      <img src="/photo (65).jpg" alt="" className="w-8 h-8 rounded-md" />
      <p>Image 2</p>
    </div>,
    <div className="flex items-center gap-2">
      <img src="/photo (66).jpg" alt="" className="w-8 h-8 rounded-md" />
      <p>Image 3</p>
    </div>,
    <div className="flex items-center gap-2">
      <img src="/photo (67).jpg" alt="" className="w-8 h-8 rounded-md" />
      <p>Image 4</p>
    </div>,
  ];

  return (
    <>
      <DraggableList items={items} />
    </>
  );
};

export default App;
`;
export const draggableListPreviewCodeJS = `import { FiHome } from "react-icons/fi";
import DraggableList from "./DraggableList";

const App = () => {
  const items = [
    <div className="flex items-center gap-2">
      <img src="/user.jpg" alt="" className="w-8 h-8 rounded-md" />
      <p>Wabweni Brian</p>
    </div>,
    <div className="flex items-center gap-2">
      <FiHome />
      <p>With icons also</p>
    </div>,
    <div className="flex items-center gap-2">
      <img src="/photo (65).jpg" alt="" className="w-8 h-8 rounded-md" />
      <p>Image 2</p>
    </div>,
    <div className="flex items-center gap-2">
      <img src="/photo (66).jpg" alt="" className="w-8 h-8 rounded-md" />
      <p>Image 3</p>
    </div>,
    <div className="flex items-center gap-2">
      <img src="/photo (67).jpg" alt="" className="w-8 h-8 rounded-md" />
      <p>Image 4</p>
    </div>,
  ];

  return (
    <>
      <DraggableList items={items} />
    </>
  );
};

export default App;
`;

// --------------------------------------------------Drawer------------------------------------------------------------
export const drawerComponentCodeTS = `import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DrawerProps {
  isOpen?: boolean;
  onClose?: () => void;
  position?: "left" | "right" | "top" | "bottom";
  size?: "small" | "medium" | "large";
  openTrigger?: JSX.Element;
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  position = "left",
  size = "medium",
  openTrigger,
  children,
}) => {
  const [isInternalOpen, setIsInternalOpen] = useState(false);

  const handleOpen = () => {
    setIsInternalOpen(true);
  };
  const handleClose = () => {
    setIsInternalOpen(false);
  };

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (openTrigger) {
          handleClose();
        } else {
          onClose();
        }
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [openTrigger]);

  const handleOverlayClick = () => {
    if (openTrigger) {
      handleClose();
    } else {
      onClose();
    }
  };

  const handleCloseButtonClick = () => {
    if (openTrigger) {
      handleClose();
    } else {
      onClose();
    }
  };

  const drawerDimensions = (() => {
    if (position === "left" || position === "right") {
      switch (size) {
        case "small":
          return "max-w-[250px] w-full h-screen overflow-y-auto";
        case "medium":
          return "max-w-[320px] w-full h-screen overflow-y-auto";
        case "large":
          return "max-w-[600px] w-full h-screen overflow-y-auto";
        default:
          return "max-w-[320px] w-full h-screen overflow-y-auto";
      }
    } else if (position === "top" || position === "bottom") {
      switch (size) {
        case "small":
          return "w-full h-[150px]";
        case "medium":
          return "w-full h-[320px]";
        case "large":
          return "w-full h-[600px]";
        default:
          return "w-full h-[320px]";
      }
    }
  })();

  return (
    <>
      {/* Custom Trigger */}
      {openTrigger &&
        React.cloneElement(openTrigger as React.ReactElement, {
          onClick: () => handleOpen(),
        })}

      <div className="relative">
        <AnimatePresence>
          {(isOpen || isInternalOpen) && (
            <motion.div
              className="fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleOverlayClick}
            >
              <motion.div
                className={\`fixed \${
                  position === "left"
                    ? "left-0"
                    : position === "right"
                    ? "right-0"
                    : ""
                } \${
                  position === "top"
                    ? "top-0"
                    : position === "bottom"
                    ? "bottom-0"
                    : ""
                } \${drawerDimensions} bg-white dark:bg-zinc-700 shadow-lg\`}
                initial={{
                  x:
                    position === "left"
                      ? "-100%"
                      : position === "right"
                      ? "100%"
                      : 0,
                  y:
                    position === "top"
                      ? "-100%"
                      : position === "bottom"
                      ? "100%"
                      : 0,
                }}
                animate={{ x: 0, y: 0 }}
                exit={{
                  x:
                    position === "left"
                      ? "-100%"
                      : position === "right"
                      ? "100%"
                      : 0,
                  y:
                    position === "top"
                      ? "-100%"
                      : position === "bottom"
                      ? "100%"
                      : 0,
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-end p-4">
                  <button
                    className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-zinc-600"
                    onClick={handleCloseButtonClick}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-x"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
                <div className="p-2">{children}</div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Drawer;
`;
export const drawerComponentCodeJS = `import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Drawer = ({
  isOpen,
  onClose,
  position = "left",
  size = "medium",
  openTrigger,
  children,
}) => {
  const [isInternalOpen, setIsInternalOpen] = useState(false);

  const handleOpen = () => {
    setIsInternalOpen(true);
  };
  const handleClose = () => {
    setIsInternalOpen(false);
  };

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        if (openTrigger) {
          handleClose();
        } else {
          onClose();
        }
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [openTrigger]);

  const handleOverlayClick = () => {
    if (openTrigger) {
      handleClose();
    } else {
      onClose();
    }
  };

  const handleCloseButtonClick = () => {
    if (openTrigger) {
      handleClose();
    } else {
      onClose();
    }
  };

  const drawerDimensions = (() => {
    if (position === "left" || position === "right") {
      switch (size) {
        case "small":
          return "max-w-[250px] w-full h-screen overflow-y-auto";
        case "medium":
          return "max-w-[320px] w-full h-screen overflow-y-auto";
        case "large":
          return "max-w-[600px] w-full h-screen overflow-y-auto";
        default:
          return "max-w-[320px] w-full h-screen overflow-y-auto";
      }
    } else if (position === "top" || position === "bottom") {
      switch (size) {
        case "small":
          return "w-full h-[150px]";
        case "medium":
          return "w-full h-[320px]";
        case "large":
          return "w-full h-[600px]";
        default:
          return "w-full h-[320px]";
      }
    }
  })();

  return (
    <>
      {/* Custom Trigger */}
      {openTrigger &&
        React.cloneElement(openTrigger, {
          onClick: () => handleOpen(),
        })}

      <div className="relative">
        <AnimatePresence>
          {(isOpen || isInternalOpen) && (
            <motion.div
              className="fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleOverlayClick}
            >
              <motion.div
                className={\`fixed \${
                  position === "left"
                    ? "left-0"
                    : position === "right"
                    ? "right-0"
                    : ""
                } \${
                  position === "top"
                    ? "top-0"
                    : position === "bottom"
                    ? "bottom-0"
                    : ""
                } \${drawerDimensions} bg-white dark:bg-zinc-700 shadow-lg\`}
                initial={{
                  x:
                    position === "left"
                      ? "-100%"
                      : position === "right"
                      ? "100%"
                      : 0,
                  y:
                    position === "top"
                      ? "-100%"
                      : position === "bottom"
                      ? "100%"
                      : 0,
                }}
                animate={{ x: 0, y: 0 }}
                exit={{
                  x:
                    position === "left"
                      ? "-100%"
                      : position === "right"
                      ? "100%"
                      : 0,
                  y:
                    position === "top"
                      ? "-100%"
                      : position === "bottom"
                      ? "100%"
                      : 0,
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-end p-4">
                  <button
                    className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-zinc-600"
                    onClick={handleCloseButtonClick}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-x"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
                <div className="p-2">{children}</div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Drawer;
`;

export const drawerPreviewCodeTS = `import Drawer from "./Drawer";

const App = () => {
  return (
    <>
      <Drawer
        openTrigger={
          <button className="px-6 py-2 bg-[#0bab7c] hover:bg-[#0bab7c]/80 rounded-md">
            Default Drawer
          </button>
        }
      >
        <h2 className="mb-2 text-2xl font-semibold">Default Drawer</h2>
        <p>This is the content of the drawer.</p>
      </Drawer>
    </>
  );
};

export default App;
`;
export const drawerPreviewCodeJS = `import Drawer from "./Drawer";

const App = () => {
  return (
    <>
      <Drawer
        openTrigger={
          <button className="px-6 py-2 bg-[#0bab7c] hover:bg-[#0bab7c]/80 rounded-md">
            Default Drawer
          </button>
        }
      >
        <h2 className="mb-2 text-2xl font-semibold">Default Drawer</h2>
        <p>This is the content of the drawer.</p>
      </Drawer>
    </>
  );
};

export default App;
`;

export const drawerPositionsPreviewCode = `import Drawer from "./Drawer";

const App = () => {
  return (
    <>
      <div className="flex items-center gap-3 flex-wrap">
        <Drawer
          position="left"
          openTrigger={
            <button className="px-6 py-2 bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80 rounded-md">
              Left
            </button>
          }
        >
          <h2>Left Drawer</h2>
          <p>This is the content of the drawer.</p>
        </Drawer>
        <Drawer
          position="right"
          openTrigger={
            <button className="px-6 py-2 bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80 rounded-md">
              Right Drawer
            </button>
          }
        >
          <h2>Right Drawer</h2>
          <p>This is the content of the drawer.</p>
        </Drawer>
        <Drawer
          position="top"
          openTrigger={
            <button className="px-6 py-2 bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80 rounded-md">
              Top Drawer
            </button>
          }
        >
          <h2>Top Drawer</h2>
          <p>This is the content of the drawer.</p>
        </Drawer>
        <Drawer
          position="bottom"
          openTrigger={
            <button className="px-6 py-2 bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80 rounded-md">
              Bottom
            </button>
          }
        >
          <h2>Bottom Drawer</h2>
          <p>This is the content of the drawer.</p>
        </Drawer>
      </div>
    </>
  );
};

export default App;
`;
export const drawerSizesPreviewCode = `import Drawer from "./Drawer";

const App = () => {
  return (
    <>
      <div className="flex items-center gap-3 flex-wrap">
        <Drawer
          size="small"
          openTrigger={
            <button className="px-6 py-2 bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80 rounded-md">
              Small
            </button>
          }
        >
          <h2>Small Drawer</h2>
          <p>This is the content of the drawer.</p>
        </Drawer>
        <Drawer
          size="medium"
          openTrigger={
            <button className="px-6 py-2 bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80 rounded-md">
              Medium Drawer
            </button>
          }
        >
          <h2>Medium Drawer</h2>
          <p>This is the content of the drawer.</p>
        </Drawer>
        <Drawer
          size="large"
          openTrigger={
            <button className="px-6 py-2 bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80 rounded-md">
              Large
            </button>
          }
        >
          <h2>Large Drawer</h2>
          <p>This is the content of the drawer.</p>
        </Drawer>
      </div>
    </>
  );
};

export default App;
`;
export const drawerCustomStatePreviewCode = `import { useState } from "react";
import Drawer from "./Drawer";

const App = () => {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);

  return (
    <>
      <Drawer isOpen={isDrawerOpen} onClose={() => setisDrawerOpen(false)}>
        <h2 className="text-2xl font-semibold mb-2">Default Drawer</h2>
        <p>This is the content of the drawer.</p>
      </Drawer>
    </>
  );
};

export default App;
`;

// --------------------------------------------------Dropdown------------------------------------------------------------
export const dropdownComponentCodeTS = `import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface DropdownProps {
  options?: {
    label: string;
    icon?: JSX.Element;
    link: string;
  }[];
  general?: true;
  children?: React.ReactNode;
  className?: string;
  trigger: JSX.Element; // Custom trigger component
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  general,
  children,
  className,
  trigger,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside the component to close the dropdown
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Toggle the dropdown's visibility
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={dropdownRef} className="relative w-fit">
      <div className="cursor-pointer">
        {React.cloneElement(trigger as React.ReactElement, {
          onClick: handleToggle,
        })}
      </div>
      {/* Render the custom trigger */}
      {isOpen && (
        <motion.ul
          className={\`absolute z-10 mt-1 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-800 rounded-md shadow-sm overflow-hidden \${
            className || ""
          } \${
            /* Positioning based on available space */
            window.innerHeight -
              dropdownRef?.current!.getBoundingClientRect().bottom >=
            200
              ? "top-full"
              : "bottom-full"
          }\`} // Apply custom classes to the container
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={dropdownVariants}
        >
          {general ? (
            <>{children}</>
          ) : (
            <>
              {options?.map((option) => (
                <li
                  key={option.label}
                  className="flex items-center px-4 py-2 cursor-pointer hover:bg-slate-200 dark:hover:bg-zinc-700"
                >
                  {option.icon && <span className="mr-2">{option.icon}</span>}
                  <a
                    href={option.link}
                    className="text-slate-500 dark:text-slate-200"
                  >
                    {option.label}
                  </a>
                </li>
              ))}
            </>
          )}
        </motion.ul>
      )}
    </div>
  );
};

export default Dropdown;
`;
export const dropdownComponentCodeJS = `import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Dropdown = ({ options, general, children, className, trigger }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Handle clicks outside the component to close the dropdown
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Toggle the dropdown's visibility
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={dropdownRef} className="relative w-fit">
      <div className="cursor-pointer">
        {React.cloneElement(trigger, {
          onClick: handleToggle,
        })}
      </div>
      {/* Render the custom trigger */}
      {isOpen && (
        <motion.ul
          className={\`absolute z-10 mt-1 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-800 rounded-md shadow-sm overflow-hidden \${
            className || ""
          } \${
            /* Positioning based on available space */
            window.innerHeight -
              dropdownRef?.current?.getBoundingClientRect().bottom >=
            200
              ? "top-full"
              : "bottom-full"
          }\`} // Apply custom classes to the container
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={dropdownVariants}
        >
          {general ? (
            <>{children}</>
          ) : (
            <>
              {options?.map((option) => (
                <li
                  key={option.label}
                  className="flex items-center px-4 py-2 cursor-pointer hover:bg-slate-200 dark:hover:bg-zinc-700"
                >
                  {option.icon && <span className="mr-2">{option.icon}</span>}
                  <a
                    href={option.link}
                    className="text-slate-500 dark:text-slate-200"
                  >
                    {option.label}
                  </a>
                </li>
              ))}
            </>
          )}
        </motion.ul>
      )}
    </div>
  );
};

export default Dropdown;
`;

export const dropdownPreviewCodeTS = `import { FiChevronDown, FiHome, FiSettings, FiUser } from "react-icons/fi";
import Dropdown from "./Dropdown";

const App = () => {
  const dropdownOptions = [
    { label: "Home", icon: <FiHome />, link: "/" },
    { label: "Profile", icon: <FiUser />, link: "/profile" },
    { label: "Settings", icon: <FiSettings />, link: "/settings" },
  ];

  return (
    <>
      <Dropdown
        options={dropdownOptions}
        trigger={
          <button className="px-4 py-2 text-white bg-[#0bab7c] rounded-md hover:bg-[#0bab7c]/80 flex items-center gap-x-2">
            Menu
            <FiChevronDown />
          </button>
        }
      />
    </>
  );
};

export default App;
`;
export const dropdownPreviewCodeJS = `import { FiChevronDown, FiHome, FiSettings, FiUser } from "react-icons/fi";
import Dropdown from "./Dropdown";

const App = () => {
  const dropdownOptions = [
    { label: "Home", icon: <FiHome />, link: "/" },
    { label: "Profile", icon: <FiUser />, link: "/profile" },
    { label: "Settings", icon: <FiSettings />, link: "/settings" },
  ];

  return (
    <>
      <Dropdown
        options={dropdownOptions}
        trigger={
          <button className="px-4 py-2 text-white bg-[#0bab7c] rounded-md hover:bg-[#0bab7c]/80 flex items-center gap-x-2">
            Menu
            <FiChevronDown />
          </button>
        }
      />
    </>
  );
};

export default App;
`;

export const customDropdownPreviewCode = `import { FiLayers, FiLogOut, FiMenu, FiSettings } from "react-icons/fi";
import Dropdown from "./Dropdown";
import Avatar from "../avatar/Avatar";

const App = () => {
  return (
    <>
      <Dropdown
        general
        className="!w-[300px] p-4"
        trigger={
          <div className="w-10 h-10 bg-slate-200 dark:bg-zinc-700 hover:bg-slate-300 dark:hover:bg-zinc-800 rounded-lg grid place-items-center">
            <FiMenu />
          </div>
        }
      >
        <div>
          <div className="flex items-center gap-x-3 p-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-zinc-700 rounded-md">
            <Avatar size="small" />
            <p>Profile settings</p>
          </div>
          <div className="flex items-center gap-x-3 p-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-zinc-700 rounded-md">
            <Avatar size="small" />
            <p>Account</p>
          </div>
          <div className="ml-2 flex items-center gap-x-3 p-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-zinc-700 rounded-md">
            <FiSettings />
            <p>Settings</p>
          </div>
          <div className="ml-2 flex items-center gap-x-3 p-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-zinc-700 rounded-md">
            <FiLayers />
            <p>Themes</p>
          </div>
          <div className="border-t dark:border-t-zinc-600 mt-3">
            <div className=" ml-2 mt-2 flex items-center gap-x-3 p-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-zinc-700 rounded-md">
              <FiLogOut />
              <p>Sign out</p>
            </div>
          </div>
        </div>
      </Dropdown>
    </>
  );
};

export default App;
`;

// --------------------------------------------------Floating Input------------------------------------------------------------
export const floatingInputComponentCodeTS = `import React, { useState } from "react";
import { FiInfo } from "react-icons/fi";

interface InputProps {
  label: string;
  value: string;
  name?: string;
  id?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: string;
  icon?: JSX.Element;
  invalid?: boolean;
  multline?: boolean;
  cols?: number;
  rows?: number;
  errorText?: string;
}

const FloatingInput: React.FC<InputProps> = ({
  label,
  value,
  name,
  id,
  onChange,
  onBlur = () => {},
  type = "text",
  icon,
  invalid,
  multline = false,
  cols,
  rows,
  errorText,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setIsFocused(false);
    onBlur(e);
  };

  const getInputClasses = () => {
    let inputClasses = \`bg-white dark:bg-zinc-900 text-inherit font-inherit px-3 py-2 border border-zinc-300 dark:border-zinc-600 outline-none transition-a w-full text-base !rounded-md \${
      icon && "!pl-8"
    }\`;

    if (isFocused) {
      inputClasses += " focus:ring-2 !border-transparent focus:ring-[#0bab7c]";
    }
    if (invalid) {
      inputClasses += " !ring-2 !ring-red-600 !border-transparent";
    }
    if (invalid && isFocused) {
      inputClasses += " !ring-2 !ring-red-600";
    }
    return inputClasses;
  };

  return (
    <>
      <div className="relative block rounded-md">
        <label
          className={\`absolute z-20 top-[9px] left-2 text-[#8d9193] transition-a px-[0.15rem] pointer-events-none font-medium \${
            (isFocused || value) &&
            "!-top-[12px] !left-[12px] text-sm text-[#0bab7c] !bg-white dark:!bg-zinc-900"
          } \${invalid && "!text-red-500"} \${
            icon && "left-7"
          } transition-all duration-200\`}
        >
          {label}
        </label>
        <div className="relative">
          {icon && (
            <div
              className={\`absolute top-1/2 -translate-y-1/2 left-2 text-slate-400 \${
                invalid && "!text-red-500"
              } \${multline && "!top-3 translate-y-0"}\`}
            >
              {icon}
            </div>
          )}
          {invalid && (
            <div
              className={\`absolute top-1/2 -translate-y-1/2 right-2 \${
                multline && "!top-3 translate-y-0"
              }\`}
            >
              <FiInfo className="text-red-500" />
            </div>
          )}
          {multline ? (
            <textarea
              cols={cols}
              rows={rows}
              value={value}
              id={id}
              name={name}
              onChange={onChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              className={getInputClasses()}
              autoComplete="off"
            />
          ) : (
            <input
              type={type}
              value={value}
              id={id}
              name={name}
              onChange={onChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              className={getInputClasses()}
              autoComplete="off"
            />
          )}
        </div>
      </div>
      {errorText && <p className="mt-2 text-sm text-red-500">{errorText}</p>}
    </>
  );
};

export default FloatingInput;
`;
export const floatingInputComponentCodeJS = `import React, { useState } from "react";
import { FiInfo } from "react-icons/fi";

const FloatingInput = ({
  label,
  value,
  name,
  id,
  onChange,
  onBlur = () => {},
  type = "text",
  icon,
  invalid,
  multline = false,
  cols,
  rows,
  errorText,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = (e) => {
    setIsFocused(false);
    onBlur(e);
  };

  const getInputClasses = () => {
    let inputClasses = \`bg-white dark:bg-zinc-900 text-inherit font-inherit px-3 py-2 border border-zinc-300 dark:border-zinc-600 outline-none transition-a w-full text-base !rounded-md \${
      icon && "!pl-8"
    }\`;

    if (isFocused) {
      inputClasses += " focus:ring-2 !border-transparent focus:ring-[#0bab7c]";
    }
    if (invalid) {
      inputClasses += " !ring-2 !ring-red-600 !border-transparent";
    }
    if (invalid && isFocused) {
      inputClasses += " !ring-2 !ring-red-600";
    }
    return inputClasses;
  };

  return (
    <>
      <div className="relative block rounded-md">
        <label
          className={\`absolute z-20 top-[9px] left-2 text-[#8d9193] transition-a px-[0.15rem] pointer-events-none font-medium \${
            (isFocused || value) &&
            "!-top-[12px] !left-[12px] text-sm text-[#0bab7c] !bg-white dark:!bg-zinc-900"
          } \${invalid && "!text-red-500"} \${
            icon && "left-7"
          } transition-all duration-200\`}
        >
          {label}
        </label>
        <div className="relative">
          {icon && (
            <div
              className={\`absolute top-1/2 -translate-y-1/2 left-2 text-slate-400 \${
                invalid && "!text-red-500"
              } \${multline && "!top-3 translate-y-0"}\`}
            >
              {icon}
            </div>
          )}
          {invalid && (
            <div
              className={\`absolute top-1/2 -translate-y-1/2 right-2 \${
                multline && "!top-3 translate-y-0"
              }\`}
            >
              <FiInfo className="text-red-500" />
            </div>
          )}
          {multline ? (
            <textarea
              cols={cols}
              rows={rows}
              value={value}
              id={id}
              name={name}
              onChange={onChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              className={getInputClasses()}
              autoComplete="off"
            />
          ) : (
            <input
              type={type}
              value={value}
              id={id}
              name={name}
              onChange={onChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              className={getInputClasses()}
              autoComplete="off"
            />
          )}
        </div>
      </div>
      {errorText && <p className="mt-2 text-sm text-red-500">{errorText}</p>}
    </>
  );
};

export default FloatingInput;
`;

export const floatingInputPreviewCodeTS = `import FloatingInput from "./FloatingInput";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState<string>("");
  const [value2, setValue2] = useState<string>("");
  console.log(value, value2);

  return (
    <>
      <FloatingInput
        label="Username*"
        name="username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="mt-6">
        <FloatingInput
          label="Bio*"
          name="bio"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          multline
          rows={4}
        />
      </div>
    </>
  );
};

export default App;
`;
export const floatingInputPreviewCodeJS = `import FloatingInput from "./FloatingInput";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  console.log(value, value2);

  return (
    <>
      <FloatingInput
        label="Username*"
        name="username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="mt-6">
        <FloatingInput
          label="Bio*"
          name="bio"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          multline
          rows={4}
        />
      </div>
    </>
  );
};

export default App;
`;

export const floatingInputTypePreviewCode = `import FloatingInput from "./FloatingInput";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  console.log(value, value2, value3);

  return (
    <>
      <FloatingInput
        type="email"
        label="Email*"
        name="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="mt-6">
        <FloatingInput
          type="password"
          label="Password*"
          name="password"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
      </div>
      <div className="mt-6">
        <FloatingInput
          type="number"
          label="Phone Number*"
          name="phone_number"
          value={value3}
          onChange={(e) => setValue3(e.target.value)}
        />
      </div>
    </>
  );
};

export default App;
`;
export const floatingInputWithIconPreviewCode = `import { FiBriefcase, FiUser } from "react-icons/fi";
import FloatingInput from "./FloatingInput";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  console.log(value, value2);

  return (
    <>
      <FloatingInput
        label="Username*"
        name="username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        icon={<FiUser />}
      />
      <div className="mt-6">
        <FloatingInput
          label="Bio*"
          name="bio"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          multline
          rows={4}
          icon={<FiBriefcase />}
        />
      </div>
    </>
  );
};

export default App;
`;
export const floatingInputInvalidFeedbackPreviewCode = `import { FiBriefcase, FiUser } from "react-icons/fi";
import FloatingInput from "./FloatingInput";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  console.log(value, value2);

  return (
    <>
      <FloatingInput
        label="Username*"
        name="username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        icon={<FiUser />}
        invalid
      />
      <div className="mt-6">
        <FloatingInput
          label="Bio*"
          name="bio"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          multline
          rows={4}
          icon={<FiBriefcase />}
          invalid
        />
      </div>
    </>
  );
};

export default App;
`;
export const floatingInputErrorTextPreviewCode = `import { FiBriefcase, FiUser } from "react-icons/fi";
import FloatingInput from "./FloatingInput";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  console.log(value, value2);

  return (
    <>
      <FloatingInput
        label="Username*"
        name="username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        icon={<FiUser />}
        invalid
        errorText="User name is required"
      />
      <div className="mt-6">
        <FloatingInput
          label="Bio*"
          name="bio"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          multline
          rows={4}
          icon={<FiBriefcase />}
          invalid
          errorText="Please enter your bio"
        />
      </div>
    </>
  );
};

export default App;
`;
export const floatingInputWithFormikPreviewCodeTS = `import { useFormik } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { FiLock, FiMail, FiPhone, FiUser } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";
import FloatingInput from "./FloatingInput";

interface User {
  username: string;
  email: string;
  phone: string;
  password: string;
  password_confirmation: string;
}

const App = () => {
  const initialValues: User = {
    username: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  };

  // Validation
  const userValidationSchema = Yup.object().shape({
    username: Yup.string().required().min(3),
    email: Yup.string().email().required(),
    password: Yup.string()
      .required()
      .min(6, "Password must be at least 6 characters"),
    password_confirmation: Yup.string()
      .required("Please, confirm password")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const handleSubmit = async (values: User) => {
    toast.success("User added successfully");
    console.log(values);
  };

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    touched,
    isSubmitting,
    handleSubmit: submit,
  } = useFormik({
    initialValues,
    validationSchema: userValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <form onSubmit={submit}>
        <div className="flex items-center flex-col sm:flex-row gap-4 mt-6">
          {/* Username */}
          <div className="flex-1 w-full sm:w-fit">
            <FloatingInput
              label="Username*"
              value={values.username}
              id="username"
              icon={<FiUser />}
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={
                touched.username && (errors.username as unknown as boolean)
              }
            />
            {touched.username && errors.username ? (
              <div className="text-red-600 text-sm">{errors.username}</div>
            ) : null}
          </div>

          {/* Email */}
          <div className="flex-1 w-full sm:w-fit">
            <FloatingInput
              type="text"
              label="Email*"
              value={values.email}
              id="email"
              icon={<FiMail />}
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={touched.email && (errors.email as unknown as boolean)}
            />
            {touched.email && errors.email ? (
              <div className="text-red-600 text-sm">{errors.email}</div>
            ) : null}
          </div>
        </div>

        {/* Phone */}
        <div className="mt-6">
          <FloatingInput
            label="Phone"
            value={values.phone}
            id="phone"
            icon={<FiPhone />}
            onChange={handleChange}
            onBlur={handleBlur}
            invalid={touched.phone && (errors.phone as unknown as boolean)}
          />
          {touched.phone && errors.phone ? (
            <div className="text-red-600 text-sm">{errors.phone}</div>
          ) : null}
        </div>

        <div className="flex items-center flex-col sm:flex-row gap-4 mt-6">
          {/* Password */}
          <div className="flex-1 w-full sm:w-fit">
            <FloatingInput
              type="password"
              label="Password*"
              value={values.password}
              id="password"
              icon={<FiLock />}
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={
                touched.password && (errors.password as unknown as boolean)
              }
            />
            {touched.password && errors.password ? (
              <div className="text-red-600 text-sm">{errors.password}</div>
            ) : null}
          </div>

          {/* Password Confirmation */}
          <div className="flex-1 w-full sm:w-fit">
            <FloatingInput
              type="password"
              label="Password Confirmation*"
              value={values.password_confirmation}
              id="password_confirmation"
              icon={<FiLock />}
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={
                touched.password_confirmation &&
                (errors.password_confirmation as unknown as boolean)
              }
            />
            {touched.password_confirmation && errors.password_confirmation ? (
              <div className="text-red-600 text-sm">
                {errors.password_confirmation}
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-5">
          <button
            type="submit"
            className="px-6 py-2 rounded-md bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80"
            disabled={isSubmitting}
          >
            {isSubmitting ? <FaSpinner className="animate-spin" /> : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
`;
export const floatingInputWithFormikPreviewCodeJS = `import { useFormik } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { FiLock, FiMail, FiPhone, FiUser } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";
import FloatingInput from "./FloatingInput";

const App = () => {
  // Validation
  const userValidationSchema = Yup.object().shape({
    username: Yup.string().required().min(3),
    email: Yup.string().email().required(),
    password: Yup.string()
      .required()
      .min(6, "Password must be at least 6 characters"),
    password_confirmation: Yup.string()
      .required("Please, confirm password")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const handleSubmit = async (values) => {
    toast.success("User added successfully");
    console.log(values);
  };

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    touched,
    isSubmitting,
    handleSubmit: submit,
  } = useFormik({
    initialValues,
    validationSchema: userValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <form onSubmit={submit}>
        <div className="flex items-center flex-col sm:flex-row gap-4 mt-6">
          {/* Username */}
          <div className="flex-1 w-full sm:w-fit">
            <FloatingInput
              label="Username*"
              value={values.username}
              id="username"
              icon={<FiUser />}
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={touched.username && errors.username}
            />
            {touched.username && errors.username ? (
              <div className="text-red-600 text-sm">{errors.username}</div>
            ) : null}
          </div>

          {/* Email */}
          <div className="flex-1 w-full sm:w-fit">
            <FloatingInput
              type="text"
              label="Email*"
              value={values.email}
              id="email"
              icon={<FiMail />}
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={touched.email && errors.email}
            />
            {touched.email && errors.email ? (
              <div className="text-red-600 text-sm">{errors.email}</div>
            ) : null}
          </div>
        </div>

        {/* Phone */}
        <div className="mt-6">
          <FloatingInput
            label="Phone"
            value={values.phone}
            id="phone"
            icon={<FiPhone />}
            onChange={handleChange}
            onBlur={handleBlur}
            invalid={touched.phone && errors.phone}
          />
          {touched.phone && errors.phone ? (
            <div className="text-red-600 text-sm">{errors.phone}</div>
          ) : null}
        </div>

        <div className="flex items-center flex-col sm:flex-row gap-4 mt-6">
          {/* Password */}
          <div className="flex-1 w-full sm:w-fit">
            <FloatingInput
              type="password"
              label="Password*"
              value={values.password}
              id="password"
              icon={<FiLock />}
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={touched.password && errors.password}
            />
            {touched.password && errors.password ? (
              <div className="text-red-600 text-sm">{errors.password}</div>
            ) : null}
          </div>

          {/* Password Confirmation */}
          <div className="flex-1 w-full sm:w-fit">
            <FloatingInput
              type="password"
              label="Password Confirmation*"
              value={values.password_confirmation}
              id="password_confirmation"
              icon={<FiLock />}
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={
                touched.password_confirmation && errors.password_confirmation
              }
            />
            {touched.password_confirmation && errors.password_confirmation ? (
              <div className="text-red-600 text-sm">
                {errors.password_confirmation}
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-5">
          <button
            type="submit"
            className="px-6 py-2 rounded-md bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80"
            disabled={isSubmitting}
          >
            {isSubmitting ? <FaSpinner className="animate-spin" /> : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
`;

// --------------------------------------------------Gradient Icon------------------------------------------------------------
export const gradientIconComponentCodeTS = `import React from "react";

interface GradientIconProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  gradientId: string;
  gradientColors: string[];
  stroke?: boolean;
  className?: string;
}

const GradientIcon: React.FC<GradientIconProps> = ({
  icon: Icon,
  gradientId,
  gradientColors,
  stroke = false,
  className,
}) => {
  const iconProps = stroke
    ? { stroke: \`url(#\${gradientId})\` }
    : { fill: \`url(#\${gradientId})\` };

  const classNames = className ? \`gradient-icon \${className}\` : "gradient-icon";

  return (
    <div className={classNames}>
      <svg width="0" height="0">
        <linearGradient id={gradientId} x1="100%" y1="100%" x2="0%" y2="0%">
          {gradientColors.map((color, index) => (
            <stop
              key={index}
              offset={\`\${(index / (gradientColors.length - 1)) * 100}%\`}
              stopColor={color}
            />
          ))}
        </linearGradient>
      </svg>
      <Icon {...iconProps} />
    </div>
  );
};

export default GradientIcon;
`;
export const gradientIconComponentCodeJS = `import React from "react";

const GradientIcon = ({
  icon: Icon,
  gradientId,
  gradientColors,
  stroke = false,
  className,
}) => {
  const iconProps = stroke
    ? { stroke: \`url(#\${gradientId})\` }
    : { fill: \`url(#\${gradientId})\` };

  const classNames = className ? \`gradient-icon \${className}\` : "gradient-icon";

  return (
    <div className={classNames}>
      <svg width="0" height="0">
        <linearGradient id={gradientId} x1="100%" y1="100%" x2="0%" y2="0%">
          {gradientColors.map((color, index) => (
            <stop
              key={index}
              offset={\`\${(index / (gradientColors.length - 1)) * 100}%\`}
              stopColor={color}
            />
          ))}
        </linearGradient>
      </svg>
      <Icon {...iconProps} />
    </div>
  );
};

export default GradientIcon;
`;

export const gradientIconPreviewCodeTS = `import { FaBell } from "react-icons/fa";
import GradientIcon from "./GradientIcon";
import { FiBell, FiCheck, FiCheckCircle } from "react-icons/fi";

const App = () => {
  return (
    <>
      <div className="flex items-center gap-x-2">
        <GradientIcon
          icon={FaBell}
          gradientId="gradient"
          gradientColors={["#f9c51b", "#01680f"]}
          className="text-3xl"
        />
        <GradientIcon
          icon={FaBell}
          gradientId="gradient2"
          gradientColors={["red", "yellow"]}
          className="text-3xl"
        />
        <GradientIcon
          icon={FiBell}
          gradientId="gradient3"
          gradientColors={["cyan", "blue"]}
          className="mt-2 text-3xl"
          stroke
        />
        <GradientIcon
          icon={FiCheck}
          gradientId="gradient4"
          gradientColors={["blue", "yellow"]}
          className="text-3xl"
          stroke
        />
        <GradientIcon
          icon={FiCheckCircle}
          gradientId="gradient5"
          gradientColors={["red", "orange"]}
          className="text-3xl"
          stroke
        />
      </div>
    </>
  );
};

export default App;
`;
export const gradientIconPreviewCodeJS = `import { FaBell } from "react-icons/fa";
import GradientIcon from "./GradientIcon";
import { FiBell, FiCheck, FiCheckCircle } from "react-icons/fi";

const App = () => {
  return (
    <>
      <div className="flex items-center gap-x-2">
        <GradientIcon
          icon={FaBell}
          gradientId="gradient"
          gradientColors={["#f9c51b", "#01680f"]}
          className="text-3xl"
        />
        <GradientIcon
          icon={FaBell}
          gradientId="gradient2"
          gradientColors={["red", "yellow"]}
          className="text-3xl"
        />
        <GradientIcon
          icon={FiBell}
          gradientId="gradient3"
          gradientColors={["cyan", "blue"]}
          className="mt-2 text-3xl"
          stroke
        />
        <GradientIcon
          icon={FiCheck}
          gradientId="gradient4"
          gradientColors={["blue", "yellow"]}
          className="text-3xl"
          stroke
        />
        <GradientIcon
          icon={FiCheckCircle}
          gradientId="gradient5"
          gradientColors={["red", "orange"]}
          className="text-3xl"
          stroke
        />
      </div>
    </>
  );
};

export default App;
`;

export const strokeGradientIconPreviewCode = `import {
  FiBell,
  FiBriefcase,
  FiLayers,
  FiSettings,
  FiUser,
} from "react-icons/fi";
import GradientIcon from "./GradientIcon";

const App = () => {
  return (
    <>
      <div className="flex items-center gap-x-2">
        <GradientIcon
          icon={FiBell}
          gradientId="gradient"
          gradientColors={["#f9c51b", "#01680f"]}
          className="text-3xl"
          stroke
        />
        <GradientIcon
          icon={FiUser}
          gradientId="gradient2"
          gradientColors={["red", "yellow"]}
          className="text-3xl"
          stroke
        />
        <GradientIcon
          icon={FiLayers}
          gradientId="gradient3"
          gradientColors={["cyan", "blue"]}
          className="text-3xl mt-2"
          stroke
        />
        <GradientIcon
          icon={FiSettings}
          gradientId="gradient4"
          gradientColors={["blue", "yellow"]}
          className="text-3xl"
          stroke
        />
        <GradientIcon
          icon={FiBriefcase}
          gradientId="gradient5"
          gradientColors={["red", "orange"]}
          className="text-3xl"
          stroke
        />
      </div>
    </>
  );
};

export default App;
`;

// --------------------------------------------------Input------------------------------------------------------------
export const inputComponentCodeTS = `import React from "react";
import { FiInfo } from "react-icons/fi";

interface InputProps {
  label?: string;
  value: string;
  name?: string;
  id?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  invalid?: boolean;
  multline?: boolean;
  cols?: number;
  rows?: number;
  errorText?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  name,
  id,
  onChange,
  onBlur = () => {},
  type = "text",
  placeholder,
  icon,
  invalid,
  multline = false,
  cols,
  rows,
  errorText,
}) => {
  const handleInputBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onBlur(e);
  };

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <div className="relative">
        {icon && (
          <div
            className={\`absolute top-1/2 -translate-y-1/2 left-2 text-slate-400 \${
              invalid && "text-red-500"
            } \${multline && "!top-3 translate-y-0"}\`}
          >
            {icon}
          </div>
        )}
        {invalid && (
          <div
            className={\`absolute top-1/2 -translate-y-1/2 right-2 \${
              multline && "!top-3 translate-y-0"
            }\`}
          >
            <FiInfo className="text-red-500" />
          </div>
        )}
        {multline ? (
          <textarea
            cols={cols}
            rows={rows}
            value={value}
            id={id}
            name={name}
            onChange={onChange}
            onBlur={handleInputBlur}
            className={\`flex w-full !rounded-md !border border-zinc-300 bg-white dark:border-zinc-600 dark:bg-zinc-800 px-3 py-1 pt-2 !shadow-sm transition-colors placeholder:text-slate-400 focus-visible:outline-none focus:border-transparent focus-visible:ring-2 focus-visible:ring-[#0bab7c] disabled:cursor-not-allowed disabled:opacity-50 \${
              invalid
                ? "!ring-2 !ring-red-500 focus-visible:!ring-red-500 !border-transparent"
                : ""
            } \${icon ? "pl-7" : ""}\`}
            autoComplete="off"
            placeholder={placeholder}
          />
        ) : (
          <input
            type={type}
            value={value}
            id={id}
            name={name}
            onChange={onChange}
            onBlur={handleInputBlur}
            className={\`flex h-9 w-full !rounded-md !border border-zinc-300 bg-white dark:border-zinc-600 dark:bg-zinc-800 px-3 py-1 !shadow-sm transition-colors placeholder:text-slate-400 focus-visible:outline-none focus:border-transparent focus-visible:ring-2 focus-visible:ring-[#0bab7c] disabled:cursor-not-allowed disabled:opacity-50 \${
              invalid
                ? "!ring-2 !ring-red-500 focus-visible:!ring-red-500 !border-transparent"
                : ""
            } \${icon ? "pl-7" : ""}\`}
            autoComplete="off"
            placeholder={placeholder}
          />
        )}
      </div>
      {errorText && <p className="mt-2 text-sm text-red-500">{errorText}</p>}
    </>
  );
};

export default Input;
`;
export const inputComponentCodeJS = `import React from "react";
import { FiInfo } from "react-icons/fi";

const Input = ({
  label,
  value,
  name,
  id,
  onChange,
  onBlur = () => {},
  type = "text",
  placeholder,
  icon,
  invalid,
  multline = false,
  cols,
  rows,
  errorText,
}) => {
  const handleInputBlur = (e) => {
    onBlur(e);
  };

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <div className="relative">
        {icon && (
          <div
            className={\`absolute top-1/2 -translate-y-1/2 left-2 text-slate-400 \${
              invalid && "text-red-500"
            } \${multline && "!top-3 translate-y-0"}\`}
          >
            {icon}
          </div>
        )}
        {invalid && (
          <div
            className={\`absolute top-1/2 -translate-y-1/2 right-2 \${
              multline && "!top-3 translate-y-0"
            }\`}
          >
            <FiInfo className="text-red-500" />
          </div>
        )}
        {multline ? (
          <textarea
            cols={cols}
            rows={rows}
            value={value}
            id={id}
            name={name}
            onChange={onChange}
            onBlur={handleInputBlur}
            className={\`flex w-full !rounded-md !border border-zinc-300 bg-white dark:border-zinc-600 dark:bg-zinc-800 px-3 py-1 pt-2 !shadow-sm transition-colors placeholder:text-slate-400 focus-visible:outline-none focus:border-transparent focus-visible:ring-2 focus-visible:ring-[#0bab7c] disabled:cursor-not-allowed disabled:opacity-50 \${
              invalid
                ? "!ring-2 !ring-red-500 focus-visible:!ring-red-500 !border-transparent"
                : ""
            } \${icon ? "pl-7" : ""}\`}
            autoComplete="off"
            placeholder={placeholder}
          />
        ) : (
          <input
            type={type}
            value={value}
            id={id}
            name={name}
            onChange={onChange}
            onBlur={handleInputBlur}
            className={\`flex h-9 w-full !rounded-md !border border-zinc-300 bg-white dark:border-zinc-600 dark:bg-zinc-800 px-3 py-1 !shadow-sm transition-colors placeholder:text-slate-400 focus-visible:outline-none focus:border-transparent focus-visible:ring-2 focus-visible:ring-[#0bab7c] disabled:cursor-not-allowed disabled:opacity-50 \${
              invalid
                ? "!ring-2 !ring-red-500 focus-visible:!ring-red-500 !border-transparent"
                : ""
            } \${icon ? "pl-7" : ""}\`}
            autoComplete="off"
            placeholder={placeholder}
          />
        )}
      </div>
      {errorText && <p className="mt-2 text-sm text-red-500">{errorText}</p>}
    </>
  );
};

export default Input;
`;

export const inputPreviewCodeTS = `import { useState } from "react";
import Input from "./Input";

const App = () => {
  const [value, setValue] = useState<string>("");
  const [value2, setValue2] = useState<string>("");
  console.log(value, value2);

  return (
    <>
      <Input
        name="username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="mt-6">
        <Input
          name="bio"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          multline
          rows={4}
        />
      </div>
    </>
  );
};

export default App;
`;
export const inputPreviewCodeJS = `import { useState } from "react";
import Input from "./Input";

const App = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  console.log(value, value2);

  return (
    <>
      <Input
        name="username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="mt-6">
        <Input
          name="bio"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          multline
          rows={4}
        />
      </div>
    </>
  );
};

export default App;
`;

export const inputTypePreviewCode = `import { useState } from "react";
import Input from "./Input";

const App = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  console.log(value, value2, value3);

  return (
    <>
      <Input
        type="email"
        label="Email*"
        name="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="mt-6">
        <Input
          type="password"
          label="Password*"
          name="password"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
      </div>
      <div className="mt-6">
        <Input
          type="number"
          label="Phone Number*"
          name="phone_number"
          value={value3}
          onChange={(e) => setValue3(e.target.value)}
        />
      </div>
    </>
  );
};

export default App;
`;
export const inputWithIconPreviewCode = `import { FiBriefcase, FiUser } from "react-icons/fi";
import { useState } from "react";
import Input from "./Input";

const App = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  console.log(value, value2);

  return (
    <>
      <Input
        label="Username*"
        name="username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        icon={<FiUser />}
        placeholder="Username"
      />
      <div className="mt-6">
        <Input
          label="Bio*"
          name="bio"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          multline
          rows={4}
          icon={<FiBriefcase />}
          placeholder="Bio"
        />
      </div>
    </>
  );
};

export default App;
`;
export const inputInvalidFeedbackPreviewCode = `import { FiBriefcase, FiUser } from "react-icons/fi";
import { useState } from "react";
import Input from "./Input";

const App = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  console.log(value, value2);

  return (
    <>
      <Input
        label="Username*"
        name="username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        icon={<FiUser />}
        invalid
        errorText="User name is required"
      />
      <div className="mt-6">
        <Input
          label="Bio*"
          name="bio"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          multline
          rows={4}
          icon={<FiBriefcase />}
          invalid
          errorText="Please enter your bio"
        />
      </div>
    </>
  );
};

export default App;
`;
export const inputPlaceholderPreviewCode = `import { useState } from "react";
import Input from "./Input";

const App = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  console.log(value, value2);

  return (
    <>
      <Input
        name="username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Username"
      />
      <div className="mt-6">
        <Input
          name="bio"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          multline
          rows={4}
          placeholder="Bio"
        />
      </div>
    </>
  );
};

export default App;
`;
export const inputWithFormikPreviewCodeTS = `import { useFormik } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { FiLock, FiMail, FiPhone, FiUser } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";
import Input from "./Input";

interface User {
  username: string;
  email: string;
  phone: string;
  password: string;
  password_confirmation: string;
}

const App = () => {
  const initialValues: User = {
    username: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  };

  // Validation
  const userValidationSchema = Yup.object().shape({
    username: Yup.string().required().min(3),
    email: Yup.string().email().required(),
    password: Yup.string()
      .required()
      .min(6, "Password must be at least 6 characters"),
    password_confirmation: Yup.string()
      .required("Please, confirm password")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const handleSubmit = async (values: User) => {
    toast.success("User added successfully");
    console.log(values);
  };

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    touched,
    isSubmitting,
    handleSubmit: submit,
  } = useFormik({
    initialValues,
    validationSchema: userValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <form onSubmit={submit}>
        <div className="flex items-center flex-col sm:flex-row gap-4 mt-6">
          {/* Username */}
          <div className="flex-1 w-full sm:w-fit">
            <Input
              label="Username*"
              value={values.username}
              id="username"
              icon={<FiUser />}
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={
                touched.username && (errors.username as unknown as boolean)
              }
            />
            {touched.username && errors.username ? (
              <div className="text-red-600 text-sm">{errors.username}</div>
            ) : null}
          </div>

          {/* Email */}
          <div className="flex-1 w-full sm:w-fit">
            <Input
              type="text"
              label="Email*"
              value={values.email}
              id="email"
              icon={<FiMail />}
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={touched.email && (errors.email as unknown as boolean)}
            />
            {touched.email && errors.email ? (
              <div className="text-red-600 text-sm">{errors.email}</div>
            ) : null}
          </div>
        </div>

        {/* Phone */}
        <div className="mt-6">
          <Input
            label="Phone"
            value={values.phone}
            id="phone"
            icon={<FiPhone />}
            onChange={handleChange}
            onBlur={handleBlur}
            invalid={touched.phone && (errors.phone as unknown as boolean)}
          />
          {touched.phone && errors.phone ? (
            <div className="text-red-600 text-sm">{errors.phone}</div>
          ) : null}
        </div>

        <div className="flex items-center flex-col sm:flex-row gap-4 mt-6">
          {/* Password */}
          <div className="flex-1 w-full sm:w-fit">
            <Input
              type="password"
              label="Password*"
              value={values.password}
              id="password"
              icon={<FiLock />}
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={
                touched.password && (errors.password as unknown as boolean)
              }
            />
            {touched.password && errors.password ? (
              <div className="text-red-600 text-sm">{errors.password}</div>
            ) : null}
          </div>

          {/* Password Confirmation */}
          <div className="flex-1 w-full sm:w-fit">
            <Input
              type="password"
              label="Password Confirmation*"
              value={values.password_confirmation}
              id="password_confirmation"
              icon={<FiLock />}
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={
                touched.password_confirmation &&
                (errors.password_confirmation as unknown as boolean)
              }
            />
            {touched.password_confirmation && errors.password_confirmation ? (
              <div className="text-red-600 text-sm">
                {errors.password_confirmation}
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-5">
          <button
            type="submit"
            className="px-6 py-2 rounded-md bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80"
            disabled={isSubmitting}
          >
            {isSubmitting ? <FaSpinner className="animate-spin" /> : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
`;
export const inputWithFormikPreviewCodeJS = `import { useFormik } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { FiLock, FiMail, FiPhone, FiUser } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";
import Input from "./Input";

const FormikExample = () => {
  const initialValues = {
    username: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  };

  // Validation
  const userValidationSchema = Yup.object().shape({
    username: Yup.string().required().min(3),
    email: Yup.string().email().required(),
    password: Yup.string()
      .required()
      .min(6, "Password must be at least 6 characters"),
    password_confirmation: Yup.string()
      .required("Please, confirm password")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const handleSubmit = async (values) => {
    toast.success("User added successfully");
    console.log(values);
  };

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    touched,
    isSubmitting,
    handleSubmit: submit,
  } = useFormik({
    initialValues,
    validationSchema: userValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <form onSubmit={submit}>
        <div className="flex items-center flex-col sm:flex-row gap-4 mt-6">
          {/* Username */}
          <div className="flex-1 w-full sm:w-fit">
            <Input
              label="Username*"
              value={values.username}
              id="username"
              icon={<FiUser />}
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={touched.username && errors.username}
            />
            {touched.username && errors.username ? (
              <div className="text-red-600 text-sm">{errors.username}</div>
            ) : null}
          </div>

          {/* Email */}
          <div className="flex-1 w-full sm:w-fit">
            <Input
              type="text"
              label="Email*"
              value={values.email}
              id="email"
              icon={<FiMail />}
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={touched.email && errors.email}
            />
            {touched.email && errors.email ? (
              <div className="text-red-600 text-sm">{errors.email}</div>
            ) : null}
          </div>
        </div>

        {/* Phone */}
        <div className="mt-6">
          <Input
            label="Phone"
            value={values.phone}
            id="phone"
            icon={<FiPhone />}
            onChange={handleChange}
            onBlur={handleBlur}
            invalid={touched.phone && errors.phone}
          />
          {touched.phone && errors.phone ? (
            <div className="text-red-600 text-sm">{errors.phone}</div>
          ) : null}
        </div>

        <div className="flex items-center flex-col sm:flex-row gap-4 mt-6">
          {/* Password */}
          <div className="flex-1 w-full sm:w-fit">
            <Input
              type="password"
              label="Password*"
              value={values.password}
              id="password"
              icon={<FiLock />}
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={touched.password && errors.password}
            />
            {touched.password && errors.password ? (
              <div className="text-red-600 text-sm">{errors.password}</div>
            ) : null}
          </div>

          {/* Password Confirmation */}
          <div className="flex-1 w-full sm:w-fit">
            <Input
              type="password"
              label="Password Confirmation*"
              value={values.password_confirmation}
              id="password_confirmation"
              icon={<FiLock />}
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={
                touched.password_confirmation && errors.password_confirmation
              }
            />
            {touched.password_confirmation && errors.password_confirmation ? (
              <div className="text-red-600 text-sm">
                {errors.password_confirmation}
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-5">
          <button
            type="submit"
            className="px-6 py-2 rounded-md bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80"
            disabled={isSubmitting}
          >
            {isSubmitting ? <FaSpinner className="animate-spin" /> : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormikExample;
`;

// --------------------------------------------------Kanban Board------------------------------------------------------------
export const kanbanBoardComponentCodeTS = `import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { FiEdit, FiTrash } from "react-icons/fi";

interface Task {
  id: string;
  content: string;
}

interface Column {
  id: string;
  title: string;
  taskIds: string[];
}

const initialColumns: Column[] = [
  {
    id: "column-1",
    title: "To Do",
    taskIds: ["task-1", "task-2", "task-3"],
  },
  {
    id: "column-2",
    title: "In Progress",
    taskIds: ["task-4", "task-5"],
  },
  {
    id: "column-3",
    title: "Done",
    taskIds: ["task-6", "task-7", "task-8"],
  },
];

const initialTasks: Task[] = [
  { id: "task-1", content: "Task 1" },
  { id: "task-2", content: "Task 2" },
  { id: "task-3", content: "Task 3" },
  { id: "task-4", content: "Task 4" },
  { id: "task-5", content: "Task 5" },
  { id: "task-6", content: "Task 6" },
  { id: "task-7", content: "Task 7" },
  { id: "task-8", content: "Task 8" },
];

const KanbanBoard: React.FC = () => {
  const [columns, setColumns] = useState<{ [key: string]: Column }>(
    initialColumns.reduce((obj, column) => {
      obj[column.id] = column;
      return obj;
    }, {} as { [key: string]: Column })
  );

  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const [editingBoard, setEditingBoard] = useState<string | null>(null);
  const [newBoardTitle, setNewBoardTitle] = useState("");

  const [editingTask, setEditingTask] = useState<string | null>(null);
  const [newTaskContent, setNewTaskContent] = useState("");

  const [addingBoard, setAddingBoard] = useState(false);
  const [addingTask, setAddingTask] = useState<{ columnId: string } | null>(
    null
  );

  // ------------------------------------------------------------DRAG FUNCTIONALITY--------------------------------------------
  const onDragEnd = (result: any) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      // If there's no valid destination, the drag event is cancelled
      return;
    }

    if (type === "COLUMN") {
      // Dragging a board (column)
      if (destination.index === source.index) {
        // If the board is dropped in the same position, no update is needed
        return;
      }

      // Reorder the columns based on the drag and drop
      const newColumnOrder = Array.from(Object.values(columns));
      const [removedColumn] = newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, removedColumn);

      // Create a new object with updated column order
      const newColumns: Record<string, Column> = {};
      newColumnOrder.forEach((column) => {
        newColumns[column.id] = column;
      });

      // Update the state with the new column order
      setColumns(newColumns);
      return;
    }

    const startColumn = columns[source.droppableId];
    const finishColumn = columns[destination.droppableId];

    if (startColumn === finishColumn) {
      // If the task is moved within the same column
      const newTaskIds = Array.from(startColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      // Create a new column with the updated task order
      const newColumn: Column = {
        ...startColumn,
        taskIds: newTaskIds,
      };

      // Update the state with the new column
      setColumns({
        ...columns,
        [newColumn.id]: newColumn,
      });
    } else {
      // If the task is moved to a different column
      const startTaskIds = Array.from(startColumn.taskIds);
      startTaskIds.splice(source.index, 1);

      const finishTaskIds = Array.from(finishColumn.taskIds);
      finishTaskIds.splice(destination.index, 0, draggableId);

      // Create new start and finish columns with updated task orders
      const newStartColumn: Column = {
        ...startColumn,
        taskIds: startTaskIds,
      };

      const newFinishColumn: Column = {
        ...finishColumn,
        taskIds: finishTaskIds,
      };

      // Update the state with the new start and finish columns
      setColumns({
        ...columns,
        [newStartColumn.id]: newStartColumn,
        [newFinishColumn.id]: newFinishColumn,
      });
    }
  };

  // ----------------------------------------------------------------BOARDS---------------------------------------------------
  // Function to handle adding a new board (column)
  const handleAddBoard = () => {
    setAddingBoard(true);
    setNewBoardTitle("");
  };

  // Function to handle changes in the new board title input field
  const handleBoardInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewBoardTitle(event.target.value);
  };

  // Function to handle key events (e.g., Enter, Escape) in the new board title input field
  const handleBoardInputKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    // If Enter key is pressed, check if it's an update or new board creation
    if (event.key === "Enter") {
      // Editing an existing board (column)
      if (editingBoard) {
        const updatedColumns = { ...columns };
        updatedColumns[editingBoard].title = newBoardTitle.trim();
        setColumns(updatedColumns);
        setEditingBoard(null);
      } else if (newBoardTitle.trim() !== "") {
        // Adding a new board (column)
        const newColumnId = \`column-\${Date.now()}\`;
        const newColumn: Column = {
          id: newColumnId,
          title: newBoardTitle.trim(),
          taskIds: [],
        };
        setColumns((prevColumns) => ({
          ...prevColumns,
          [newColumnId]: newColumn,
        }));
        setAddingBoard(false);
        setNewBoardTitle("");
      }
      // If Escape key is pressed, cancel adding/editing a board
    } else if (event.key === "Escape") {
      setAddingBoard(false);
      setNewBoardTitle("");
    }
  };

  // Function to handle editing an existing board (column)
  const handleEditBoard = (columnId: string) => {
    setEditingBoard(columnId);
    setNewBoardTitle(columns[columnId].title);
  };

  // ----------------------------------------------------------------TASKS---------------------------------------------------
  // Function to handle adding a new task to a column
  const handleAddTask = (columnId: string) => {
    setAddingTask({ columnId });
  };

  // Function to handle changes in the new task content input field
  const handleTaskInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewTaskContent(event.target.value);
  };

  // Function to handle key events (e.g., Enter, Escape) in the new task content input field
  const handleTaskInputKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    taskId?: string
  ) => {
    // If Enter key is pressed and there's an edited task, update the task content
    if (event.key === "Enter") {
      if (editingTask && newTaskContent.trim() !== "") {
        const updatedTasks = tasks.map((task) =>
          task.id === editingTask ? { ...task, content: newTaskContent } : task
        );
        setTasks(updatedTasks);
        setEditingTask(null);
      } else if (newTaskContent.trim() !== "") {
        // If Enter key is pressed and it's a new task, add the task to the column
        const newTaskId = \`task-\${Date.now()}\`;
        const newTask: Task = {
          id: newTaskId,
          content: newTaskContent.trim(),
        };
        const updatedColumns = { ...columns };
        console.log(updatedColumns);
        updatedColumns[addingTask!.columnId].taskIds.push(newTaskId);
        setColumns(updatedColumns);
        setTasks((prevTasks) => [...prevTasks, newTask]);
        setAddingTask(null);
        setNewTaskContent("");
      }
      setNewTaskContent("");
      // If Escape key is pressed, cancel adding/editing a task
    } else if (event.key === "Escape") {
      setAddingTask(null);
      setNewTaskContent("");
    }
  };

  // Function to handle editing an existing task
  const handleEditTask = (taskId: string) => {
    setEditingTask(taskId);
    setNewTaskContent(tasks.find((task) => task.id === taskId)?.content || "");
  };

  // Function to handle deleting a task from all columns it's in
  const handleDeleteTask = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    setColumns((prevColumns) => {
      const updatedColumns = { ...prevColumns };
      Object.keys(updatedColumns).forEach((colId) => {
        const column = updatedColumns[colId];
        column.taskIds = column.taskIds.filter((id) => id !== taskId);
      });
      return updatedColumns;
    });
  };

  // Function to handle deleting a board (column) and its tasks
  const handleDeleteBoard = (boardId: string) => {
    setColumns((prevColumns) => {
      const updatedColumns = { ...prevColumns };
      delete updatedColumns[boardId];
      return updatedColumns;
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="board" type="COLUMN" direction="horizontal">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex flex-wrap justify-center p-8 mt-8 overflow-hidden bg-white border rounded-lg md:justify-start dark:border-0 dark:bg-zinc-700 gap-y-4"
          >
            {Object.values(columns).map((column, columnIndex) => (
              <div className="flex flex-col w-[350px] mx-4" key={column.id}>
                <Draggable draggableId={column.id} index={columnIndex}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      className="rounded-lg p-4 bg-white border dark:border-0 dark:bg-zinc-800 shadow min-h-[400px]"
                    >
                      <div
                        {...provided.dragHandleProps}
                        className="mb-4 text-xl font-semibold cursor-move text-zinc-400"
                      >
                        {editingBoard === column.id ? (
                          <input
                            autoFocus
                            value={newBoardTitle}
                            onChange={handleBoardInputChange}
                            onKeyDown={handleBoardInputKeyDown}
                            placeholder="Board title"
                            className="rounded-lg p-2 mt-2 w-full bg-white shadow-sm border dark:border-0 dark:bg-zinc-600 outline-none focus:ring-2 focus:!border-transparent focus:ring-indigo-500"
                            onBlur={() => setEditingBoard(null)}
                          />
                        ) : (
                          <div
                            className="flex items-center justify-between"
                            {...provided.dragHandleProps}
                          >
                            <div className="text-xl font-semibold">
                              {column.title}
                            </div>
                            <div className="flex items-center">
                              <div className="p-2 cursor-pointer group">
                                <FiEdit
                                  className="text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-white"
                                  onClick={() => handleEditBoard(column.id)}
                                />
                              </div>
                              <div className="p-2 cursor-pointer group">
                                <FiTrash
                                  className="text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-white"
                                  onClick={() => handleDeleteBoard(column.id)}
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <Droppable droppableId={column.id} type="TASK">
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            className={\`flex flex-col space-y-2 \${
                              snapshot.isDraggingOver
                                ? "border border-dashed border-zinc-400 rounded-md"
                                : ""
                            }\`}
                          >
                            {column.taskIds.map((taskId, index) => {
                              const task = tasks.find(
                                (task) => task.id === taskId
                              );
                              return (
                                <Draggable
                                  key={task!.id}
                                  draggableId={task!.id}
                                  index={index}
                                >
                                  {(provided) => (
                                    <div
                                      {...provided.draggableProps}
                                      ref={provided.innerRef}
                                      className="p-4 bg-white border rounded-md shadow dark:border-0 dark:bg-zinc-700"
                                    >
                                      {editingTask === task!.id ? (
                                        <input
                                          type="text"
                                          value={newTaskContent}
                                          onChange={handleTaskInputChange}
                                          onKeyDown={(event) =>
                                            handleTaskInputKeyDown(
                                              event,
                                              task.id
                                            )
                                          }
                                          onBlur={() => {
                                            setEditingTask(null);
                                            setNewTaskContent("");
                                          }}
                                          autoFocus
                                          placeholder="Add new task..."
                                          className="rounded-lg p-2 w-full bg-white border dark:border-0 shadow-sm dark:bg-zinc-600 outline-none focus:ring-2 focus:!border-transparent focus:ring-indigo-500"
                                        />
                                      ) : (
                                        <div
                                          className="flex items-center justify-between"
                                          {...provided.dragHandleProps}
                                        >
                                          {task!.content}
                                          <div className="flex items-center gap-x-2">
                                            <div className="p-1 cursor-pointer group">
                                              <FiEdit
                                                className=" text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-100"
                                                onClick={() =>
                                                  handleEditTask(task!.id)
                                                }
                                              />
                                            </div>
                                            <div className="p-1 cursor-pointer group">
                                              <FiTrash
                                                className=" text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-100"
                                                onClick={() =>
                                                  handleDeleteTask(task!.id)
                                                }
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </Draggable>
                              );
                            })}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>

                      {addingTask && addingTask.columnId === column.id ? (
                        <input
                          type="text"
                          value={newTaskContent}
                          onChange={handleTaskInputChange}
                          onKeyDown={handleTaskInputKeyDown}
                          onBlur={() => setAddingTask(null)}
                          autoFocus
                          placeholder="Add new task..."
                          className="rounded-lg p-2 mt-2 w-full bg-white shadow-sm border dark:bg-zinc-600 outline-none focus:!border-transparent focus:ring-2 focus:ring-indigo-500"
                        />
                      ) : (
                        <button
                          onClick={() => handleAddTask(column.id)}
                          className="w-full py-2 mt-3 text-gray-500 border border-dashed rounded-lg dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-100 border-zinc-300 dark:border-zinc-500"
                        >
                          + Add a task
                        </button>
                      )}
                    </div>
                  )}
                </Draggable>
              </div>
            ))}

            {addingBoard ? (
              <div className="flex flex-col w-[350px] mx-4">
                <div className="p-4 rounded-lg shadow bg-white dark:bg-zinc-800">
                  <input
                    autoFocus
                    value={newBoardTitle}
                    onChange={(e) => setNewBoardTitle(e.target.value)}
                    onKeyDown={handleBoardInputKeyDown}
                    placeholder="Board title"
                    className="w-full p-2 mt-2 rounded-lg outline-none bg-zinc-600 focus:ring-2 focus:ring-indigo-500"
                    onBlur={() => setAddingBoard(false)}
                  />
                </div>
              </div>
            ) : (
              <button
                onClick={handleAddBoard}
                className="rounded-lg bg-[#0bab7c] text-white shadow-lg shadow-[#0bab7c]/50 p-2 mx-4 h-fit w-fit"
              >
                + Add board
              </button>
            )}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default KanbanBoard;
`;
export const kanbanBoardComponentCodeJS = `import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { FiEdit, FiTrash } from "react-icons/fi";

const initialColumns = [
  {
    id: "column-1",
    title: "To Do",
    taskIds: ["task-1", "task-2", "task-3"],
  },
  {
    id: "column-2",
    title: "In Progress",
    taskIds: ["task-4", "task-5"],
  },
  {
    id: "column-3",
    title: "Done",
    taskIds: ["task-6", "task-7", "task-8"],
  },
];

const initialTasks = [
  { id: "task-1", content: "Task 1" },
  { id: "task-2", content: "Task 2" },
  { id: "task-3", content: "Task 3" },
  { id: "task-4", content: "Task 4" },
  { id: "task-5", content: "Task 5" },
  { id: "task-6", content: "Task 6" },
  { id: "task-7", content: "Task 7" },
  { id: "task-8", content: "Task 8" },
];

const KanbanBoard = () => {
  const [columns, setColumns] = useState(
    initialColumns.reduce((obj, column) => {
      obj[column.id] = column;
      return obj;
    }, {})
  );

  const [tasks, setTasks] = useState(initialTasks);

  const [editingBoard, setEditingBoard] = useState(null);
  const [newBoardTitle, setNewBoardTitle] = useState("");

  const [editingTask, setEditingTask] = useState(null);
  const [newTaskContent, setNewTaskContent] = useState("");

  const [addingBoard, setAddingBoard] = useState(false);
  const [addingTask, setAddingTask] =  useState(null);

  // ------------------------------------------------------------DRAG FUNCTIONALITY--------------------------------------------
  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      // If there's no valid destination, the drag event is cancelled
      return;
    }

    if (type === "COLUMN") {
      // Dragging a board (column)
      if (destination.index === source.index) {
        // If the board is dropped in the same position, no update is needed
        return;
      }

      // Reorder the columns based on the drag and drop
      const newColumnOrder = Array.from(Object.values(columns));
      const [removedColumn] = newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, removedColumn);

      // Create a new object with updated column order
      const newColumns = {};
      newColumnOrder.forEach((column) => {
        newColumns[column.id] = column;
      });

      // Update the state with the new column order
      setColumns(newColumns);
      return;
    }

    const startColumn = columns[source.droppableId];
    const finishColumn = columns[destination.droppableId];

    if (startColumn === finishColumn) {
      // If the task is moved within the same column
      const newTaskIds = Array.from(startColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      // Create a new column with the updated task order
      const newColumn = {
        ...startColumn,
        taskIds: newTaskIds,
      };

      // Update the state with the new column
      setColumns({
        ...columns,
        [newColumn.id]: newColumn,
      });
    } else {
      // If the task is moved to a different column
      const startTaskIds = Array.from(startColumn.taskIds);
      startTaskIds.splice(source.index, 1);

      const finishTaskIds = Array.from(finishColumn.taskIds);
      finishTaskIds.splice(destination.index, 0, draggableId);

      // Create new start and finish columns with updated task orders
      const newStartColumn = {
        ...startColumn,
        taskIds: startTaskIds,
      };

      const newFinishColumn = {
        ...finishColumn,
        taskIds: finishTaskIds,
      };

      // Update the state with the new start and finish columns
      setColumns({
        ...columns,
        [newStartColumn.id]: newStartColumn,
        [newFinishColumn.id]: newFinishColumn,
      });
    }
  };

  // ----------------------------------------------------------------BOARDS---------------------------------------------------
  // Function to handle adding a new board (column)
  const handleAddBoard = () => {
    setAddingBoard(true);
    setNewBoardTitle("");
  };

  // Function to handle changes in the new board title input field
  const handleBoardInputChange = (event) => {
    setNewBoardTitle(event.target.value);
  };

  // Function to handle key events (e.g., Enter, Escape) in the new board title input field
  const handleBoardInputKeyDown = (event) => {
    // If Enter key is pressed, check if it's an update or new board creation
    if (event.key === "Enter") {
      // Editing an existing board (column)
      if (editingBoard) {
        const updatedColumns = { ...columns };
        updatedColumns[editingBoard].title = newBoardTitle.trim();
        setColumns(updatedColumns);
        setEditingBoard(null);
      } else if (newBoardTitle.trim() !== "") {
        // Adding a new board (column)
        const newColumnId = \`column-\${Date.now()}\`;
        const newColumn = {
          id: newColumnId,
          title: newBoardTitle.trim(),
          taskIds: [],
        };
        setColumns((prevColumns) => ({
          ...prevColumns,
          [newColumnId]: newColumn,
        }));
        setAddingBoard(false);
        setNewBoardTitle("");
      }
      // If Escape key is pressed, cancel adding/editing a board
    } else if (event.key === "Escape") {
      setAddingBoard(false);
      setNewBoardTitle("");
    }
  };

  // Function to handle editing an existing board (column)
  const handleEditBoard = (columnId) => {
    setEditingBoard(columnId);
    setNewBoardTitle(columns[columnId].title);
  };

  // ----------------------------------------------------------------TASKS---------------------------------------------------
  // Function to handle adding a new task to a column
  const handleAddTask = (columnId) => {
    setAddingTask({ columnId });
  };

  // Function to handle changes in the new task content input field
  const handleTaskInputChange = (event) => {
    setNewTaskContent(event.target.value);
  };

  // Function to handle key events (e.g., Enter, Escape) in the new task content input field
  const handleTaskInputKeyDown = (event, taskId) => {
    // If Enter key is pressed and there's an edited task, update the task content
    if (event.key === "Enter") {
      if (editingTask && newTaskContent.trim() !== "") {
        const updatedTasks = tasks.map((task) =>
          task.id === editingTask ? { ...task, content: newTaskContent } : task
        );
        setTasks(updatedTasks);
        setEditingTask(null);
      } else if (newTaskContent.trim() !== "") {
        // If Enter key is pressed and it's a new task, add the task to the column
        const newTaskId = \`task-\${Date.now()}\`;
        const newTask = {
          id: newTaskId,
          content: newTaskContent.trim(),
        };
        const updatedColumns = { ...columns };
        console.log(updatedColumns);
        updatedColumns[addingTask.columnId].taskIds.push(newTaskId);
        setColumns(updatedColumns);
        setTasks((prevTasks) => [...prevTasks, newTask]);
        setAddingTask(null);
        setNewTaskContent("");
      }
      setNewTaskContent("");
      // If Escape key is pressed, cancel adding/editing a task
    } else if (event.key === "Escape") {
      setAddingTask(null);
      setNewTaskContent("");
    }
  };

  // Function to handle editing an existing task
  const handleEditTask = (taskId) => {
    setEditingTask(taskId);
    setNewTaskContent(tasks.find((task) => task.id === taskId)?.content || "");
  };

  // Function to handle deleting a task from all columns it's in
  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    setColumns((prevColumns) => {
      const updatedColumns = { ...prevColumns };
      Object.keys(updatedColumns).forEach((colId) => {
        const column = updatedColumns[colId];
        column.taskIds = column.taskIds.filter((id) => id !== taskId);
      });
      return updatedColumns;
    });
  };

  // Function to handle deleting a board (column) and its tasks
  const handleDeleteBoard = (boardId) => {
    setColumns((prevColumns) => {
      const updatedColumns = { ...prevColumns };
      delete updatedColumns[boardId];
      return updatedColumns;
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="board" type="COLUMN" direction="horizontal">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex flex-wrap justify-center p-8 mt-8 overflow-hidden bg-white border rounded-lg md:justify-start dark:border-0 dark:bg-zinc-700 gap-y-4"
          >
            {Object.values(columns).map((column, columnIndex) => (
              <div className="flex flex-col w-[350px] mx-4" key={column.id}>
                <Draggable draggableId={column.id} index={columnIndex}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      className="rounded-lg p-4 bg-white border dark:border-0 dark:bg-zinc-800 shadow min-h-[400px]"
                    >
                      <div
                        {...provided.dragHandleProps}
                        className="mb-4 text-xl font-semibold cursor-move text-zinc-400"
                      >
                        {editingBoard === column.id ? (
                          <input
                            autoFocus
                            value={newBoardTitle}
                            onChange={handleBoardInputChange}
                            onKeyDown={handleBoardInputKeyDown}
                            placeholder="Board title"
                            className="rounded-lg p-2 mt-2 w-full bg-white shadow-sm border dark:border-0 dark:bg-zinc-600 outline-none focus:ring-2 focus:!border-transparent focus:ring-indigo-500"
                            onBlur={() => setEditingBoard(null)}
                          />
                        ) : (
                          <div
                            className="flex items-center justify-between"
                            {...provided.dragHandleProps}
                          >
                            <div className="text-xl font-semibold">
                              {column.title}
                            </div>
                            <div className="flex items-center">
                              <div className="p-2 cursor-pointer group">
                                <FiEdit
                                  className="text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-white"
                                  onClick={() => handleEditBoard(column.id)}
                                />
                              </div>
                              <div className="p-2 cursor-pointer group">
                                <FiTrash
                                  className="text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-white"
                                  onClick={() => handleDeleteBoard(column.id)}
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <Droppable droppableId={column.id} type="TASK">
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            className={\`flex flex-col space-y-2 \${
                              snapshot.isDraggingOver
                                ? "border border-dashed border-zinc-400 rounded-md"
                                : ""
                            }\`}
                          >
                            {column.taskIds.map((taskId, index) => {
                              const task = tasks.find(
                                (task) => task.id === taskId
                              );
                              return (
                                <Draggable
                                  key={task?.id}
                                  draggableId={task?.id}
                                  index={index}
                                >
                                  {(provided) => (
                                    <div
                                      {...provided.draggableProps}
                                      ref={provided.innerRef}
                                      className="p-4 bg-white border rounded-md shadow dark:border-0 dark:bg-zinc-700"
                                    >
                                      {editingTask === task?.id ? (
                                        <input
                                          type="text"
                                          value={newTaskContent}
                                          onChange={handleTaskInputChange}
                                          onKeyDown={(event) =>
                                            handleTaskInputKeyDown(
                                              event,
                                              task.id
                                            )
                                          }
                                          onBlur={() => {
                                            setEditingTask(null);
                                            setNewTaskContent("");
                                          }}
                                          autoFocus
                                          placeholder="Add new task..."
                                          className="rounded-lg p-2 w-full bg-white border dark:border-0 shadow-sm dark:bg-zinc-600 outline-none focus:ring-2 focus:!border-transparent focus:ring-indigo-500"
                                        />
                                      ) : (
                                        <div
                                          className="flex items-center justify-between"
                                          {...provided.dragHandleProps}
                                        >
                                          {task?.content}
                                          <div className="flex items-center gap-x-2">
                                            <div className="p-1 cursor-pointer group">
                                              <FiEdit
                                                className=" text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-100"
                                                onClick={() =>
                                                  handleEditTask(task?.id)
                                                }
                                              />
                                            </div>
                                            <div className="p-1 cursor-pointer group">
                                              <FiTrash
                                                className=" text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-100"
                                                onClick={() =>
                                                  handleDeleteTask(task?.id)
                                                }
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </Draggable>
                              );
                            })}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>

                      {addingTask && addingTask.columnId === column.id ? (
                        <input
                          type="text"
                          value={newTaskContent}
                          onChange={handleTaskInputChange}
                          onKeyDown={handleTaskInputKeyDown}
                          onBlur={() => setAddingTask(null)}
                          autoFocus
                          placeholder="Add new task..."
                          className="rounded-lg p-2 mt-2 w-full bg-white shadow-sm border dark:bg-zinc-600 outline-none focus:!border-transparent focus:ring-2 focus:ring-indigo-500"
                        />
                      ) : (
                        <button
                          onClick={() => handleAddTask(column.id)}
                          className="w-full py-2 mt-3 text-gray-500 border border-dashed rounded-lg dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-100 border-zinc-300 dark:border-zinc-500"
                        >
                          + Add a task
                        </button>
                      )}
                    </div>
                  )}
                </Draggable>
              </div>
            ))}

            {addingBoard ? (
              <div className="flex flex-col w-[350px] mx-4">
                <div className="p-4 rounded-lg shadow bg-white dark:bg-zinc-800">
                  <input
                    autoFocus
                    value={newBoardTitle}
                    onChange={(e) => setNewBoardTitle(e.target.value)}
                    onKeyDown={handleBoardInputKeyDown}
                    placeholder="Board title"
                    className="w-full p-2 mt-2 rounded-lg outline-none bg-zinc-600 focus:ring-2 focus:ring-indigo-500"
                    onBlur={() => setAddingBoard(false)}
                  />
                </div>
              </div>
            ) : (
              <button
                onClick={handleAddBoard}
                className="rounded-lg bg-[#0bab7c] text-white shadow-lg shadow-[#0bab7c]/50 p-2 mx-4 h-fit w-fit"
              >
                + Add board
              </button>
            )}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default KanbanBoard;
`;

export const kanbanBoardPreviewCodeTS = `import KanbanBoard from "./KanbanBoard";

const App = () => {
  return (
    <>
      <KanbanBoard />
    </>
  );
};

export default App;
`;
export const kanbanBoardPreviewCodeJS = `import KanbanBoard from "./KanbanBoard";

const App = () => {
  return (
    <>
      <KanbanBoard />
    </>
  );
};

export default App;
`;

// --------------------------------------------------Modal------------------------------------------------------------
export const modalComponentCodeTS = `import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  variant?: "small" | "medium" | "large" | "full" | "scrollable";
  title?: string;
  openTrigger?: JSX.Element;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  variant = "medium",
  title,
  openTrigger,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isInternalOpen, setIsInternalOpen] = useState(false);

  const handleOpen = () => {
    setIsInternalOpen(true);
  };
  const handleClose = () => {
    setIsInternalOpen(false);
  };

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (openTrigger) {
          handleClose();
        } else {
          onClose();
        }
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [openTrigger]);

  const handleOverlayClick = () => {
    if (openTrigger) {
      handleClose();
    } else {
      onClose();
    }
  };

  const handleCloseButtonClick = () => {
    if (openTrigger) {
      handleClose();
    } else {
      onClose();
    }
  };

  const modalSizeClass = (() => {
    switch (variant) {
      case "small":
        return "max-w-[300px]";
      case "medium":
        return "max-w-[600px]";
      case "large":
        return "max-w-[800px]";
      case "full":
        return "max-w-full h-full !w-full !rounded-none";
      case "scrollable":
        return "max-w-[600px] h-[80%] overflow-y-auto";
      default:
        return "max-w-[600px]";
    }
  })();

  return (
    <>
      {/* Custom Trigger */}
      {openTrigger &&
        React.cloneElement(openTrigger as React.ReactElement, {
          onClick: () => handleOpen(),
        })}
      <AnimatePresence>
        {(isOpen || isInternalOpen) && (
          <motion.div
            className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOverlayClick}
          >
            <motion.div
              ref={modalRef}
              className={\`bg-white dark:bg-zinc-800 rounded-lg \${modalSizeClass} mx-auto p-4 relative w-[98%]\`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              {title && (
                <div className="flex items-center justify-between pb-2 mb-6 border-b border-b-zinc-300 dark:border-b-zinc-600">
                  <h2 className="text-lg font-semibold text-slate-500 dark:text-slate-200">
                    {title}
                  </h2>
                  <button
                    className="p-2 rounded-full text-slate-500 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-zinc-600"
                    onClick={handleCloseButtonClick}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-x"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
              )}
              {children}
              <button
                className={\`absolute top-2 right-2 text-slate-500 dark:text-slate-200 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-zinc-600 \${
                  title ? "hidden" : ""
                }\`}
                onClick={handleCloseButtonClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-x"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>{" "}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
`;
export const modalComponentCodeJS = `import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({
  isOpen,
  onClose,
  children,
  variant = "medium",
  title,
  openTrigger,
}) => {
  const modalRef = useRef(null);
  const [isInternalOpen, setIsInternalOpen] = useState(false);

  const handleOpen = () => {
    setIsInternalOpen(true);
  };
  const handleClose = () => {
    setIsInternalOpen(false);
  };

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        if (openTrigger) {
          handleClose();
        } else {
          onClose();
        }
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [openTrigger]);

  const handleOverlayClick = () => {
    if (openTrigger) {
      handleClose();
    } else {
      onClose();
    }
  };

  const handleCloseButtonClick = () => {
    if (openTrigger) {
      handleClose();
    } else {
      onClose();
    }
  };

  const modalSizeClass = (() => {
    switch (variant) {
      case "small":
        return "max-w-[300px]";
      case "medium":
        return "max-w-[600px]";
      case "large":
        return "max-w-[800px]";
      case "full":
        return "max-w-full h-full !w-full !rounded-none";
      case "scrollable":
        return "max-w-[600px] h-[80%] overflow-y-auto";
      default:
        return "max-w-[600px]";
    }
  })();

  return (
    <>
      {/* Custom Trigger */}
      {openTrigger &&
        React.cloneElement(openTrigger, {
          onClick: () => handleOpen(),
        })}
      <AnimatePresence>
        {(isOpen || isInternalOpen) && (
          <motion.div
            className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOverlayClick}
          >
            <motion.div
              ref={modalRef}
              className={\`bg-white dark:bg-zinc-800 rounded-lg \${modalSizeClass} mx-auto p-4 relative w-[98%]\`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              {title && (
                <div className="flex items-center justify-between pb-2 mb-6 border-b border-b-zinc-300 dark:border-b-zinc-600">
                  <h2 className="text-lg font-semibold text-slate-500 dark:text-slate-200">
                    {title}
                  </h2>
                  <button
                    className="p-2 rounded-full text-slate-500 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-zinc-600"
                    onClick={handleCloseButtonClick}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-x"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
              )}
              {children}
              <button
                className={\`absolute top-2 right-2 text-slate-500 dark:text-slate-200 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-zinc-600 \${
                  title ? "hidden" : ""
                }\`}
                onClick={handleCloseButtonClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-x"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>{" "}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
`;
export const modalPreviewCodeTS = `import Modal from "./Modal";

const ModalPreview = () => {
  return (
    <>
      <Modal
        title="Modal Title"
        openTrigger={
          <button className="px-6 py-2 rounded-md bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80 mt-3">
            Open Modal
          </button>
        }
      >
        <h2 className="text-2xl">Modal Content</h2>
        <p>This is the content of the modal.</p>
      </Modal>
    </>
  );
};

export default ModalPreview;
`;
export const modalPreviewCodeJS = `import Modal from "./Modal";

const ModalPreview = () => {
  return (
    <>
      <Modal
        title="Modal Title"
        openTrigger={
          <button className="px-6 py-2 rounded-md bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80 mt-3">
            Open Modal
          </button>
        }
      >
        <h2 className="text-2xl">Modal Content</h2>
        <p>This is the content of the modal.</p>
      </Modal>
    </>
  );
};

export default ModalPreview;
`;

export const modalVariantsPreviewCode = `import Modal from "./Modal";

const App = () => {
  return (
    <>
      <div className="flex items-center gap-3 flex-wrap">
        <Modal
          title="Modal Title"
          variant="small"
          openTrigger={
            <button className="px-6 py-2 rounded-md bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80 mt-3">
              Small
            </button>
          }
        >
          <h2 className="text-2xl">Modal Content</h2>
          <p>This is the content of the modal.</p>
        </Modal>
        <Modal
          title="Modal Title"
          openTrigger={
            <button className="px-6 py-2 rounded-md bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80 mt-3">
              Medium
            </button>
          }
        >
          <h2 className="text-2xl">Modal Content</h2>
          <p>This is the content of the modal.</p>
        </Modal>
        <Modal
          title="Modal Title"
          variant="large"
          openTrigger={
            <button className="px-6 py-2 rounded-md bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80 mt-3">
              Large
            </button>
          }
        >
          <h2 className="text-2xl">Modal Content</h2>
          <p>This is the content of the modal.</p>
        </Modal>
        <Modal
          title="Modal Title"
          variant="full"
          openTrigger={
            <button className="px-6 py-2 rounded-md bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80 mt-3">
              Full
            </button>
          }
        >
          <h2 className="text-2xl">Modal Content</h2>
          <p>This is the content of the modal.</p>
        </Modal>
        <Modal
          title="Modal Title"
          variant="scrollable"
          openTrigger={
            <button className="px-6 py-2 rounded-md bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80 mt-3">
              Scrollable
            </button>
          }
        >
          <h2 className="text-2xl">Modal Content</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam odit
            nihil repudiandae qui, dolores ad consequuntur! Tenetur ea
            consectetur magnam possimus, id quam. Minus incidunt rem quis non!
            Deserunt commodi nam, voluptatibus, earum vero aliquid similique
            voluptatum, totam ipsum perspiciatis inventore incidunt? Quisquam ab
            suscipit magni eos deleniti placeat quia voluptates eum odit, ea,
            dolor omnis dicta explicabo numquam! Minima eum itaque vero hic
            nostrum, eos dolore id debitis neque repudiandae animi suscipit
            aliquam quia nulla error ut, nisi in, saepe sed minus nihil! Minima
            error, a quaerat necessitatibus labore optio quos! Reiciendis velit
            maiores repudiandae rerum dolorem fugit, asperiores laborum sapiente
            suscipit aperiam nemo earum in sequi quo error ullam officia nisi
            accusamus ut cum! Nihil reiciendis, velit amet facilis nulla, beatae
            dolores voluptatum, illum magni animi ad quidem quisquam incidunt
            rem obcaecati expedita numquam excepturi aliquid ducimus voluptas!
            At eius sequi aspernatur suscipit quod, voluptas laboriosam
            reprehenderit natus quibusdam nesciunt voluptatem sed cupiditate,
            recusandae quam cumque optio eveniet placeat numquam. Sint possimus
            maxime praesentium iure nobis laborum ipsum voluptas fuga animi
            harum voluptatem repudiandae labore temporibus distinctio minima
            iusto, doloribus corrupti aliquid dolores totam dolore hic
            asperiores. Sequi delectus officia qui odio nesciunt minus quidem
            nisi laboriosam cupiditate..
          </p>
        </Modal>
      </div>
    </>
  );
};

export default App;
`;
export const modalCustomStatePreviewCode = `import { useState } from "react";
import Modal from "./Modal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <button
        className="px-6 py-2 rounded-md bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80 mt-3"
        onClick={() => setIsModalOpen(true)}
      >
        Open
      </button>
      <Modal
        title="Modal Title"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <h2 className="text-2xl">Modal Content</h2>
        <p>This is the content of the modal.</p>
      </Modal>
    </>
  );
};

export default App;
`;

// --------------------------------------------------Multiselect------------------------------------------------------------
export const multiselectComponentCodeTS = `import { motion } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import { BsChevronExpand, BsSearch, BsX } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";

interface Option {
  value: string;
  label: string;
  icon?: JSX.Element;
}

interface MultiSelectProps {
  checkbox?: boolean;
  options: Option[];
  onSelect: (selectedValues: string[]) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  onSelect,
  checkbox = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const selectRef = useRef<HTMLDivElement>(null);

  // Calculate dropdown position based on available space
  const calculateDropdownPosition = () => {
    if (!selectRef.current) return;

    const buttonRect = selectRef.current.getBoundingClientRect();
    const dropdownHeight = 320; // Max height for the dropdown

    const spaceBelow = window.innerHeight - buttonRect.bottom;
    const spaceAbove = buttonRect.top;

    if (spaceBelow >= dropdownHeight || spaceBelow > spaceAbove) {
      return "below"; // Enough space below or more than above, position below
    } else {
      return "above"; // Not enough space below, position above
    }
  };

  const [dropdownPosition, setDropdownPosition] = useState<"above" | "below">(
    "below"
  );

  // Update dropdown position when isOpen changes
  useEffect(() => {
    setDropdownPosition(calculateDropdownPosition());
  }, [isOpen]);

  // Toggle the dropdown's visibility
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Select or deselect an option
  const handleSelectOption = (option: Option) => {
    const isOptionSelected = selectedOptions.some(
      (selectedOption) => selectedOption.value === option.value
    );

    if (isOptionSelected) {
      const updatedOptions = selectedOptions.filter(
        (selectedOption) => selectedOption.value !== option.value
      );
      setSelectedOptions(updatedOptions);
    } else {
      const updatedOptions = [...selectedOptions, option];
      setSelectedOptions(updatedOptions);
    }
  };

  // Remove a selected option
  const handleRemoveOption = (option: Option) => {
    const updatedOptions = selectedOptions.filter(
      (selectedOption) => selectedOption.value !== option.value
    );
    setSelectedOptions(updatedOptions);
  };

  // Handle input change for search functionality
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  // Filter options based on search value
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  // Memoize the onSelect callback to avoid unnecessary re-renders
  const memoizedOnSelect = useCallback((selectedValues: string[]) => {
    onSelect(selectedValues);
  }, []);

  // Call the onSelect callback when selectedOptions change
  useEffect(() => {
    const selectedValues = selectedOptions.map((option) => option.value);
    memoizedOnSelect(selectedValues);
  }, [selectedOptions, memoizedOnSelect]);

  // Handle clicks outside the component to close the dropdown
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Handle Escape key press to close the dropdown
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    // Add event listeners
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKey);

    // Clean up event listeners
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={selectRef} className="relative">
      <button
        type="button"
        className="relative z-10 flex items-center justify-between w-full py-2 pl-3 pr-4 mt-2 text-left bg-white dark:bg-zinc-800/90 border border-zinc-300 dark:border-zinc-600 shadow-sm rounded-md cursor-pointer focus:outline-none focus:!border-transparent focus:ring-2 focus:ring-[#0bab7c]"
        onClick={handleToggle}
      >
        {selectedOptions.length ? (
          <div className="flex flex-wrap gap-2">
            {selectedOptions?.map((option) => (
              <div
                key={option.value}
                className="flex items-center justify-center px-2 py-1 text-sm rounded-full text-slate-500 dark:text-slate-200 bg-slate-200 dark:bg-zinc-700"
              >
                {option.label}
                <BsX
                  className="ml-1 rounded-full cursor-pointer hover:bg-slate-300 dark:hover:bg-zinc-500"
                  onClick={() => handleRemoveOption(option)}
                />
              </div>
            ))}
          </div>
        ) : (
          "Select an option"
        )}
        <BsChevronExpand className="text-slate-400 dark:text-slate-200" />
      </button>
      {isOpen && (
        <motion.div
          className={\`absolute z-20 w-full mt-1 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm \${
            dropdownPosition === "above" ? "bottom-full" : "top-full"
          }\`}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={dropdownVariants}
        >
          <div className="relative">
            <BsSearch className="absolute mr-2 -translate-y-1/2 text-zinc-400 top-1/2 left-2" />
            <input
              type="text"
              className="w-full p-2 pl-10 bg-transparent border-b text-slate-400 dark:text-slate-200 border-zinc-300 dark:border-zinc-600 focus:outline-none"
              placeholder="Search options..."
              value={searchValue}
              onChange={handleInputChange}
            />
          </div>
          <ul className="py-2">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) =>
                checkbox ? (
                  <li
                    key={option.value}
                    className={\`px-3 py-2 cursor-pointer hover:bg-slate-200 group dark:hover:bg-zinc-700\`}
                    onClick={() => handleSelectOption(option)}
                  >
                    <div className="flex items-center gap-x-2">
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 border border-zinc-300 dark:border-zinc-600 shadow-sm rounded grid place-items-center checked:before:content-['\\002714'] checked:text-white checked:text-[0.6rem] checked:bg-[#0bab7c] checked:border-2 checked:border-white dark:checked:border-[#1e1e1e] relative checked:after:absolute checked:after:w-5 checked:after:h-5 checked:after:border-2 checked:after:border-[#0bab7c] checked:after:rounded"
                        checked={selectedOptions.some(
                          (selectedOption) =>
                            selectedOption.value === option.value
                        )}
                        readOnly
                      />
                      {option.icon && (
                        <span className="mr-2">{option.icon}</span>
                      )}
                      <span className="text-slate-500 dark:text-slate-200">
                        {option.label}
                      </span>
                    </div>
                  </li>
                ) : (
                  <li
                    key={option.value}
                    className={\`flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-slate-200 dark:hover:bg-zinc-700 \${
                      selectedOptions.some(
                        (selectedOption) =>
                          selectedOption.value === option.value
                      )
                        ? "bg-slate-200 dark:bg-zinc-700"
                        : ""
                    }\`}
                    onClick={() => handleSelectOption(option)}
                  >
                    <div className="flex items-center gap-x-2">
                      {option.icon && (
                        <span className="mr-2">{option.icon}</span>
                      )}
                      <span className="text-slate-500 dark:text-slate-200">
                        {option.label}
                      </span>
                    </div>
                    {selectedOptions.some(
                      (selectedOption) => selectedOption.value === option.value
                    ) && (
                      <FiCheck className="ml-2 text-slate-500 dark:text-slate-200" />
                    )}
                  </li>
                )
              )
            ) : (
              <li className="px-3 py-2 text-slate-400 dark:text-slate-200 opacity-80">
                No options found.
              </li>
            )}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default MultiSelect;
`;
export const multiselectComponentCodeJS = `import { motion } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import { BsChevronExpand, BsSearch, BsX } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";

const MultiSelect = ({ options, onSelect, checkbox = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const selectRef = useRef(null);

  // Calculate dropdown position based on available space
  const calculateDropdownPosition = () => {
    if (!selectRef.current) return;

    const buttonRect = selectRef.current.getBoundingClientRect();
    const dropdownHeight = 320; // Max height for the dropdown

    const spaceBelow = window.innerHeight - buttonRect.bottom;
    const spaceAbove = buttonRect.top;

    if (spaceBelow >= dropdownHeight || spaceBelow > spaceAbove) {
      return "below"; // Enough space below or more than above, position below
    } else {
      return "above"; // Not enough space below, position above
    }
  };

  const [dropdownPosition, setDropdownPosition] =
    (useState < "above") | ("below" > "below");

  // Update dropdown position when isOpen changes
  useEffect(() => {
    setDropdownPosition(calculateDropdownPosition());
  }, [isOpen]);

  // Toggle the dropdown's visibility
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Select or deselect an option
  const handleSelectOption = (option) => {
    const isOptionSelected = selectedOptions.some(
      (selectedOption) => selectedOption.value === option.value
    );

    if (isOptionSelected) {
      const updatedOptions = selectedOptions.filter(
        (selectedOption) => selectedOption.value !== option.value
      );
      setSelectedOptions(updatedOptions);
    } else {
      const updatedOptions = [...selectedOptions, option];
      setSelectedOptions(updatedOptions);
    }
  };

  // Remove a selected option
  const handleRemoveOption = (option) => {
    const updatedOptions = selectedOptions.filter(
      (selectedOption) => selectedOption.value !== option.value
    );
    setSelectedOptions(updatedOptions);
  };

  // Handle input change for search functionality
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  // Filter options based on search value
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  // Memoize the onSelect callback to avoid unnecessary re-renders
  const memoizedOnSelect = useCallback((selectedValues) => {
    onSelect(selectedValues);
  }, []);

  // Call the onSelect callback when selectedOptions change
  useEffect(() => {
    const selectedValues = selectedOptions.map((option) => option.value);
    memoizedOnSelect(selectedValues);
  }, [selectedOptions, memoizedOnSelect]);

  // Handle clicks outside the component to close the dropdown
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Handle Escape key press to close the dropdown
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    // Add event listeners
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKey);

    // Clean up event listeners
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={selectRef} className="relative">
      <button
        type="button"
        className="relative z-10 flex items-center justify-between w-full py-2 pl-3 pr-4 mt-2 text-left bg-white dark:bg-zinc-800/90 border border-zinc-300 dark:border-zinc-600 shadow-sm rounded-md cursor-pointer focus:outline-none focus:!border-transparent focus:ring-2 focus:ring-[#0bab7c]"
        onClick={handleToggle}
      >
        {selectedOptions.length ? (
          <div className="flex flex-wrap gap-2">
            {selectedOptions?.map((option) => (
              <div
                key={option.value}
                className="flex items-center justify-center px-2 py-1 text-sm rounded-full text-slate-500 dark:text-slate-200 bg-slate-200 dark:bg-zinc-700"
              >
                {option.label}
                <BsX
                  className="ml-1 rounded-full cursor-pointer hover:bg-slate-300 dark:hover:bg-zinc-500"
                  onClick={() => handleRemoveOption(option)}
                />
              </div>
            ))}
          </div>
        ) : (
          "Select an option"
        )}
        <BsChevronExpand className="text-slate-400 dark:text-slate-200" />
      </button>
      {isOpen && (
        <motion.div
          className={\`absolute z-20 w-full mt-1 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm \${
            dropdownPosition === "above" ? "bottom-full" : "top-full"
          }\`}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={dropdownVariants}
        >
          <div className="relative">
            <BsSearch className="absolute mr-2 -translate-y-1/2 text-zinc-400 top-1/2 left-2" />
            <input
              type="text"
              className="w-full p-2 pl-10 bg-transparent border-b text-slate-400 dark:text-slate-200 border-zinc-300 dark:border-zinc-600 focus:outline-none"
              placeholder="Search options..."
              value={searchValue}
              onChange={handleInputChange}
            />
          </div>
          <ul className="py-2">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) =>
                checkbox ? (
                  <li
                    key={option.value}
                    className={\`px-3 py-2 cursor-pointer hover:bg-slate-200 group dark:hover:bg-zinc-700\`}
                    onClick={() => handleSelectOption(option)}
                  >
                    <div className="flex items-center gap-x-2">
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 border border-zinc-300 dark:border-zinc-600 shadow-sm rounded grid place-items-center checked:before:content-['\\002714'] checked:text-white checked:text-[0.6rem] checked:bg-[#0bab7c] checked:border-2 checked:border-white dark:checked:border-[#1e1e1e] relative checked:after:absolute checked:after:w-5 checked:after:h-5 checked:after:border-2 checked:after:border-[#0bab7c] checked:after:rounded"
                        checked={selectedOptions.some(
                          (selectedOption) =>
                            selectedOption.value === option.value
                        )}
                        readOnly
                      />
                      {option.icon && (
                        <span className="mr-2">{option.icon}</span>
                      )}
                      <span className="text-slate-500 dark:text-slate-200">
                        {option.label}
                      </span>
                    </div>
                  </li>
                ) : (
                  <li
                    key={option.value}
                    className={\`flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-slate-200 dark:hover:bg-zinc-700 \${
                      selectedOptions.some(
                        (selectedOption) =>
                          selectedOption.value === option.value
                      )
                        ? "bg-slate-200 dark:bg-zinc-700"
                        : ""
                    }\`}
                    onClick={() => handleSelectOption(option)}
                  >
                    <div className="flex items-center gap-x-2">
                      {option.icon && (
                        <span className="mr-2">{option.icon}</span>
                      )}
                      <span className="text-slate-500 dark:text-slate-200">
                        {option.label}
                      </span>
                    </div>
                    {selectedOptions.some(
                      (selectedOption) => selectedOption.value === option.value
                    ) && (
                      <FiCheck className="ml-2 text-slate-500 dark:text-slate-200" />
                    )}
                  </li>
                )
              )
            ) : (
              <li className="px-3 py-2 text-slate-400 dark:text-slate-200 opacity-80">
                No options found.
              </li>
            )}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default MultiSelect;
`;

export const multiselectPreviewCodeTS = `import { useState } from "react";
import MultiSelect from "./MultiSelect";

const options = [
  {
    value: "React.js",
    label: "React.js",
  },
  {
    value: "Next.js",
    label: "Next.js",
  },
  {
    value: "Vue",
    label: "Vue",
  },
  {
    value: "Nuxt",
    label: "Nuxt",
  },
  {
    value: "Sveltkit",
    label: "Sveltkit",
  },
  {
    value: "Solid.js",
    label: "Solid.js",
  },
  {
    value: "Angular",
    label: "Angular",
  },
];

const App = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleMultiSelect = (selectedValues: string[]) => {
    setSelectedValues(selectedValues);
  };

  return (
    <>
      <MultiSelect options={options} onSelect={handleMultiSelect} />
      <div className="flex items-center mt-3 gap-x-4">
        Selected Values:{" "}
        {selectedValues.length > 0 ? selectedValues.join(", ") : "None"}
      </div>
    </>
  );
};

export default App;
`;
export const multiselectPreviewCodeJS = `import { useState } from "react";
import MultiSelect from "./MultiSelect";

const options = [
  {
    value: "React.js",
    label: "React.js",
  },
  {
    value: "Next.js",
    label: "Next.js",
  },
  {
    value: "Vue",
    label: "Vue",
  },
  {
    value: "Nuxt",
    label: "Nuxt",
  },
  {
    value: "Sveltkit",
    label: "Sveltkit",
  },
  {
    value: "Solid.js",
    label: "Solid.js",
  },
  {
    value: "Angular",
    label: "Angular",
  },
];

const App = () => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleMultiSelect = (selectedValues) => {
    setSelectedValues(selectedValues);
  };

  return (
    <>
      <MultiSelect options={options} onSelect={handleMultiSelect} />
      <div className="flex items-center mt-3 gap-x-4">
        Selected Values:{" "}
        {selectedValues.length > 0 ? selectedValues.join(", ") : "None"}
      </div>
    </>
  );
};

export default App;
`;

export const multiselectWithCheckboxPreviewCode = `import { useState } from "react";
import MultiSelect from "./MultiSelect";

const options = [
  {
    value: "React.js",
    label: "React.js",
  },
  {
    value: "Next.js",
    label: "Next.js",
  },
  {
    value: "Vue",
    label: "Vue",
  },
  {
    value: "Nuxt",
    label: "Nuxt",
  },
  {
    value: "Sveltkit",
    label: "Sveltkit",
  },
  {
    value: "Solid.js",
    label: "Solid.js",
  },
  {
    value: "Angular",
    label: "Angular",
  },
];

const App = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleMultiSelect = (selectedValues: string[]) => {
    setSelectedValues(selectedValues);
  };

  return (
    <>
      <MultiSelect options={options} onSelect={handleMultiSelect} checkbox />
      <div className="mt-3 flex items-center gap-x-4">
        Selected Values:{" "}
        {selectedValues.length > 0 ? selectedValues.join(", ") : "None"}
      </div>
    </>
  );
};

export default App;
`;
export const multiselectWithIconsPreviewCode = `import { useState } from "react";
import MultiSelect from "./MultiSelect";
import { FaAngular, FaReact, FaVuejs } from "react-icons/fa";
import { FiBriefcase, FiLayers } from "react-icons/fi";
import { BsClipboard } from "react-icons/bs";
import { GiRock } from "react-icons/gi";

const options = [
  {
    value: "React.js",
    label: "React.js",
    icon: <FaReact className="text-[#0bab7c]" />,
  },
  {
    value: "Next.js",
    label: "Next.js",
    icon: <FiLayers />,
  },
  {
    value: "Vue",
    label: "Vue",
    icon: <FaVuejs className="text-green-500" />,
  },
  {
    value: "Nuxt",
    label: "Nuxt",
    icon: <BsClipboard />,
  },
  {
    value: "Sveltkit",
    label: "Sveltkit",
    icon: <FiBriefcase />,
  },
  {
    value: "Solid.js",
    label: "Solid.js",
    icon: <GiRock />,
  },
  {
    value: "Angular",
    label: "Angular",
    icon: <FaAngular className="text-red-500" />,
  },
];

const App = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleMultiSelect = (selectedValues: string[]) => {
    setSelectedValues(selectedValues);
  };

  return (
    <>
      <MultiSelect options={options} onSelect={handleMultiSelect} />
      <div className="mt-3 flex items-center gap-x-4">
        Selected Values:{" "}
        {selectedValues.length > 0 ? selectedValues.join(", ") : "None"}
      </div>
    </>
  );
};

export default App;
`;
export const multiselectWithImagesPreviewCode = `import { useState } from "react";
import MultiSelect from "./MultiSelect";

const options = [
  {
    value: "Wabz Braize",
    label: "Wabz Braize",
    icon: (
      <img
        src="/user.jpg"
        alt="Option 1 Icon"
        className="w-8 h-8 rounded-full"
      />
    ),
  },
  {
    value: "Raven Kent",
    label: "Raven Kent",
    icon: (
      <img src="/2.png" alt="Option 1 Icon" className="w-8 h-8 rounded-full" />
    ),
  },
  {
    value: "Olivia Pope",
    label: "Olivia Pope",
    icon: (
      <img src="/6.png" alt="Option 1 Icon" className="w-8 h-8 rounded-full" />
    ),
  },
  {
    value: "Annalise Keating",
    label: "Annalise Keating",
    icon: (
      <img src="/8.png" alt="Option 1 Icon" className="w-8 h-8 rounded-full" />
    ),
  },
  {
    value: "Fitzgerald Grant",
    label: "Fitzgerald Grant",
    icon: (
      <img src="/1.png" alt="Option 1 Icon" className="w-8 h-8 rounded-full" />
    ),
  },
  {
    value: "Jack Bauer",
    label: "Jack Bauer",
    icon: (
      <img src="/7.png" alt="Option 1 Icon" className="w-8 h-8 rounded-full" />
    ),
  },
  {
    value: "John Snow",
    label: "John Snow",
    icon: (
      <img src="/11.png" alt="Option 1 Icon" className="w-8 h-8 rounded-full" />
    ),
  },
];

const App = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleMultiSelect = (selectedValues: string[]) => {
    setSelectedValues(selectedValues);
  };

  return (
    <>
      <MultiSelect options={options} onSelect={handleMultiSelect} />
      <div className="mt-3 flex items-center gap-x-4">
        Selected Values:{" "}
        {selectedValues.length > 0 ? selectedValues.join(", ") : "None"}
      </div>
    </>
  );
};

export default App;
`;

export const multiSelectWithFormikPreviewCodeTS = `import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import MultiSelect from "./MultiSelect";
import { FaSpinner } from "react-icons/fa";
import toast from "react-hot-toast";

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const validationSchema = Yup.object().shape({
  selectedOptions: Yup.array().min(1, "Select at least one option"),
});

const App = () => {
  const handleSubmit = async (values: { selectedOptions: Option[] }) => {
    toast.success(values.selectedOptions.join(", "));
    console.log("Selected options:", values.selectedOptions);
  };

  const formik = useFormik({
    initialValues: {
      selectedOptions: [] as Option[],
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <MultiSelect
        options={options}
        onSelect={(selectedValues) =>
          formik.setFieldValue("selectedOptions", selectedValues)
        }
      />
      {formik.errors.selectedOptions && formik.touched.selectedOptions && (
        <div className="text-red-500 mt-2">
          {formik.errors.selectedOptions as string}
        </div>
      )}
      <div className="mt-5">
        <button
          type="submit"
          className="px-6 py-2 rounded-md bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? (
            <FaSpinner className="animate-spin" />
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </form>
  );
};

export default App;
`;
export const multiSelectWithFormikPreviewCodeJS = `import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import MultiSelect from "./MultiSelect";
import { FaSpinner } from "react-icons/fa";
import toast from "react-hot-toast";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const validationSchema = Yup.object().shape({
  selectedOptions: Yup.array().min(1, "Select at least one option"),
});

const App = () => {
  const handleSubmit = async (values) => {
    toast.success(values.selectedOptions.join(", "));
    console.log("Selected options:", values.selectedOptions);
  };

  const formik = useFormik({
    initialValues: {
      selectedOptions,
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <MultiSelect
        options={options}
        onSelect={(selectedValues) =>
          formik.setFieldValue("selectedOptions", selectedValues)
        }
      />
      {formik.errors.selectedOptions && formik.touched.selectedOptions && (
        <div className="text-red-500 mt-2">{formik.errors.selectedOptions}</div>
      )}
      <div className="mt-5">
        <button
          type="submit"
          className="px-6 py-2 rounded-md bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? (
            <FaSpinner className="animate-spin" />
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </form>
  );
};

export default App;
`;

// --------------------------------------------------Pagination------------------------------------------------------------
export const paginationComponentCodeTS = `import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  simple?: boolean;
  rounded?: boolean;
  icons?: boolean;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  simple = false,
  rounded = false,
  icons = false,
  className,
}) => {
  const MAX_PAGES_TO_SHOW = 3;

  const generatePages = (): (number | null)[] => {
    if (totalPages <= MAX_PAGES_TO_SHOW) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    const leftLimit = Math.max(
      currentPage - Math.floor(MAX_PAGES_TO_SHOW / 2),
      1
    );
    const rightLimit = Math.min(leftLimit + MAX_PAGES_TO_SHOW - 1, totalPages);

    const pages: (number | null)[] = [];

    if (leftLimit > 2) {
      pages.push(1);
      pages.push(2);
      if (leftLimit > 1) {
        pages.push(null);
      }
    }

    for (let i = leftLimit; i <= rightLimit; i++) {
      pages.push(i);
    }

    if (rightLimit < totalPages) {
      if (rightLimit < totalPages - 1) {
        pages.push(null);
      }
      pages.push(totalPages);
    }

    return pages;
  };

  const handlePageChange = (page: number): void => {
    onPageChange(page);
  };

  const pages = generatePages();

  return (
    <ul className="flex items-center space-x-2">
      <li>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={\`px-2 rounded bg-slate-200 hover:bg-slate-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 h-8 disabled:opacity-50 \${
            currentPage === 1 ? "cursor-not-allowed hover:bg-slate-200" : ""
          }\`}
        >
          {icons ? <FiChevronLeft /> : "Prev"}
        </button>
      </li>

      {!simple && (
        <>
          {pages.map((page, index) => (
            <li key={index}>
              {page === null ? (
                <span>...</span>
              ) : (
                <button
                  onClick={() => handlePageChange(page)}
                  disabled={page === currentPage}
                  className={\`w-8 h-8 grid place-items-center rounded bg-slate-200 hover:bg-slate-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 \${
                    className || ""
                  } \${rounded ? "rounded-full" : ""} \${
                    page === currentPage ? "!bg-[#0bab7c] text-white" : ""
                  }\`}
                >
                  {page}
                </button>
              )}
            </li>
          ))}
        </>
      )}

      <li>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={\`px-2 rounded bg-slate-200 hover:bg-slate-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 h-8 disabled:opacity-50 \${
            currentPage === totalPages
              ? "cursor-not-allowed hover:bg-slate-200"
              : ""
          }\`}
        >
          {icons ? <FiChevronRight /> : "Next"}
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
`;
export const paginationComponentCodeJS = `import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  simple = false,
  rounded = false,
  icons = false,
  className,
}) => {
  const MAX_PAGES_TO_SHOW = 3;

  const generatePages = () => {
    if (totalPages <= MAX_PAGES_TO_SHOW) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    const leftLimit = Math.max(
      currentPage - Math.floor(MAX_PAGES_TO_SHOW / 2),
      1
    );
    const rightLimit = Math.min(leftLimit + MAX_PAGES_TO_SHOW - 1, totalPages);

    const pages = [];

    if (leftLimit > 2) {
      pages.push(1);
      pages.push(2);
      if (leftLimit > 1) {
        pages.push(null);
      }
    }

    for (let i = leftLimit; i <= rightLimit; i++) {
      pages.push(i);
    }

    if (rightLimit < totalPages) {
      if (rightLimit < totalPages - 1) {
        pages.push(null);
      }
      pages.push(totalPages);
    }

    return pages;
  };

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const pages = generatePages();

  return (
    <ul className="flex items-center space-x-2">
      <li>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={\`px-2 rounded bg-slate-200 hover:bg-slate-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 h-8 disabled:opacity-50 \${
            currentPage === 1 ? "cursor-not-allowed hover:bg-slate-200" : ""
          }\`}
        >
          {icons ? <FiChevronLeft /> : "Prev"}
        </button>
      </li>

      {!simple && (
        <>
          {pages.map((page, index) => (
            <li key={index}>
              {page === null ? (
                <span>...</span>
              ) : (
                <button
                  onClick={() => handlePageChange(page)}
                  disabled={page === currentPage}
                  className={\`w-8 h-8 grid place-items-center rounded bg-slate-200 hover:bg-slate-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 \${
                    className || ""
                  } \${rounded ? "rounded-full" : ""} \${
                    page === currentPage ? "!bg-[#0bab7c] text-white" : ""
                  }\`}
                >
                  {page}
                </button>
              )}
            </li>
          ))}
        </>
      )}

      <li>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={\`px-2 rounded bg-slate-200 hover:bg-slate-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 h-8 disabled:opacity-50 \${
            currentPage === totalPages
              ? "cursor-not-allowed hover:bg-slate-200"
              : ""
          }\`}
        >
          {icons ? <FiChevronRight /> : "Next"}
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
`;

export const paginationPreviewCodeTS = `import { useState } from "react";
import Pagination from "./Pagination";

const dummyData = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50,
];

const App = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(dummyData.length / itemsPerPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default App;
`;
export const paginationPreviewCodeJS = `import { useState } from "react";
import Pagination from "./Pagination";

const dummyData = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50,
];

const App = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(dummyData.length / itemsPerPage);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default App;
`;

export const roundedPaginationPreviewCode = `import { useState } from "react";
import Pagination from "./Pagination";
const dummyData = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50,
];
const App = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(dummyData.length / itemsPerPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        rounded
      />
    </>
  );
};

export default App;
`;
export const simplePaginationPreviewCode = `import { useState } from "react";
import Pagination from "./Pagination";
const dummyData = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50,
];
const Simple = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(dummyData.length / itemsPerPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        simple
      />
    </>
  );
};

export default Simple;
`;
export const customControlIconsPreviewCode = `import { useState } from "react";
import Pagination from "./Pagination";
const dummyData = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50,
];
const App = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(dummyData.length / itemsPerPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        icons
      />
    </>
  );
};

export default App;
`;
export const paginationWithDataFetchingPreviewCodeTS = `import { useState } from "react";
import Pagination from "./Pagination";
import { useEffect } from "react";
interface Post {
  id: string;
  title: string;
  body: string;
}
const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(100 / itemsPerPage); // assuming there are 100 posts from the api/database

  const fetchData = async (page: number) => {
    setLoading(true);
    try {
      const response = await fetch(
        \`https://jsonplaceholder.typicode.com/posts?_page=\${page}&_limit=\${itemsPerPage}\`
      );
      const data = await response.json();
      setPosts(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <div className="mb-5">
        {loading ? (
          <div>
            <h1 className="my-4 text-2xl">Loading...</h1>
          </div>
        ) : (
          <>
            {posts?.map((post) => (
              <div
                className="flex items-center gap-2 p-3 my-3 border rounded-lg dark:border-zinc-600"
                key={post.id}
              >
                <div className="flex-shrink-0 p-2 border rounded-lg place-items-center dark:border-zinc-600">
                  {post.id}
                </div>
                {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default App;
`;
export const paginationWithDataFetchingPreviewCodeJS = `import { useState } from "react";
import Pagination from "./Pagination";
import { useEffect } from "react";

const DataFetching = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(100 / itemsPerPage); // assuming there are 100 posts from the api/database

  const fetchData = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(
        \`https://jsonplaceholder.typicode.com/posts?_page=\${page}&_limit=\${itemsPerPage}\`
      );
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      if (error) {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <div className="mb-5">
        {loading ? (
          <div>
            <h1 className="my-4 text-2xl">Loading...</h1>
          </div>
        ) : (
          <>
            {posts?.map((post) => (
              <div
                className="flex items-center gap-2 p-3 my-3 border rounded-lg dark:border-zinc-600"
                key={post.id}
              >
                <div className="flex-shrink-0 p-2 border rounded-lg place-items-center dark:border-zinc-600">
                  {post.id}
                </div>
                {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default DataFetching;
`;

// --------------------------------------------------Radio------------------------------------------------------------
export const radioComponentCodeTS = `import React from "react";

interface RadioButtonProps {
  label: string;
  value: string;
  id?: string;
  checked?: boolean;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio: React.FC<RadioButtonProps> = ({
  label,
  checked,
  value,
  id,
  name,
  onChange,
}) => {
  return (
    <label className="flex items-center my-3 mt-2 cursor-pointer select-none gap-x-2 w-fit">
      <input
        type="radio"
        className="appearance-none w-5 h-5 border border-zinc-300 shadow-sm dark:border-zinc-600 rounded-full checked:bg-[#0bab7c] checked:border-2 checked:border-white dark:checked:border-[#1e1e1e] relative checked:before:absolute checked:before:w-6 checked:before:top-1/2 checked:before:left-1/2 checked:before:-translate-y-1/2 checked:before:-translate-x-1/2 checked:before:h-6 checked:before:border-2 checked:before:border-[#0bab7c] checked:before:rounded-full"
        value={value}
        id={id}
        name={name}
        onChange={onChange}
        checked={checked}
      />
      <span>{label}</span>
    </label>
  );
};

export default Radio;
`;
export const radioComponentCodeJS = `import React from "react";

const Radio = ({ label, checked, value, id, name, onChange }) => {
  return (
    <label className="flex items-center my-3 mt-2 cursor-pointer select-none gap-x-2 w-fit">
      <input
        type="radio"
        className="appearance-none w-5 h-5 border border-zinc-300 shadow-sm dark:border-zinc-600 rounded-full checked:bg-[#0bab7c] checked:border-2 checked:border-white dark:checked:border-[#1e1e1e] relative checked:before:absolute checked:before:w-6 checked:before:top-1/2 checked:before:left-1/2 checked:before:-translate-y-1/2 checked:before:-translate-x-1/2 checked:before:h-6 checked:before:border-2 checked:before:border-[#0bab7c] checked:before:rounded-full"
        value={value}
        id={id}
        name={name}
        onChange={onChange}
        checked={checked}
      />
      <span>{label}</span>
    </label>
  );
};

export default Radio;
`;

export const radioPreviewCodeTS = `import { useState } from "react";
import Radio from "./Radio";

const App = () => {
  const [selectedGender, setSelectedGender] = useState("");
  console.log(selectedGender);
  return (
    <>
      <h1 className="mb-3 text-xl">What's your gender</h1>
      <Radio
        label="Male"
        value="Male"
        name="gender"
        onChange={(e) => setSelectedGender(e.target.value)}
      />
      <Radio
        label="Female"
        value="Female"
        name="gender"
        onChange={(e) => setSelectedGender(e.target.value)}
      />
    </>
  );
};

export default App;
`;
export const radioPreviewCodeJS = `import { useState } from "react";
import Radio from "./Radio";

const App = () => {
  const [selectedGender, setSelectedGender] = useState("");
  console.log(selectedGender);
  return (
    <>
      <h1 className="mb-3 text-xl">What's your gender</h1>
      <Radio
        label="Male"
        value="Male"
        name="gender"
        onChange={(e) => setSelectedGender(e.target.value)}
      />
      <Radio
        label="Female"
        value="Female"
        name="gender"
        onChange={(e) => setSelectedGender(e.target.value)}
      />
    </>
  );
};

export default App;
`;

export const radioWithFormikPreviewCode = `import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import Radio from "./Radio";

interface Gender {
  gender: string;
}

const App = () => {
  const genderValidationSchema = Yup.object().shape({
    gender: Yup.string().required("Gender is required"),
  });

  const initialValues: Gender = {
    gender: "",
  };

  const handleSubmit = async (values: Gender) => {
    toast.success(values.gender);
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: genderValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {/* Gender */}
        <div className="mt-6">
          <h1 className="mb-3 text-xl">What's your gender</h1>
          <Radio
            label="Male"
            id="male"
            value="male"
            name="gender"
            onChange={formik.handleChange}
            checked={formik.values.gender === "male"}
          />
          <Radio
            label="Female"
            id="female"
            value="female"
            name="gender"
            onChange={formik.handleChange}
            checked={formik.values.gender === "female"}
          />
          {formik.errors.gender && (
            <div className="text-red-500">{formik.errors.gender}</div>
          )}
        </div>
        <button
          type="submit"
          className="px-6 py-2 rounded-md bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80 mt-6"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? (
            <FaSpinner className="animate-spin" />
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default App;
`;

// --------------------------------------------------Scrollable------------------------------------------------------------
export const scrollbaleComponentCodeTS = `import React, { useEffect, useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface ScrollableProps {
  children: React.ReactNode;
  leftControl?: JSX.Element;
  rightControl?: JSX.Element;
  autoHideControls?: boolean;
}

const Scrollable: React.FC<ScrollableProps> = ({
  children,
  leftControl,
  rightControl,
  autoHideControls = false,
}) => {
  const listRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = listRef.current.scrollLeft;
    setScrollPosition(position);
  };

  useEffect(() => {
    listRef?.current?.addEventListener("scroll", handleScroll);
    return () => {
      listRef?.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNext = () => {
    listRef.current.scrollLeft += 200;
  };

  const handleBack = () => {
    listRef.current.scrollLeft -= 200;
  };
  return (
    <div>
      <div className="relative mt-6">
        {/* Custom Controls */}
        <div className="flex items-center justify-end space-x-3">
          <div
            className={\`\${
              autoHideControls && scrollPosition === 0 ? "hidden" : "block"
            }\`}
          >
            {leftControl &&
              React.cloneElement(leftControl as React.ReactElement, {
                onClick: () => handleBack(),
              })}
          </div>
          <div
            className={\`\${
              autoHideControls &&
              listRef.current &&
              scrollPosition + listRef.current.clientWidth ===
                listRef.current.scrollWidth
                ? "hidden"
                : "block"
            }\`}
          >
            {rightControl &&
              React.cloneElement(rightControl as React.ReactElement, {
                onClick: () => handleNext(),
              })}
          </div>
        </div>

        {/* Default Left Control */}
        {!leftControl && (
          <button
            className={\`\${
              scrollPosition === 0 ? "hidden" : "block"
            } bg-gradient-to-r from-white dark:from-[#181818] via-white dark:via-[#181818] to-transparent h-full w-28 flex items-center justify-center  absolute left-0 top-1/2 -translate-y-1/2\`}
            onClick={handleBack}
          >
            <BsChevronLeft className="text-xl" />
          </button>
        )}

        {/* Scrollable Content */}
        <div
          className="flex p-2 space-x-4 overflow-x-auto hide-scrollbar scroll-smooth"
          ref={listRef}
        >
          {children}
        </div>

        {/* Default Right Control */}
        {!rightControl && (
          <button
            className={\`\${
              listRef.current &&
              scrollPosition + listRef.current.clientWidth ===
                listRef.current.scrollWidth
                ? "hidden"
                : "block"
            } bg-gradient-to-l from-white dark:from-[#181818] via-white dark:via-[#181818] to-transparent h-full w-28 flex items-center justify-center  absolute right-0 top-1/2 -translate-y-1/2\`}
            onClick={handleNext}
          >
            <BsChevronRight className="text-xl" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Scrollable;
`;
export const scrollbaleComponentCodeJS = `import React, { useEffect, useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Scrollable = ({
  children,
  leftControl,
  rightControl,
  autoHideControls = false,
}) => {
  const listRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = listRef.current.scrollLeft;
    setScrollPosition(position);
  };

  useEffect(() => {
    listRef?.current?.addEventListener("scroll", handleScroll);
    return () => {
      listRef?.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNext = () => {
    listRef.current.scrollLeft += 200;
  };

  const handleBack = () => {
    listRef.current.scrollLeft -= 200;
  };
  return (
    <div>
      <div className="relative mt-6">
        {/* Custom Controls */}
        <div className="flex items-center justify-end space-x-3">
          <div
            className={\`\${
              autoHideControls && scrollPosition === 0 ? "hidden" : "block"
            }\`}
          >
            {leftControl &&
              React.cloneElement(leftControl, {
                onClick: () => handleBack(),
              })}
          </div>
          <div
            className={\`\${
              autoHideControls &&
              listRef.current &&
              scrollPosition + listRef.current.clientWidth ===
                listRef.current.scrollWidth
                ? "hidden"
                : "block"
            }\`}
          >
            {rightControl &&
              React.cloneElement(rightControl, {
                onClick: () => handleNext(),
              })}
          </div>
        </div>

        {/* Default Left Control */}
        {!leftControl && (
          <button
            className={\`\${
              scrollPosition === 0 ? "hidden" : "block"
            } bg-gradient-to-r from-white dark:from-[#181818] via-white dark:via-[#181818] to-transparent h-full w-28 flex items-center justify-center  absolute left-0 top-1/2 -translate-y-1/2\`}
            onClick={handleBack}
          >
            <BsChevronLeft className="text-xl" />
          </button>
        )}

        {/* Scrollable Content */}
        <div
          className="flex p-2 space-x-4 overflow-x-auto hide-scrollbar scroll-smooth"
          ref={listRef}
        >
          {children}
        </div>

        {/* Default Right Control */}
        {!rightControl && (
          <button
            className={\`\${
              listRef.current &&
              scrollPosition + listRef.current.clientWidth ===
                listRef.current.scrollWidth
                ? "hidden"
                : "block"
            } bg-gradient-to-l from-white dark:from-[#181818] via-white dark:via-[#181818] to-transparent h-full w-28 flex items-center justify-center  absolute right-0 top-1/2 -translate-y-1/2\`}
            onClick={handleNext}
          >
            <BsChevronRight className="text-xl" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Scrollable;
`;

export const scrollablePreviewCodeTS = `import Scrollable from "./Scrollable";
const categories = [
  "Music",
  "Sports",
  "Gaming",
  "Movies",
  "Computer Science",
  "News",
  "Fashion",
  "Travel",
  "Food",
  "Technology",
  "Computer programming",
  "Block Chain",
  "Politics",
  "Science",
  "Commedy",
  "React js",
  "Artificial Intelligence",
  "Crypto Currency",
];
const App = () => {
  return (
    <>
      <Scrollable>
        {categories.map((category, index) => (
          <div
            className="bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 cursor-pointer w-[300px] h-[300px] flex justify-center items-center rounded-xl dark:hover:bg-zinc-700 flex-shrink-0"
            key={index}
          >
            {category}
          </div>
        ))}
      </Scrollable>
    </>
  );
};

export default App;
`;
export const scrollablePreviewCodeJS = `import Scrollable from "./Scrollable";
const categories = [
  "Music",
  "Sports",
  "Gaming",
  "Movies",
  "Computer Science",
  "News",
  "Fashion",
  "Travel",
  "Food",
  "Technology",
  "Computer programming",
  "Block Chain",
  "Politics",
  "Science",
  "Commedy",
  "React js",
  "Artificial Intelligence",
  "Crypto Currency",
];
const App = () => {
  return (
    <>
      <Scrollable>
        {categories.map((category, index) => (
          <div
            className="bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 cursor-pointer w-[300px] h-[300px] flex justify-center items-center rounded-xl dark:hover:bg-zinc-700 flex-shrink-0"
            key={index}
          >
            {category}
          </div>
        ))}
      </Scrollable>
    </>
  );
};

export default App;
`;

export const scrollableCSS = `.hide-scrollbar::-webkit-scrollbar {
  display: none;
}`;

export const scrollableWithCustomContolsPreviewCode = `import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Scrollable from "./Scrollable";
const categories = [
  "Music",
  "Sports",
  "Gaming",
  "Movies",
  "Computer Science",
  "News",
  "Fashion",
  "Travel",
  "Food",
  "Technology",
  "Computer programming",
  "Block Chain",
  "Politics",
  "Science",
  "Commedy",
  "React js",
  "Artificial Intelligence",
  "Crypto Currency",
];
const App = () => {
  return (
    <>
      <Scrollable
        rightControl={
          <button className="p-2 rounded-full bg-[#0bab7c] hover:bg-[#0bab7c]/80 text-white">
            <FiChevronRight />
          </button>
        }
        leftControl={
          <button className="p-2 rounded-full bg-[#0bab7c] hover:bg-[#0bab7c]/80 text-white">
            <FiChevronLeft />
          </button>
        }
      >
        {categories.map((category, index) => (
          <div
            className="bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 cursor-pointer w-[300px] h-[300px] flex justify-center items-center rounded-xl dark:hover:bg-zinc-700 flex-shrink-0"
            key={index}
          >
            {category}
          </div>
        ))}
      </Scrollable>
    </>
  );
};

export default App;
`;
export const scrollableWithAutoHidePreviewCode = `import Scrollable from "./Scrollable";
const categories = [
  "Music",
  "Sports",
  "Gaming",
  "Movies",
  "Computer Science",
  "News",
  "Fashion",
  "Travel",
  "Food",
  "Technology",
  "Computer programming",
  "Block Chain",
  "Politics",
  "Science",
  "Commedy",
  "React js",
  "Artificial Intelligence",
  "Crypto Currency",
];
const App = () => {
  return (
    <>
      <Scrollable autoHideControls>
        {categories.map((category, index) => (
          <div
            className="flex items-center justify-center flex-shrink-0 px-3 py-1 cursor-pointer bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 rounded-xl dark:hover:bg-zinc-700"
            key={index}
          >
            {category}
          </div>
        ))}
      </Scrollable>
    </>
  );
};

export default App;
`;

// --------------------------------------------------Select------------------------------------------------------------
export const selectComponentCodeTS = `import { useEffect, useRef, useState } from "react";
import { BsChevronExpand, BsSearch } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import { motion } from "framer-motion";

interface Option {
  value: string;
  label: string;
  icon?: JSX.Element;
}

interface SelectProps {
  options: Option[];
  icon?: JSX.Element;
  text?: string;
  invalid?: boolean;
  onSelect: (selectedValue: string) => void;
}

const Select: React.FC<SelectProps> = ({
  options,
  icon,
  text = "Select an option",
  invalid = false,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [searchValue, setSearchValue] = useState("");
  const selectRef = useRef<HTMLDivElement>(null);

  // Calculate dropdown position based on available space
  const calculateDropdownPosition = () => {
    if (!selectRef.current) return;

    const buttonRect = selectRef.current.getBoundingClientRect();
    const dropdownHeight = 320; // Max height for the dropdown

    const spaceBelow = window.innerHeight - buttonRect.bottom;
    const spaceAbove = buttonRect.top;

    if (spaceBelow >= dropdownHeight || spaceBelow > spaceAbove) {
      return "below"; // Enough space below or more than above, position below
    } else {
      return "above"; // Not enough space below, position above
    }
  };

  const [dropdownPosition, setDropdownPosition] = useState<"above" | "below">(
    "below"
  );

  // Update dropdown position when isOpen changes
  useEffect(() => {
    setDropdownPosition(calculateDropdownPosition());
  }, [isOpen]);

  // Toggle the dropdown's visibility
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Select an option and close the dropdown
  const handleSelectOption = (option: Option) => {
    setSelectedOption(option);
    onSelect(option.value);
    setIsOpen(false);
  };

  // Handle input change for search functionality
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  // Filter options based on search value
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  // Handle clicks outside the component to close the dropdown
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Handle Escape key press to close the dropdown
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    // Add event listeners
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKey);

    // Clean up event listeners
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={selectRef} className="relative !font-questrial">
      <button
        type="button"
        className={\`relative z-10  flex items-center justify-between w-full py-2 pl-3 pr-4 text-left bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:!border-transparent \${
          icon ? "pl-8" : ""
        } \${invalid ? "!ring-2 !ring-red-600 !border-transparent" : ""}\`}
        onClick={handleToggle}
      >
        {icon && (
          <div
            className={\`absolute top-1/2 -translate-y-1/2 left-2 \${
              invalid ? "text-red-600 !opacity-100" : ""
            }\`}
          >
            {icon}
          </div>
        )}
        <span className="mr-2 ">
          {selectedOption ? (
            selectedOption.label
          ) : (
            <span
              className={\`mr-2 text-zinc-400 dark:text-zinc-200 \${
                invalid ? "!text-red-600 !opacity-100" : ""
              }\`}
            >
              {text}
            </span>
          )}
        </span>
        <BsChevronExpand />
      </button>
      {isOpen && (
        <motion.div
          className={\`absolute z-20 w-full mt-1 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm \${
            dropdownPosition === "above" ? "bottom-full" : "top-full"
          }\`}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={dropdownVariants}
        >
          <div className="relative">
            <BsSearch className="absolute mr-2 -translate-y-1/2 text-zinc-500 top-1/2 left-2" />
            <input
              type="text"
              className="w-full p-2 pl-10 bg-transparent border-b text-slate-500 dark:text-slate-200 border-zinc-300 dark:border-zinc-600 focus:outline-none"
              placeholder="Search options..."
              value={searchValue}
              onChange={handleInputChange}
            />
          </div>
          <ul className="py-2">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <li
                  key={option.value}
                  className={\`flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-zinc-700 \${
                    selectedOption?.value === option.value
                      ? "bg-[#0bab7c] hover:!bg-[#0bab7c]"
                      : ""
                  }\`}
                  onClick={() => handleSelectOption(option)}
                >
                  <div className="flex items-center gap-x-2">
                    {option.icon && <span className="mr-2">{option.icon}</span>}
                    <span
                      className={\`text-slate-500 dark:text-slate-200 \${
                        selectedOption?.value === option.value
                          ? "text-white"
                          : ""
                      }\`}
                    >
                      {option.label}
                    </span>
                  </div>
                  {selectedOption?.value === option.value && (
                    <FiCheck className="ml-2 text-white" />
                  )}
                </li>
              ))
            ) : (
              <li className="px-3 py-2 text-slate-500 dark:text-slate-200 opacity-80">
                No options found.
              </li>
            )}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Select;
`;
export const selectComponentCodeJS = `import { useEffect, useRef, useState } from "react";
import { BsChevronExpand, BsSearch } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import { motion } from "framer-motion";

const Select = ({
  options,
  icon,
  text = "Select an option",
  invalid = false,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const selectRef = useRef(null);

  // Calculate dropdown position based on available space
  const calculateDropdownPosition = () => {
    if (!selectRef.current) return;

    const buttonRect = selectRef.current.getBoundingClientRect();
    const dropdownHeight = 320; // Max height for the dropdown

    const spaceBelow = window.innerHeight - buttonRect.bottom;
    const spaceAbove = buttonRect.top;

    if (spaceBelow >= dropdownHeight || spaceBelow > spaceAbove) {
      return "below"; // Enough space below or more than above, position below
    } else {
      return "above"; // Not enough space below, position above
    }
  };

  const [dropdownPosition, setDropdownPosition] =
    (useState < "above") | ("below" > "below");

  // Update dropdown position when isOpen changes
  useEffect(() => {
    setDropdownPosition(calculateDropdownPosition());
  }, [isOpen]);

  // Toggle the dropdown's visibility
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Select an option and close the dropdown
  const handleSelectOption = (option) => {
    setSelectedOption(option);
    onSelect(option.value);
    setIsOpen(false);
  };

  // Handle input change for search functionality
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  // Filter options based on search value
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  // Handle clicks outside the component to close the dropdown
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Handle Escape key press to close the dropdown
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    // Add event listeners
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKey);

    // Clean up event listeners
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={selectRef} className="relative !font-questrial">
      <button
        type="button"
        className={\`relative z-10  flex items-center justify-between w-full py-2 pl-3 pr-4 text-left bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:!border-transparent \${
          icon ? "pl-8" : ""
        } \${invalid ? "!ring-2 !ring-red-600 !border-transparent" : ""}\`}
        onClick={handleToggle}
      >
        {icon && (
          <div
            className={\`absolute top-1/2 -translate-y-1/2 left-2 \${
              invalid ? "text-red-600 !opacity-100" : ""
            }\`}
          >
            {icon}
          </div>
        )}
        <span className="mr-2 ">
          {selectedOption ? (
            selectedOption.label
          ) : (
            <span
              className={\`mr-2 text-zinc-400 dark:text-zinc-200 \${
                invalid ? "!text-red-600 !opacity-100" : ""
              }\`}
            >
              {text}
            </span>
          )}
        </span>
        <BsChevronExpand />
      </button>
      {isOpen && (
        <motion.div
          className={\`absolute z-20 w-full mt-1 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm \${
            dropdownPosition === "above" ? "bottom-full" : "top-full"
          }\`}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={dropdownVariants}
        >
          <div className="relative">
            <BsSearch className="absolute mr-2 -translate-y-1/2 text-zinc-500 top-1/2 left-2" />
            <input
              type="text"
              className="w-full p-2 pl-10 bg-transparent border-b text-slate-500 dark:text-slate-200 border-zinc-300 dark:border-zinc-600 focus:outline-none"
              placeholder="Search options..."
              value={searchValue}
              onChange={handleInputChange}
            />
          </div>
          <ul className="py-2">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <li
                  key={option.value}
                  className={\`flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-zinc-700 \${
                    selectedOption?.value === option.value
                      ? "bg-[#0bab7c] hover:!bg-[#0bab7c]"
                      : ""
                  }\`}
                  onClick={() => handleSelectOption(option)}
                >
                  <div className="flex items-center gap-x-2">
                    {option.icon && <span className="mr-2">{option.icon}</span>}
                    <span
                      className={\`text-slate-500 dark:text-slate-200 \${
                        selectedOption?.value === option.value
                          ? "text-white"
                          : ""
                      }\`}
                    >
                      {option.label}
                    </span>
                  </div>
                  {selectedOption?.value === option.value && (
                    <FiCheck className="ml-2 text-white" />
                  )}
                </li>
              ))
            ) : (
              <li className="px-3 py-2 text-slate-500 dark:text-slate-200 opacity-80">
                No options found.
              </li>
            )}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Select;
`;

export const selectPreviewCodeTS = `import Select from "./Select";

const options = [
  {
    value: "React.js",
    label: "React.js",
  },
  {
    value: "Next.js",
    label: "Next.js",
  },
  {
    value: "Vue",
    label: "Vue",
  },
  {
    value: "Nuxt",
    label: "Nuxt",
  },
  {
    value: "Sveltkit",
    label: "Sveltkit",
  },
  {
    value: "Solid.js",
    label: "Solid.js",
  },
  {
    value: "Angular",
    label: "Angular",
  },
];

const App = () => {
  const handleSelect = (selectedValue: string) => {
    console.log("Selected:", selectedValue);
  };

  return (
    <>
      <Select options={options} onSelect={handleSelect} />
    </>
  );
};

export default App;
`;
export const selectPreviewCodeJS = `import Select from "./Select";

const options = [
  {
    value: "React.js",
    label: "React.js",
  },
  {
    value: "Next.js",
    label: "Next.js",
  },
  {
    value: "Vue",
    label: "Vue",
  },
  {
    value: "Nuxt",
    label: "Nuxt",
  },
  {
    value: "Sveltkit",
    label: "Sveltkit",
  },
  {
    value: "Solid.js",
    label: "Solid.js",
  },
  {
    value: "Angular",
    label: "Angular",
  },
];

const App = () => {
  const handleSelect = (selectedValue) => {
    console.log("Selected:", selectedValue);
  };

  return (
    <>
      <Select options={options} onSelect={handleSelect} />
    </>
  );
};

export default App;
`;

export const selectWithIconPreviewCode = `import { FiBriefcase } from "react-icons/fi";
import Select from "./Select";

const options = [
  {
    value: "React.js",
    label: "React.js",
  },
  {
    value: "Next.js",
    label: "Next.js",
  },
  {
    value: "Vue",
    label: "Vue",
  },
  {
    value: "Nuxt",
    label: "Nuxt",
  },
  {
    value: "Sveltkit",
    label: "Sveltkit",
  },
  {
    value: "Solid.js",
    label: "Solid.js",
  },
  {
    value: "Angular",
    label: "Angular",
  },
];

const App = () => {
  const handleSelect = (selectedValue: string) => {
    console.log("Selected:", selectedValue);
  };

  return (
    <>
      <Select
        options={options}
        onSelect={handleSelect}
        icon={<FiBriefcase />}
      />
    </>
  );
};

export default App;
`;
export const selectWithInvalidFeedbackPreviewCode = `import Select from "./Select";

const options = [
  {
    value: "React.js",
    label: "React.js",
  },
  {
    value: "Next.js",
    label: "Next.js",
  },
  {
    value: "Vue",
    label: "Vue",
  },
  {
    value: "Nuxt",
    label: "Nuxt",
  },
  {
    value: "Sveltkit",
    label: "Sveltkit",
  },
  {
    value: "Solid.js",
    label: "Solid.js",
  },
  {
    value: "Angular",
    label: "Angular",
  },
];

const App = () => {
  const handleSelect = (selectedValue: string) => {
    console.log("Selected:", selectedValue);
  };

  return (
    <>
      <Select options={options} onSelect={handleSelect} invalid />
    </>
  );
};

export default App;
`;
export const selectWithFormikPreviewCodeTS = `import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import Select from "./Select";
import { FiBriefcase } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";

interface Role {
  role: string;
}

const App = () => {
  const options = [
    {
      value: "Super Admin",
      label: "Super Admin",
    },
    {
      value: "CEO",
      label: "CEO",
    },
    {
      value: "CTO",
      label: "CTO",
    },
    {
      value: "Customer Maintenance",
      label: "Customer Maintenance",
    },
  ];

  const roleValidationSchema = Yup.object().shape({
    role: Yup.string().required(),
  });

  const initialValues: Role = {
    role: "",
  };

  const handleSubmit = async (values: Role) => {
    toast.success(values.role);
    console.log(values);
  };

  const {
    values,
    touched,
    isSubmitting,
    handleSubmit: submit,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: roleValidationSchema,
    onSubmit: handleSubmit,
  });

  const handleSelect = (value: string) => {
    setFieldValue("role", value);
  };

  return (
    <div>
      <form onSubmit={submit}>
        {/* Role */}
        <div className="mt-6">
          <Select
            options={options}
            onSelect={handleSelect}
            icon={<FiBriefcase />}
            text="Select a role*"
            invalid={!values.role && touched.role}
          />
          {!values.role && touched.role && (
            <div className="mt-2 text-sm text-red-600">Role is requied</div>
          )}
        </div>
        <button
          type="submit"
          className="px-6 py-2 rounded-md bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80 mt-6"
          disabled={isSubmitting}
        >
          {isSubmitting ? <FaSpinner className="animate-spin" /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default App;
`;
export const selectWithFormikPreviewCodeJS = `import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import Select from "./Select";
import { FiBriefcase } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";

const App = () => {
  const options = [
    {
      value: "Super Admin",
      label: "Super Admin",
    },
    {
      value: "CEO",
      label: "CEO",
    },
    {
      value: "CTO",
      label: "CTO",
    },
    {
      value: "Customer Maintenance",
      label: "Customer Maintenance",
    },
  ];

  const roleValidationSchema = Yup.object().shape({
    role: Yup.string().required(),
  });

  const initialValues = {
    role: "",
  };

  const handleSubmit = async (values) => {
    toast.success(values.role);
    console.log(values);
  };

  const {
    values,
    touched,
    isSubmitting,
    handleSubmit: submit,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: roleValidationSchema,
    onSubmit: handleSubmit,
  });

  const handleSelect = (value) => {
    setFieldValue("role", value);
  };

  return (
    <div>
      <form onSubmit={submit}>
        {/* Role */}
        <div className="mt-6">
          <Select
            options={options}
            onSelect={handleSelect}
            icon={<FiBriefcase />}
            text="Select a role*"
            invalid={!values.role && touched.role}
          />
          {!values.role && touched.role && (
            <div className="mt-2 text-sm text-red-600">Role is requied</div>
          )}
        </div>
        <button
          type="submit"
          className="px-6 py-2 rounded-md bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80 mt-6"
          disabled={isSubmitting}
        >
          {isSubmitting ? <FaSpinner className="animate-spin" /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default App;
`;

// --------------------------------------------------Slider------------------------------------------------------------
export const sliderComponentCodeTS = `import React, { useState, useEffect, Children, cloneElement } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface SliderProps {
  children: React.ReactNode;
  className?: string;
  showControls?: boolean;
  showDots?: boolean;
  autoPlay?: boolean;
  leftControlIcon?: JSX.Element;
  rightControlIcon?: JSX.Element;
}

interface SliderItemProps {
  children: React.ReactNode;
  className?: string;
}

const SliderItem: React.FC<SliderItemProps> = ({ children, className }) => {
  return <div className={className || ""}>{children}</div>;
};

const Slider: React.FC<SliderProps> & {
  Item: React.FC<SliderItemProps>;
} = ({
  children,
  className,
  showControls = true,
  showDots = true,
  autoPlay = true,
  leftControlIcon: LeftControl,
  rightControlIcon: RightControl,
}) => {
  const [index, setIndex] = useState(0);
  const items = Children.toArray(children);

  useEffect(() => {
    if (autoPlay) {
      const slider = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, 3000);
      return () => clearInterval(slider);
    }
  }, [items]);

  return (
    <div
      className={\`w-full h-[300px] relative overflow-hidden \${className || ""}\`}
    >
      {items.map((child, currentIndex) => {
        const position =
          currentIndex === index
            ? "opacity-100 translate-x-0"
            : currentIndex === index - 1 ||
              (currentIndex === items.length - 1 && index === 0)
            ? "opacity-100 -translate-x-full"
            : "opacity-0 translate-x-full";

        return (
          <div
            key={currentIndex}
            className={\`w-full text-center h-full transition absolute \${position}\`}
          >
            {cloneElement(child as React.ReactElement, { index: currentIndex })}
          </div>
        );
      })}
      {showControls && (
        <div className="btns">
          <button
            className="w-10 h-10 grid place-items-center shadow rounded-full text-[#0bab7c] border bg-white border-[#0bab7c] flex-center-center absolute right-4 top-1/2 transform -translate-y-1/2"
            onClick={() =>
              setIndex((prevIndex) => (prevIndex + 1) % items.length)
            }
          >
            {RightControl ? RightControl : <BsChevronRight />}
          </button>
          <button
            className="w-10 h-10 grid place-items-center shadow rounded-full text-[#0bab7c] border bg-white border-[#0bab7c] flex-center-center absolute left-4 top-1/2 transform -translate-y-1/2"
            onClick={() =>
              setIndex((prevIndex) =>
                prevIndex === 0 ? items.length - 1 : prevIndex - 1
              )
            }
          >
            {LeftControl ? LeftControl : <BsChevronLeft />}
          </button>
        </div>
      )}
      {showDots && (
        <div className="absolute z-20 flex items-center -translate-x-1/2 bottom-2 left-1/2 gap-x-2">
          {items.map((_, i) => (
            <div
              className={\`w-4 h-4 bg-white rounded-full drop-shadow cursor-pointer opacity-40 \${
                index === i ? "!opacity-100" : ""
              }\`}
              key={i}
              onClick={() => setIndex(i)}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

Slider.Item = SliderItem;

export default Slider;
`;
export const sliderComponentCodeJS = `import React, { useState, useEffect, Children, cloneElement } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const SliderItem = ({ children, className }) => {
  return <div className={className || ""}>{children}</div>;
};

const Slider = ({
  children,
  className,
  showControls = true,
  showDots = true,
  autoPlay = true,
  leftControlIcon: LeftControl,
  rightControlIcon: RightControl,
}) => {
  const [index, setIndex] = useState(0);
  const items = Children.toArray(children);

  useEffect(() => {
    if (autoPlay) {
      const slider = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, 3000);
      return () => clearInterval(slider);
    }
  }, [items]);

  return (
    <div
      className={\`w-full h-[300px] relative overflow-hidden \${className || ""}\`}
    >
      {items.map((child, currentIndex) => {
        const position =
          currentIndex === index
            ? "opacity-100 translate-x-0"
            : currentIndex === index - 1 ||
              (currentIndex === items.length - 1 && index === 0)
            ? "opacity-100 -translate-x-full"
            : "opacity-0 translate-x-full";

        return (
          <div
            key={currentIndex}
            className={\`w-full text-center h-full transition absolute \${position}\`}
          >
            {cloneElement(child, { index: currentIndex })}
          </div>
        );
      })}
      {showControls && (
        <div className="btns">
          <button
            className="w-10 h-10 grid place-items-center shadow rounded-full text-[#0bab7c] border bg-white border-[#0bab7c] flex-center-center absolute right-4 top-1/2 transform -translate-y-1/2"
            onClick={() =>
              setIndex((prevIndex) => (prevIndex + 1) % items.length)
            }
          >
            {RightControl ? RightControl : <BsChevronRight />}
          </button>
          <button
            className="w-10 h-10 grid place-items-center shadow rounded-full text-[#0bab7c] border bg-white border-[#0bab7c] flex-center-center absolute left-4 top-1/2 transform -translate-y-1/2"
            onClick={() =>
              setIndex((prevIndex) =>
                prevIndex === 0 ? items.length - 1 : prevIndex - 1
              )
            }
          >
            {LeftControl ? LeftControl : <BsChevronLeft />}
          </button>
        </div>
      )}
      {showDots && (
        <div className="absolute z-20 flex items-center -translate-x-1/2 bottom-2 left-1/2 gap-x-2">
          {items.map((_, i) => (
            <div
              className={\`w-4 h-4 bg-white rounded-full drop-shadow cursor-pointer opacity-40 \${
                index === i ? "!opacity-100" : ""
              }\`}
              key={i}
              onClick={() => setIndex(i)}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

Slider.Item = SliderItem;

export default Slider;
`;

export const sliderPreviewCodeTS = `import Slider from "./Slider";

const App = () => {
  return (
    <>
      <Slider>
        <Slider.Item className="flex items-center justify-center h-full rounded-lg bg-slate-200 dark:bg-zinc-700">
          <div>Slide 1</div>
        </Slider.Item>
        <Slider.Item className="flex items-center justify-center h-full rounded-lg bg-slate-200 dark:bg-zinc-700">
          <div>Slide 2</div>
        </Slider.Item>
        <Slider.Item className="flex items-center justify-center h-full rounded-lg bg-slate-200 dark:bg-zinc-700">
          <div>Slide 3</div>
        </Slider.Item>
      </Slider>
    </>
  );
};

export default App;
`;
export const sliderPreviewCodeJS = `import Slider from "./Slider";

const App = () => {
  return (
    <>
      <Slider>
        <Slider.Item className="flex items-center justify-center h-full rounded-lg bg-slate-200 dark:bg-zinc-700">
          <div>Slide 1</div>
        </Slider.Item>
        <Slider.Item className="flex items-center justify-center h-full rounded-lg bg-slate-200 dark:bg-zinc-700">
          <div>Slide 2</div>
        </Slider.Item>
        <Slider.Item className="flex items-center justify-center h-full rounded-lg bg-slate-200 dark:bg-zinc-700">
          <div>Slide 3</div>
        </Slider.Item>
      </Slider>
    </>
  );
};

export default App;
`;

export const sliderWithImagesPreviewCode = `import Slider from "./Slider";

const App = () => {
  return (
    <>
      <Slider>
        <Slider.Item className="h-full">
          <img
            src="/photo (65).jpg"
            alt="Image 1"
            className="object-cover w-full h-full rounded-lg"
          />
        </Slider.Item>
        <Slider.Item className="h-full">
          <img
            src="/photo (66).jpg"
            alt="Image 1"
            className="object-cover w-full h-full rounded-lg"
          />
        </Slider.Item>
        <Slider.Item className="h-full">
          <img
            src="/photo (77).jpg"
            alt="Image 1"
            className="object-cover w-full h-full rounded-lg"
          />
        </Slider.Item>
      </Slider>
    </>
  );
};

export default App;
`;
export const sliderWithCustomControlsPreviewCode = `import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Slider from "./Slider";

const App = () => {
  return (
    <>
      <Slider
        leftControlIcon={<BsChevronLeft />}
        rightControlIcon={<BsChevronRight />}
      >
        <Slider.Item className="flex items-center justify-center h-full rounded-lg bg-slate-200 dark:bg-zinc-700">
          <div>Slide 1</div>
        </Slider.Item>
        <Slider.Item className="flex items-center justify-center h-full rounded-lg bg-slate-200 dark:bg-zinc-700">
          <div>Slide 2</div>
        </Slider.Item>
        <Slider.Item className="flex items-center justify-center h-full rounded-lg bg-slate-200 dark:bg-zinc-700">
          <div>Slide 3</div>
        </Slider.Item>
      </Slider>
    </>
  );
};

export default App;
`;
export const sliderHideDotsPreviewCode = `import Slider from "./Slider";

const App = () => {
  return (
    <>
      <Slider showDots={false}>
        <Slider.Item className="flex items-center justify-center h-full rounded-lg bg-slate-200 dark:bg-zinc-700">
          <div>Slide 1</div>
        </Slider.Item>
        <Slider.Item className="flex items-center justify-center h-full rounded-lg bg-slate-200 dark:bg-zinc-700">
          <div>Slide 2</div>
        </Slider.Item>
        <Slider.Item className="flex items-center justify-center h-full rounded-lg bg-slate-200 dark:bg-zinc-700">
          <div>Slide 3</div>
        </Slider.Item>
      </Slider>
    </>
  );
};

export default App;
`;
export const sliderHideControlsPreviewCode = `import Slider from "./Slider";

const App = () => {
  return (
    <>
      <Slider showControls={false}>
        <Slider.Item className="flex items-center justify-center h-full rounded-lg bg-slate-200 dark:bg-zinc-700">
          <div>Slide 1</div>
        </Slider.Item>
        <Slider.Item className="flex items-center justify-center h-full rounded-lg bg-slate-200 dark:bg-zinc-700">
          <div>Slide 2</div>
        </Slider.Item>
        <Slider.Item className="flex items-center justify-center h-full rounded-lg bg-slate-200 dark:bg-zinc-700">
          <div>Slide 3</div>
        </Slider.Item>
      </Slider>
    </>
  );
};

export default App;
`;
export const sliderAutoPlayPreviewCode = `import Slider from "./Slider";

const App = () => {
  return (
    <>
      <Slider autoPlay={false}>
        <Slider.Item className="flex items-center justify-center h-full rounded-lg bg-slate-200 dark:bg-zinc-700">
          <div>Slide 1</div>
        </Slider.Item>
        <Slider.Item className="flex items-center justify-center h-full rounded-lg bg-slate-200 dark:bg-zinc-700">
          <div>Slide 2</div>
        </Slider.Item>
        <Slider.Item className="flex items-center justify-center h-full rounded-lg bg-slate-200 dark:bg-zinc-700">
          <div>Slide 3</div>
        </Slider.Item>
      </Slider>
    </>
  );
};

export default App;
`;
export const TestimonialExamplePreviewCode = `import { FaQuoteRight } from "react-icons/fa";
import Slider from "./Slider";

const App = () => {
      const testimonialSliderContent = [
    {
      id: 1,
      image: "/1.png",
      name: "John Doe",
      title: "Web Developer",
      quote:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis vel explicabo placeat sunt voluptate. Doloribus fugit error cum molestias quam unde laborum tenetur tempora veniam.",
    },
    {
      id: 2,
      image: "/2.png",
      name: "Jane Smith",
      title: "Graphic Designer",
      quote:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis vel explicabo placeat sunt voluptate. Doloribus fugit error cum molestias quam unde laborum tenetur tempora veniam.",
    },
    {
      id: 3,
      image: "/5.png",
      name: "Raven Kent",
      title: "UI/UX Expert",
      quote:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis vel explicabo placeat sunt voluptate. Doloribus fugit error cum molestias quam unde laborum tenetur tempora veniam.",
    },
  ];
  return (
    <>
      <Slider showDots={false} className="max-w-[500px] w-full mx-auto">
        {testimonialSliderContent.map((content) => (
          <Slider.Item key={content.id}>
            <div className="flex flex-col items-center">
              <img
                src={content.image}
                alt={content.name}
                className="object-cover w-20 h-20 mx-auto rounded-full shadow-xl"
              />
              <div className="relative px-16">
                <h1 className="mt-4 uppercase text-md">{content.name}</h1>
                <p className="text-sm text-[#0bab7c] capitalize">
                  {content.title}
                </p>
                <p className="mt-2 text-sm text-slate-500">{content.quote}</p>
                <div className="absolute bottom-6">
                  <FaQuoteRight className="absolute text-zinc-400/10 text-8xl" />
                </div>
              </div>
            </div>
          </Slider.Item>
        ))}
      </Slider>
    </>
  );
}

export default App`;

// --------------------------------------------------Stepper------------------------------------------------------------
export const stepperComponentCodeTS = `import React, { useState } from "react";
import { motion } from "framer-motion";

interface Step {
  label: string;
  description?: string;
  content: JSX.Element;
  icon?: JSX.Element | string;
}

interface StepperProps {
  steps: Step[];
  type: "icon" | "numbered";
  variant: "one" | "two" | "three";
}

const Stepper: React.FC<StepperProps> = ({ steps, type, variant }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const handleFinish = () => {
    console.log("Form submitted!");
  };

  return (
    <div className="dark:text-slate-200">
      <div className="mb-6">
        <div
          className={\`flex mb-2 justify-between \${
            variant === "three"
              ? "border border-zinc-300 dark:border-zinc-600 rounded-md"
              : ""
          }\`}
        >
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {variant === "one" && (
                <>
                  {index !== 0 && (
                    <div className="flex-1 mt-4">
                      <div
                        className={\`h-0.5 bg-slate-200 dark:bg-slate-600 \${
                          currentStep === index || index < currentStep
                            ? "!bg-[#0bab7c]"
                            : ""
                        } \`}
                      ></div>
                    </div>
                  )}
                </>
              )}
              <div
                className={\`flex gap-x-4 items-center space-y-2 h-full \${
                  variant === "three" &&
                  "relative px-2 py-1 before:absolute before:w-[0.8rem] before:h-[0.8rem] before:bg-white dark:before:bg-zinc-900 before:-right-[0.5rem] before:border before:border-transparent border-r border-r-zinc-300 before:border-t-zinc-300 before:border-r-zinc-300 dark:border-r-zinc-600 dark:before:border-t-zinc-600 dark:before:border-r-zinc-600 before:rotate-45 last:before:hidden last:border-r-0"
                } \${variant === "one" && "flex-col"}\`}
              >
                {type === "icon" ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{
                      scale:
                        currentStep === index || index < currentStep ? 1.1 : 1,
                      backgroundColor:
                        currentStep === index || index < currentStep
                          ? "#0bab7c"
                          : "#4B5563",
                    }}
                    className="flex items-center justify-center w-8 h-8 text-white transition-colors duration-300 rounded-full"
                  >
                    {index < currentStep ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.707 14.707a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 1.414l-7 7z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <div className="flex-shrink-0">{step.icon}</div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{
                      scale:
                        currentStep === index || index < currentStep ? 1.1 : 1,
                      backgroundColor:
                        currentStep === index || index < currentStep
                          ? "#0bab7c"
                          : "#4B5563",
                    }}
                    className={\`rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 \${
                      currentStep === index || index < currentStep
                        ? "bg-[#0bab7c]"
                        : "bg-slate-200 dark:bg-zinc-700"
                    } text-white text-xl\`}
                  >
                    {index < currentStep ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.707 14.707a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 1.414l-7 7z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <span className="text-sm">{index + 1}</span>
                    )}
                  </motion.div>
                )}
                <div
                  className={\`text-sm \${variant === "one" && "text-center"} \${
                    currentStep === index || index < currentStep
                      ? "text-[#0bab7c]"
                      : "text-zinc-600 dark:text-zinc-400"
                  }\`}
                >
                  <div>{step.label}</div>
                  <div className="hidden sm:block">{step.description}</div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div>{steps[currentStep].content}</div>
      <div className="flex justify-between mt-6">
        <button
          type="button"
          className={\`px-4 py-2 rounded-md \${
            currentStep === 0
              ? "bg-slate-200  dark:bg-zinc-600 cursor-not-allowed"
              : "bg-[#0bab7c] hover:bg-[#0bab7c]/80 text-white"
          } text-slate-500 dark:text-white \`}
          onClick={handlePreviousStep}
          disabled={currentStep === 0}
        >
          Previous
        </button>
        <button
          type="button"
          className={\`px-4 py-2 rounded-md \${
            currentStep === steps.length - 1
              ? "bg-[#0bab7c]"
              : "bg-[#0bab7c] hover:bg-[#0bab7c]/80"
          } text-white\`}
          onClick={
            currentStep === steps.length - 1 ? handleFinish : handleNextStep
          }
        >
          {currentStep === steps.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Stepper;
`;
export const stepperComponentCodeJS = `import React, { useState } from "react";
import { motion } from "framer-motion";

const Stepper = ({ steps, type, variant }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const handleFinish = () => {
    console.log("Form submitted!");
  };

  return (
    <div className="dark:text-slate-200">
      <div className="mb-6">
        <div
          className={\`flex mb-2 justify-between \${
            variant === "three"
              ? "border border-zinc-300 dark:border-zinc-600 rounded-md"
              : ""
          }\`}
        >
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {variant === "one" && (
               <>
                  {index !== 0 && (
                    <div className="flex-1 mt-4">
                      <div
                        className={\`h-0.5 bg-slate-200 dark:bg-slate-600 \${
                          currentStep === index || index < currentStep
                            ? "!bg-[#0bab7c]"
                            : ""
                        } \`}
                      ></div>
                    </div>
                  )}
                </>
              )}
              <div
                className={\`flex gap-x-4 items-center space-y-2 h-full \${
                  variant === "three" &&
                  "relative px-2 py-1 before:absolute before:w-[0.8rem] before:h-[0.8rem] before:bg-white dark:before:bg-zinc-900 before:-right-[0.5rem] before:border before:border-transparent border-r border-r-zinc-300 before:border-t-zinc-300 before:border-r-zinc-300 dark:border-r-zinc-600 dark:before:border-t-zinc-600 dark:before:border-r-zinc-600 before:rotate-45 last:before:hidden last:border-r-0"
                } \${variant === "one" && "flex-col"}\`}
              >
                {type === "icon" ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{
                      scale:
                        currentStep === index || index < currentStep ? 1.1 : 1,
                      backgroundColor:
                        currentStep === index || index < currentStep
                          ? "#0bab7c"
                          : "#4B5563",
                    }}
                    className="flex items-center justify-center w-8 h-8 text-white transition-colors duration-300 rounded-full"
                  >
                    {index < currentStep ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.707 14.707a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 1.414l-7 7z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <div className="flex-shrink-0">{step.icon}</div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{
                      scale:
                        currentStep === index || index < currentStep ? 1.1 : 1,
                      backgroundColor:
                        currentStep === index || index < currentStep
                          ? "#0bab7c"
                          : "#4B5563",
                    }}
                    className={\`rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 \${
                      currentStep === index || index < currentStep
                        ? "bg-[#0bab7c]"
                        : "bg-slate-200 dark:bg-zinc-700"
                    } text-white text-xl\`}
                  >
                    {index < currentStep ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.707 14.707a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 1.414l-7 7z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <span className="text-sm">{index + 1}</span>
                    )}
                  </motion.div>
                )}
                <div
                  className={\`text-sm \${variant === "one" && "text-center"} \${
                    currentStep === index || index < currentStep
                      ? "text-[#0bab7c]"
                      : "text-zinc-600 dark:text-zinc-400"
                  }\`}
                >
                  <div>{step.label}</div>
                  <div className="hidden sm:block">{step.description}</div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div>{steps[currentStep].content}</div>
      <div className="flex justify-between mt-6">
        <button
          type="button"
          className={\`px-4 py-2 rounded-md \${
            currentStep === 0
              ? "bg-slate-200  dark:bg-zinc-600 cursor-not-allowed"
              : "bg-[#0bab7c] hover:bg-[#0bab7c]/80 text-white"
          } text-slate-500 dark:text-white \`}
          onClick={handlePreviousStep}
          disabled={currentStep === 0}
        >
          Previous
        </button>
        <button
          type="button"
          className={\`px-4 py-2 rounded-md \${
            currentStep === steps.length - 1
              ? "bg-[#0bab7c]"
              : "bg-[#0bab7c] hover:bg-[#0bab7c]/80"
          } text-white\`}
          onClick={
            currentStep === steps.length - 1 ? handleFinish : handleNextStep
          }
        >
          {currentStep === steps.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Stepper;
`;

export const stepperPreviewCodeTS = `import Stepper from "./Stepper";

const steps = [
  {
    label: "Step 1",
    content: (
      <div>
        Step 1 Content
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
          pariatur rerum facere voluptatem accusantium dolores consequuntur
          minus quam vel voluptatibus?
        </p>
      </div>
    ),
    description: "Step 1 Description",
  },
  {
    label: "Step 2",
    content: <div>Step 2 Content</div>,
    description: "Step 2 Description",
  },
  {
    label: "Step 3",
    content: <div>Step 3 Content</div>,
    description: "Step 3 Description",
  },
];

const App = () => {
  return (
    <div className="p-6 mt-2 border rounded-lg shadow-md border-zinc-300 dark:border-zinc-700">
      <Stepper steps={steps} />
    </div>
  );
};

export default App;
`;
export const stepperPreviewCodeJS = `import Stepper from "./Stepper";

const steps = [
  {
    label: "Step 1",
    content: (
      <div>
        Step 1 Content
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
          pariatur rerum facere voluptatem accusantium dolores consequuntur
          minus quam vel voluptatibus?
        </p>
      </div>
    ),
    description: "Step 1 Description",
  },
  {
    label: "Step 2",
    content: <div>Step 2 Content</div>,
    description: "Step 2 Description",
  },
  {
    label: "Step 3",
    content: <div>Step 3 Content</div>,
    description: "Step 3 Description",
  },
];

const App = () => {
  return (
    <div className="p-6 mt-2 border rounded-lg shadow-md border-zinc-300 dark:border-zinc-700">
      <Stepper steps={steps} />
    </div>
  );
};

export default App;
`;

export const stepperVariantsPreviewCode = `import Stepper from "./Stepper";

const steps = [
  {
    label: "Step 1",
    content: (
      <div>
        Step 1 Content
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
          pariatur rerum facere voluptatem accusantium dolores consequuntur
          minus quam vel voluptatibus?
        </p>
      </div>
    ),
    description: "Step 1 Description",
  },
  {
    label: "Step 2",
    content: <div>Step 2 Content</div>,
    description: "Step 2 Description",
  },
  {
    label: "Step 3",
    content: <div>Step 3 Content</div>,
    description: "Step 3 Description",
  },
];

const App = () => {
  return (
    <>
      <div className="p-6 mt-2 border rounded-lg shadow-md border-zinc-300 dark:border-zinc-700">
        <Stepper steps={steps} variant="three" />
      </div>
      <div className="p-6 mt-5 border rounded-lg shadow-md border-zinc-300 dark:border-zinc-700">
        <Stepper steps={steps} variant="two" />
      </div>
      <div className="p-6 mt-6 border rounded-lg shadow-md border-zinc-300 dark:border-zinc-700">
        <Stepper steps={steps} variant="one" />
      </div>
    </>
  );
};

export default App;
`;
export const stepperWithIconsPreviewCode = `import { BsBriefcase, BsPerson } from "react-icons/bs";
import Stepper from "./Stepper";

const steps = [
  {
    label: "Step 1",
    content: (
      <div>
        Step 1 Content
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
          pariatur rerum facere voluptatem accusantium dolores consequuntur
          minus quam vel voluptatibus?
        </p>
      </div>
    ),
    icon: <BsBriefcase />,
    description: "Step 1 Description",
  },
  {
    label: "Step 2",
    content: <div>Step 2 Content</div>,
    icon: "✏️",
    description: "Step 2 Description",
  },
  {
    label: "Step 3",
    content: <div>Step 3 Content</div>,
    icon: <BsPerson />,
    description: "Step 3 Description",
  },
];

const App = () => {
  return (
    <>
      <div className="p-6 mt-2 border rounded-lg shadow-md border-zinc-300 dark:border-zinc-700">
        <Stepper steps={steps} variant="three" type="icon" />
      </div>
      <div className="p-6 mt-5 border rounded-lg shadow-md border-zinc-300 dark:border-zinc-700">
        <Stepper steps={steps} variant="two" type="icon" />
      </div>
      <div className="p-6 mt-6 border rounded-lg shadow-md border-zinc-300 dark:border-zinc-700">
        <Stepper steps={steps} variant="one" type="icon" />
      </div>
    </>
  );
};

export default App;
`;

// --------------------------------------------------Switch------------------------------------------------------------
export const switchComponentCodeTS = `import React, { useState } from "react";
import classNames from "classnames";

interface SwitchProps {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  variant?: "default" | "primary" | "success" | "warning" | "danger";
  size?: "small" | "medium" | "large";
}

const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  variant = "default",
  size = "medium",
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleSwitchChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange(newValue);
  };

  const switchWidth = (() => {
    switch (size) {
      case "small":
        return "w-6";
      case "medium":
        return "w-8";
      case "large":
        return "w-10";
      default:
        return "w-8";
    }
  })();

  const switchClasses = classNames(
    "relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200",
    {
      "w-14 h-8": size === "medium",
      "w-12 h-6": size === "small",
      "w-16 h-10": size === "large",
    }
  );

  const thumbClasses = classNames(
    \`inline-block h-full transform rounded-full transition-transform ease-in-out duration-200 \${switchWidth} bg-gray-200\`,
    {
      "translate-x-0": !isChecked,
      "translate-x-6": isChecked,
    }
  );

  const trackClasses = classNames(
    "absolute block w-full h-full rounded-full bg-gray-300",
    {
      "bg-gray-500": isChecked && variant === "default",
      "!bg-[#0bab7c]": isChecked && variant === "primary",
      "!bg-green-500": isChecked && variant === "success",
      "!bg-yellow-500": isChecked && variant === "warning",
      "!bg-red-500": isChecked && variant === "danger",
    }
  );

  return (
    <div className={switchClasses} onClick={handleSwitchChange}>
      <div className={trackClasses} />
      <div className={thumbClasses} />
    </div>
  );
};

export default Switch;
`;
export const switchComponentCodeJS = `import React, { useState } from "react";
import classNames from "classnames";

const Switch = ({
  checked,
  onChange,
  variant = "default",
  size = "medium",
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleSwitchChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange(newValue);
  };

  const switchWidth = (() => {
    switch (size) {
      case "small":
        return "w-6";
      case "medium":
        return "w-8";
      case "large":
        return "w-10";
      default:
        return "w-8";
    }
  })();

  const switchClasses = classNames(
    "relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200",
    {
      "w-14 h-8": size === "medium",
      "w-12 h-6": size === "small",
      "w-16 h-10": size === "large",
    }
  );

  const thumbClasses = classNames(
    \`inline-block h-full transform rounded-full transition-transform ease-in-out duration-200 \${switchWidth} bg-gray-200\`,
    {
      "translate-x-0": !isChecked,
      "translate-x-6": isChecked,
    }
  );

  const trackClasses = classNames(
    "absolute block w-full h-full rounded-full bg-gray-300",
    {
      "bg-gray-500": isChecked && variant === "default",
      "!bg-[#0bab7c]": isChecked && variant === "primary",
      "!bg-green-500": isChecked && variant === "success",
      "!bg-yellow-500": isChecked && variant === "warning",
      "!bg-red-500": isChecked && variant === "danger",
    }
  );

  return (
    <div className={switchClasses} onClick={handleSwitchChange}>
      <div className={trackClasses} />
      <div className={thumbClasses} />
    </div>
  );
};

export default Switch;
`;

export const switchPreviewCodeTS = `import { useState } from "react";
import Switch from "./Switch";

const App = () => {
  const [isChecked, setIsChecked] = useState(true);
  const handleSwitchChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  console.log(isChecked);

  return (
    <>
      <Switch checked={isChecked} onChange={handleSwitchChange} />
    </>
  );
};

export default App;
`;
export const switchPreviewCodeJS = `import { useState } from "react";
import Switch from "./Switch";

const App = () => {
  const [isChecked, setIsChecked] = useState(true);
  const handleSwitchChange = (checked) => {
    setIsChecked(checked);
  };

  console.log(isChecked);

  return (
    <>
      <Switch checked={isChecked} onChange={handleSwitchChange} />
    </>
  );
};

export default App;
`;

export const switchVariantsPreviewCode = `import { useState } from "react";
import Switch from "./Switch";

const App = () => {
  const [isChecked, setIsChecked] = useState(true);
  const handleSwitchChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  console.log(isChecked);

  return (
    <div className="flex flex-wrap items-center gap-x-4">
      <Switch checked={isChecked} onChange={handleSwitchChange} />
      <Switch
        checked={isChecked}
        onChange={handleSwitchChange}
        variant="primary"
      />
      <Switch
        checked={isChecked}
        onChange={handleSwitchChange}
        variant="warning"
      />
      <Switch
        checked={isChecked}
        onChange={handleSwitchChange}
        variant="success"
      />
      <Switch
        checked={isChecked}
        onChange={handleSwitchChange}
        variant="danger"
      />
    </div>
  );
};

export default App;
`;
export const switchSizesPreviewCode = `import { useState } from "react";
import Switch from "./Switch";

const App = () => {
  const [isChecked, setIsChecked] = useState(true);
  const handleSwitchChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  console.log(isChecked);

  return (
    <div className="flex flex-wrap items-center gap-x-4">
      <Switch
        checked={isChecked}
        onChange={handleSwitchChange}
        variant="primary"
        size="small"
      />
      <Switch
        checked={isChecked}
        onChange={handleSwitchChange}
        variant="warning"
        size="medium"
      />
      <Switch
        checked={isChecked}
        onChange={handleSwitchChange}
        variant="success"
        size="large"
      />
    </div>
  );
};

export default App;
`;

// --------------------------------------------------Tabs------------------------------------------------------------
export const tabsComponentCodeTS = `import React, { useRef, useState } from "react";

interface TabProps {
  title: string | JSX.Element;
  children: React.ReactNode;
}

interface TabsProps {
  variant?: "pills" | "indicator";
  full?: boolean;
  children: React.ReactNode;
}

const Tab: React.FC<TabProps> = ({ children }) => {
  return <div className="relative">{children}</div>;
};

const Tabs: React.FC<TabsProps> = ({
  variant = "indicator",
  full = false,
  children,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    tabRef.current.style.left = \`calc(calc(100% / \${React.Children.count(
      children
    )}) * \${index})\`;
  };

  return (
    <div className="w-full">
      <div className={\`flex w-fit relative \${full ? "w-full" : ""}\`}>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return (
              <button
                key={index}
                className={\`relative z-10 py-2 flex items-center justify-center text-sm font-medium focus:outline-none w-fit px-6 flex-shrink-0 \${
                  full ? "flex-1 w-full" : ""
                } \${
                  index === activeTab
                    ? variant === "pills"
                      ? "text-white"
                      : "text-[#0bab7c]"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400"
                }\`}
                onClick={() => handleTabClick(index)}
              >
                {child.props.title}
              </button>
            );
          }
          return null;
        })}
        {variant === "indicator" && (
          <div
            className="absolute w-full h-[3px] left-0 bottom-0 bg-[#0bab7c]"
            ref={tabRef}
            style={{
              width: \`calc(100% / \${React.Children.count(children)})\`,
              transition: "left 0.3s ease-in-out",
            }}
          />
        )}
        {variant === "pills" && (
          <div
            className="absolute w-full left-0 top-0 h-full bg-[#0bab7c] rounded-full"
            ref={tabRef}
            style={{
              width: \`calc(100% / \${React.Children.count(children)})\`,
              transition: "left 0.3s ease-in-out",
            }}
          />
        )}
      </div>
      <div className="p-4">{React.Children.toArray(children)[activeTab]}</div>
    </div>
  );
};

export { Tabs, Tab };
`;
export const tabsComponentCodeJS = `import React, { useRef, useState } from "react";

const Tab = ({ children }) => {
  return <div className="relative">{children}</div>;
};

const Tabs = ({ variant = "indicator", full = false, children }) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabRef = useRef(null);

  const handleTabClick = (index) => {
    setActiveTab(index);
    tabRef.current.style.left = \`calc(calc(100% / \${React.Children.count(
      children
    )}) * \${index})\`;
  };

  return (
    <div className="w-full">
      <div className={\`flex w-fit relative \${full ? "w-full" : ""}\`}>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return (
              <button
                key={index}
                className={\`relative z-10 py-2 flex items-center justify-center text-sm font-medium focus:outline-none w-fit px-6 flex-shrink-0 \${
                  full ? "flex-1 w-full" : ""
                } \${
                  index === activeTab
                    ? variant === "pills"
                      ? "text-white"
                      : "text-[#0bab7c]"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400"
                }\`}
                onClick={() => handleTabClick(index)}
              >
                {child.props.title}
              </button>
            );
          }
          return null;
        })}
        {variant === "indicator" && (
          <div
            className="absolute w-full h-[3px] left-0 bottom-0 bg-[#0bab7c]"
            ref={tabRef}
            style={{
              width: \`calc(100% / \${React.Children.count(children)})\`,
              transition: "left 0.3s ease-in-out",
            }}
          />
        )}
        {variant === "pills" && (
          <div
            className="absolute w-full left-0 top-0 h-full bg-[#0bab7c] rounded-full"
            ref={tabRef}
            style={{
              width: \`calc(100% / \${React.Children.count(children)})\`,
              transition: "left 0.3s ease-in-out",
            }}
          />
        )}
      </div>
      <div className="p-4">{React.Children.toArray(children)[activeTab]}</div>
    </div>
  );
};

export { Tabs, Tab };
`;

export const tabsPreviewCodeTS = `import { Tab, Tabs } from "./Tabs";

const App = () => {
  return (
    <div className="p-4 mt-6 border rounded-md border-zinc-300 dark:border-zinc-600">
      <Tabs>
        <Tab title="Tab 1">
          <p>This is the content of the first tab</p>
        </Tab>
        <Tab title="Tab 2">
          <p>This is the content of the second tab</p>
        </Tab>
        <Tab title="Tab 3">
          <p>This is the content of the third tab</p>
        </Tab>
      </Tabs>
    </div>
  );
};

export default App;
`;
export const tabsPreviewCodeJS = `import { Tab, Tabs } from "./Tabs";

const App = () => {
  return (
    <div className="p-4 mt-6 border rounded-md border-zinc-300 dark:border-zinc-600">
      <Tabs>
        <Tab title="Tab 1">
          <p>This is the content of the first tab</p>
        </Tab>
        <Tab title="Tab 2">
          <p>This is the content of the second tab</p>
        </Tab>
        <Tab title="Tab 3">
          <p>This is the content of the third tab</p>
        </Tab>
      </Tabs>
    </div>
  );
};

export default App;
`;

export const pillsTabsPreviewCode = `import { Tab, Tabs } from "./Tabs";

const App = () => {
  return (
    <div className="p-4 mt-6 border rounded-md border-zinc-300 dark:border-zinc-600">
      <Tabs variant="pills">
        <Tab title="Tab 1">
          <p>This is the content of the first tab</p>
        </Tab>
        <Tab title="Tab 2">
          <p>This is the content of the second tab</p>
        </Tab>
        <Tab title="Tab 3">
          <p>This is the content of the third tab</p>
        </Tab>
      </Tabs>
    </div>
  );
};

export default App;
`;
export const fullWidthTabsPreviewCode = `import { Tab, Tabs } from "./Tabs";

const App = () => {
  return (
    <>
      <div className="p-4 mt-6 border rounded-md border-zinc-300 dark:border-zinc-600">
        <Tabs full>
          <Tab title="Tab 1">
            <p>This is the content of the first tab</p>
          </Tab>
          <Tab title="Tab 2">
            <p>This is the content of the second tab</p>
          </Tab>
          <Tab title="Tab 3">
            <p>This is the content of the third tab</p>
          </Tab>
        </Tabs>
      </div>
      <div className="p-4 mt-6 border rounded-md border-zinc-300 dark:border-zinc-600">
        <Tabs variant="pills" full>
          <Tab title="Tab 1">
            <p>This is the content of the first tab</p>
          </Tab>
          <Tab title="Tab 2">
            <p>This is the content of the second tab</p>
          </Tab>
          <Tab title="Tab 3">
            <p>This is the content of the third tab</p>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default App;
`;
export const tabsWithIconsPreviewCode = `import { FiLayers, FiSettings, FiUser } from "react-icons/fi";
import { Tab, Tabs } from "./Tabs";

const App = () => {
  return (
    <>
      <div className="p-4 mt-6 border rounded-md border-zinc-300 dark:border-zinc-600">
        <Tabs variant="indicator">
          <Tab
            title={
              <div className="flex items-center gap-x-2">
                <FiUser />
                <span>Tab 1</span>
              </div>
            }
          >
            <div>
              <h1 className="mb-3 text-xl font-semibold">Content for Tab 1</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorem sequi officiis laborum cum doloribus minus voluptatum
                excepturi expedita, fuga recusandae?
              </p>
            </div>
          </Tab>
          <Tab
            title={
              <div className="flex items-center gap-x-2">
                <FiLayers />
                <span>Tab 1</span>
              </div>
            }
          >
            <div>
              <h1 className="mb-3 text-xl font-semibold">Content for Tab 2</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
                nostrum voluptatem ratione perferendis, ullam eaque nam vel est
                iusto, voluptatum tempora quasi cum et ea? Sunt impedit odio cum
                vero!
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
                nostrum voluptatem ratione perferendis, ullam eaque nam vel est
                iusto, voluptatum tempora quasi cum et ea? Sunt impedit odio cum
                vero!
              </p>
            </div>
          </Tab>
          <Tab
            title={
              <div className="flex items-center gap-x-2">
                <FiSettings />
                <span>Tab 1</span>
              </div>
            }
          >
            <div>
              <h1 className="mb-3 text-xl font-semibold">Content for Tab 3</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                laudantium quibusdam possimus labore eum tenetur perspiciatis
                voluptates velit voluptate. Ullam consectetur perferendis, sunt
                rerum fugiat voluptate error voluptates tempora libero maiores
                debitis modi, voluptas, unde praesentium? Ut, quas quibusdam
                vitae culpa porro deleniti tempora, odit odio eveniet minima
                consequatur aut commodi illo dolore pariatur aliquam optio ex
                cum enim sit!
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                laudantium quibusdam possimus labore eum tenetur perspiciatis
                voluptates velit voluptate. Ullam consectetur perferendis, sunt
                rerum fugiat voluptate error voluptates tempora libero maiores
                debitis modi, voluptas, unde praesentium? Ut, quas quibusdam
                vitae culpa porro deleniti tempora, odit odio eveniet minima
                consequatur aut commodi illo dolore pariatur aliquam optio ex
                cum enim sit!
              </p>
            </div>
          </Tab>
        </Tabs>
      </div>
      <div className="p-4 mt-6 border rounded-md border-zinc-300 dark:border-zinc-600">
        <Tabs variant="pills" full>
          <Tab
            title={
              <div className="flex items-center gap-x-2">
                <FiUser />
                <span>Tab 1</span>
              </div>
            }
          >
            <div>
              <h1 className="mb-3 text-xl font-semibold">Content for Tab 1</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorem sequi officiis laborum cum doloribus minus voluptatum
                excepturi expedita, fuga recusandae?
              </p>
            </div>
          </Tab>
          <Tab
            title={
              <div className="flex items-center gap-x-2">
                <FiLayers />
                <span>Tab 1</span>
              </div>
            }
          >
            <div>
              <h1 className="mb-3 text-xl font-semibold">Content for Tab 2</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
                nostrum voluptatem ratione perferendis, ullam eaque nam vel est
                iusto, voluptatum tempora quasi cum et ea? Sunt impedit odio cum
                vero!
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
                nostrum voluptatem ratione perferendis, ullam eaque nam vel est
                iusto, voluptatum tempora quasi cum et ea? Sunt impedit odio cum
                vero!
              </p>
            </div>
          </Tab>
          <Tab
            title={
              <div className="flex items-center gap-x-2">
                <FiSettings />
                <span>Tab 1</span>
              </div>
            }
          >
            <div>
              <h1 className="mb-3 text-xl font-semibold">Content for Tab 3</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                laudantium quibusdam possimus labore eum tenetur perspiciatis
                voluptates velit voluptate. Ullam consectetur perferendis, sunt
                rerum fugiat voluptate error voluptates tempora libero maiores
                debitis modi, voluptas, unde praesentium? Ut, quas quibusdam
                vitae culpa porro deleniti tempora, odit odio eveniet minima
                consequatur aut commodi illo dolore pariatur aliquam optio ex
                cum enim sit!
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                laudantium quibusdam possimus labore eum tenetur perspiciatis
                voluptates velit voluptate. Ullam consectetur perferendis, sunt
                rerum fugiat voluptate error voluptates tempora libero maiores
                debitis modi, voluptas, unde praesentium? Ut, quas quibusdam
                vitae culpa porro deleniti tempora, odit odio eveniet minima
                consequatur aut commodi illo dolore pariatur aliquam optio ex
                cum enim sit!
              </p>
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default App;
`;

// --------------------------------------------------Trello Boards------------------------------------------------------------
export const trelloComponentCodeTS = `import React, { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import TrelloColumn from "./TrelloColumn";
import { FiBook } from "react-icons/fi";
import { Link } from "react-router-dom";

interface CardData {
  id: string;
  content: React.ReactNode;
}

interface ColumnData {
  id: string;
  title: string;
  cards: CardData[];
}

const initialColumns: ColumnData[] = [
  {
    id: "column-1",
    title: "Todo",
    cards: [
      {
        id: "card-1",
        content: (
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
            <span>Buy groceries</span>
          </div>
        ),
      },
      {
        id: "card-2",
        content: (
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
            <span>Finish homework</span>
          </div>
        ),
      },
      {
        id: "card-3",
        content: (
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
            <span>Eat food</span>
          </div>
        ),
      },
      {
        id: "card-4",
        content: (
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
            <span>Do workouts</span>
          </div>
        ),
      },
    ],
  },
  {
    id: "column-2",
    title: "In Progress",
    cards: [
      {
        id: "card-5",
        content: (
          <div className="flex items-center gap-2">
            <FiBook />
            <Link to="/">Hello</Link>
          </div>
        ),
      },
      { id: "card-6", content: <div>Write an article</div> },
    ],
  },
  {
    id: "column-3",
    title: "Completed",
    cards: [
      { id: "card-7", content: <div>Go shopping</div> },
      { id: "card-8", content: <div>Watch a movie</div> },
    ],
  },
];

const Trello: React.FC = () => {
  const [columns, setColumns] = useState<ColumnData[]>(initialColumns);

  const handleDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      // Card was not moved
      return;
    }

    const sourceColumn = columns.find((col) => col.id === source.droppableId);
    const destinationColumn = columns.find(
      (col) => col.id === destination.droppableId
    );

    if (!sourceColumn || !destinationColumn) return;

    if (source.droppableId === destination.droppableId) {
      // Card is moved within the same column
      const newCards = Array.from(sourceColumn.cards);
      const [removed] = newCards.splice(source.index, 1);
      newCards.splice(destination.index, 0, removed);

      const newColumn = {
        ...sourceColumn,
        cards: newCards,
      };

      const newColumns = columns.map((col) =>
        col.id === newColumn.id ? newColumn : col
      );
      setColumns(newColumns);
    } else {
      // Card is moved to a different column
      const sourceCards = Array.from(sourceColumn.cards);
      const destCards = Array.from(destinationColumn.cards);

      const [removed] = sourceCards.splice(source.index, 1);
      destCards.splice(destination.index, 0, removed);

      const newSourceColumn = {
        ...sourceColumn,
        cards: sourceCards,
      };

      const newDestColumn = {
        ...destinationColumn,
        cards: destCards,
      };

      const newColumns = columns.map((col) =>
        col.id === newSourceColumn.id
          ? newSourceColumn
          : col.id === newDestColumn.id
          ? newDestColumn
          : col
      );
      setColumns(newColumns);
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex flex-col md:flex-row justify-center gap-4 p-8 bg-white border rounded-md dark:border-0 dark:bg-zinc-700/80">
        {columns.map((column, index) => (
          <TrelloColumn
            key={column.id}
            id={column.id}
            index={index}
            title={column.title}
            cards={column.cards}
          />
        ))}
      </div>
    </DragDropContext>
  );
};

export default Trello;
`;
export const trelloComponentCodeJS = `import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import TrelloColumn from "./TrelloColumn";
import { FiBook } from "react-icons/fi";
import { Link } from "react-router-dom";

const initialColumns = [
  {
    id: "column-1",
    title: "Todo",
    cards: [
      {
        id: "card-1",
        content: (
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
            <span>Buy groceries</span>
          </div>
        ),
      },
      {
        id: "card-2",
        content: (
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
            <span>Finish homework</span>
          </div>
        ),
      },
      {
        id: "card-3",
        content: (
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
            <span>Eat food</span>
          </div>
        ),
      },
      {
        id: "card-4",
        content: (
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
            <span>Do workouts</span>
          </div>
        ),
      },
    ],
  },
  {
    id: "column-2",
    title: "In Progress",
    cards: [
      {
        id: "card-5",
        content: (
          <div className="flex items-center gap-2">
            <FiBook />
            <Link to="/">Hello</Link>
          </div>
        ),
      },
      { id: "card-6", content: <div>Write an article</div> },
    ],
  },
  {
    id: "column-3",
    title: "Completed",
    cards: [
      { id: "card-7", content: <div>Go shopping</div> },
      { id: "card-8", content: <div>Watch a movie</div> },
    ],
  },
];

const Trello = () => {
  const [columns, setColumns] = useState(initialColumns);

  const handleDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      // Card was not moved
      return;
    }

    const sourceColumn = columns.find((col) => col.id === source.droppableId);
    const destinationColumn = columns.find(
      (col) => col.id === destination.droppableId
    );

    if (!sourceColumn || !destinationColumn) return;

    if (source.droppableId === destination.droppableId) {
      // Card is moved within the same column
      const newCards = Array.from(sourceColumn.cards);
      const [removed] = newCards.splice(source.index, 1);
      newCards.splice(destination.index, 0, removed);

      const newColumn = {
        ...sourceColumn,
        cards: newCards,
      };

      const newColumns = columns.map((col) =>
        col.id === newColumn.id ? newColumn : col
      );
      setColumns(newColumns);
    } else {
      // Card is moved to a different column
      const sourceCards = Array.from(sourceColumn.cards);
      const destCards = Array.from(destinationColumn.cards);

      const [removed] = sourceCards.splice(source.index, 1);
      destCards.splice(destination.index, 0, removed);

      const newSourceColumn = {
        ...sourceColumn,
        cards: sourceCards,
      };

      const newDestColumn = {
        ...destinationColumn,
        cards: destCards,
      };

      const newColumns = columns.map((col) =>
        col.id === newSourceColumn.id
          ? newSourceColumn
          : col.id === newDestColumn.id
          ? newDestColumn
          : col
      );
      setColumns(newColumns);
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex justify-center gap-4 p-8 bg-white border rounded-md dark:border-0 dark:bg-zinc-700/80">
        {columns.map((column, index) => (
          <TrelloColumn
            key={column.id}
            id={column.id}
            index={index}
            title={column.title}
            cards={column.cards}
          />
        ))}
      </div>
    </DragDropContext>
  );
};

export default Trello;
`;
export const trelloColumnComponentCodeTS = `import React, { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import TrelloCard from "./TrelloCard";
import { RxCardStackPlus } from "react-icons/rx";
import { FiChevronLeft } from "react-icons/fi";

interface CardData {
  id: string;
  content: React.ReactNode;
}

interface ColumnProps {
  id: string;
  index: number;
  title: string;
  cards: CardData[];
}

const TrelloColumn: React.FC<ColumnProps> = ({ id, index, title, cards }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapseToggle = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <div
      className={\`max-w-xs bg-white shadow border dark:border-0 dark:bg-zinc-800 rounded-md px-4 py-2 relative tran-all\`}
      style={{
        width: isCollapsed ? "50px" : "100%",
        height: isCollapsed ? "350px" : "auto",
      }}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-semibold text-zinc-400">
          {!isCollapsed && title}
        </h3>
        {isCollapsed && (
          <div className="absolute -rotate-90 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <h3 className="text-xl font-semibold text-zinc-400 whitespace-nowrap">
              {title}
            </h3>
          </div>
        )}
        <button
          className={\`absolute top-2 right-4 bg-transparent hover:bg-slate-200 dark:hover:bg-zinc-600 p-2 rounded-full \${
            isCollapsed && "!right-1 bg-slate-100 dark:bg-zinc-600"
          }\`}
          onClick={handleCollapseToggle}
        >
          <span className="text-slate-500 dark:text-slate-200 opacity-70">
            <FiChevronLeft
              className={\`text-2xl \${isCollapsed ? "rotate-180" : ""}\`}
            />
          </span>
        </button>
      </div>
      {!isCollapsed && (
        <Droppable droppableId={id}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={\`min-h-40 \${
                snapshot.isDraggingOver
                  ? "border border-dashed border-zinc-300 dark:border-zinc-400 rounded-md"
                  : ""
              }\`}
            >
              <div className="mt-8">
                {cards.map((card, index) => (
                  <TrelloCard key={card.id} id={card.id} index={index}>
                    {card.content}
                  </TrelloCard>
                ))}
              </div>
              {provided.placeholder}
              {cards.length === 0 && !snapshot.isDraggingOver && (
                <div className="flex flex-col items-center justify-center mt-20 text-center gap-y-2">
                  <h1 className="text-2xl opacity-50 text-zinc-200">
                    Drop cards here
                  </h1>
                  <span>
                    <RxCardStackPlus className="text-5xl text-zinc-200 opacity-40" />
                  </span>
                </div>
              )}
            </div>
          )}
        </Droppable>
      )}
    </div>
  );
};

export default TrelloColumn;
`;
export const trelloColumnComponentCodeJS = `import React, { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import TrelloCard from "./TrelloCard";
import { RxCardStackPlus } from "react-icons/rx";
import { FiChevronLeft } from "react-icons/fi";

const TrelloColumn = ({ id, index, title, cards }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapseToggle = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <div
      className={\`max-w-xs bg-white shadow border dark:border-0 dark:bg-zinc-800 rounded-md px-4 py-2 relative tran-all\`}
      style={{
        width: isCollapsed ? "50px" : "100%",
        height: isCollapsed ? "350px" : "auto",
      }}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-semibold text-zinc-400">
          {!isCollapsed && title}
        </h3>
        {isCollapsed && (
          <div className="absolute -rotate-90 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <h3 className="text-xl font-semibold text-zinc-400 whitespace-nowrap">
              {title}
            </h3>
          </div>
        )}
        <button
          className={\`absolute top-2 right-4 bg-transparent hover:bg-slate-200 dark:hover:bg-zinc-600 p-2 rounded-full \${
            isCollapsed && "!right-1 bg-slate-100 dark:bg-zinc-600"
          }\`}
          onClick={handleCollapseToggle}
        >
          <span className="text-slate-500 dark:text-slate-200 opacity-70">
            <FiChevronLeft
              className={\`text-2xl \${isCollapsed ? "rotate-180" : ""}\`}
            />
          </span>
        </button>
      </div>
      {!isCollapsed && (
        <Droppable droppableId={id}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={\`min-h-40 \${
                snapshot.isDraggingOver
                  ? "border border-dashed border-zinc-300 dark:border-zinc-400 rounded-md"
                  : ""
              }\`}
            >
              <div className="mt-8">
                {cards.map((card, index) => (
                  <TrelloCard key={card.id} id={card.id} index={index}>
                    {card.content}
                  </TrelloCard>
                ))}
              </div>
              {provided.placeholder}
              {cards.length === 0 && !snapshot.isDraggingOver && (
                <div className="flex flex-col items-center justify-center mt-20 text-center gap-y-2">
                  <h1 className="text-2xl opacity-50 text-zinc-200">
                    Drop cards here
                  </h1>
                  <span>
                    <RxCardStackPlus className="text-5xl text-zinc-200 opacity-40" />
                  </span>
                </div>
              )}
            </div>
          )}
        </Droppable>
      )}
    </div>
  );
};

export default TrelloColumn;
`;
export const trelloCardsComponentCodeTS = `import React from "react";
import { Draggable } from "react-beautiful-dnd";

interface CardProps {
  id: string;
  index: number;
  children: React.ReactNode;
}

const TrelloCard: React.FC<CardProps> = ({ id, index, children }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          className={\`bg-white shadow border dark:border-0 dark:bg-zinc-700 p-4 rounded-md mb-2 \${
            snapshot.isDragging ? "shadow-md" : ""
          }\`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {children}
        </div>
      )}
    </Draggable>
  );
};

export default TrelloCard;
`;
export const trelloCardsComponentCodeJS = `import React from "react";
import { Draggable } from "react-beautiful-dnd";

const TrelloCard = ({ id, index, children }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          className={\`bg-white shadow border dark:border-0 dark:bg-zinc-700 p-4 rounded-md mb-2 \${
            snapshot.isDragging ? "shadow-md" : ""
          }\`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {children}
        </div>
      )}
    </Draggable>
  );
};

export default TrelloCard;
`;

export const trelloPreviewCodeTS = `import Trello from "./Trello";

const App = () => {
  return (
    <>
      <Trello />
    </>
  );
};

export default App;
`;
export const trelloPreviewCodeJS = `import Trello from "./Trello";

const App = () => {
  return (
    <>
      <Trello />
    </>
  );
};

export default App;
`;

// --------------------------------------------------Tooltip------------------------------------------------------------
export const tooltipComponentCodeTS = `import React, { ReactNode, useState } from "react";
import { CSSTransition } from "react-transition-group";

interface TooltipProps {
  children: ReactNode;
  position?: "left" | "right" | "top" | "bottom";
  text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, position, text }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  const getPostion = () => {
    switch (position) {
      case "bottom":
        return "top-full mt-2 left-1/2 -translate-x-1/2 before:left-1/2 before:-translate-x-1/2 before:-top-[0.33rem]";
        break;
      case "top":
        return "bottom-full mb-2 left-1/2 -translate-x-1/2 before:left-1/2 before:-translate-x-1/2 before:-bottom-[0.33rem]";
        break;
      case "left":
        return "right-full mr-2 top-1/2 -translate-y-1/2 before:top-1/2 before:-translate-y-1/2 before:-right-1";
        break;
      case "right":
        return "left-full ml-2 top-1/2 -translate-y-1/2 before:top-1/2 before:-translate-y-1/2 before:-left-1";
        break;

      default:
        return "bottom-full mb-2 left-1/2 -translate-x-1/2 before:left-1/2 before:-translate-x-1/2 before:-bottom-[0.33rem]";
        break;
    }
  };

  return (
    <>
      <div className="relative inline-block">
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </div>
        <CSSTransition
          in={isTooltipVisible}
          timeout={1000}
          classNames="tooltip"
          unmountOnExit
        >
          <div
            className={\`
            absolute px-2 py-1 bg-zinc-600 backdrop-blur-lg text-slate-200 text-sm rounded-md opacity-100 transition-opacity duration-300 pointer-events-auto whitespace-nowrap \${getPostion()}
             z-[999] before:absolute before:w-[0.65rem] before:h-[0.65rem] before:bg-zinc-600 before:rotate-45
            \`}
          >
            {text}
          </div>
        </CSSTransition>
      </div>
    </>
  );
};

export default Tooltip;
`;
export const tooltipComponentCodeJS = `import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

const Tooltip = ({ children, position, text }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  const getPostion = () => {
    switch (position) {
      case "bottom":
        return "top-full mt-2 left-1/2 -translate-x-1/2 before:left-1/2 before:-translate-x-1/2 before:-top-[0.33rem]";
        break;
      case "top":
        return "bottom-full mb-2 left-1/2 -translate-x-1/2 before:left-1/2 before:-translate-x-1/2 before:-bottom-[0.33rem]";
        break;
      case "left":
        return "right-full mr-2 top-1/2 -translate-y-1/2 before:top-1/2 before:-translate-y-1/2 before:-right-1";
        break;
      case "right":
        return "left-full ml-2 top-1/2 -translate-y-1/2 before:top-1/2 before:-translate-y-1/2 before:-left-1";
        break;

      default:
        return "bottom-full mb-2 left-1/2 -translate-x-1/2 before:left-1/2 before:-translate-x-1/2 before:-bottom-[0.33rem]";
        break;
    }
  };

  return (
    <>
      <div className="relative inline-block">
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </div>
        <CSSTransition
          in={isTooltipVisible}
          timeout={1000}
          classNames="tooltip"
          unmountOnExit
        >
          <div
            className={\`
            absolute px-2 py-1 bg-zinc-600 backdrop-blur-lg text-slate-200 text-sm rounded-md opacity-100 transition-opacity duration-300 pointer-events-auto whitespace-nowrap \${getPostion()}
             z-[999] before:absolute before:w-[0.65rem] before:h-[0.65rem] before:bg-zinc-600 before:rotate-45
            \`}
          >
            {text}
          </div>
        </CSSTransition>
      </div>
    </>
  );
};

export default Tooltip;
`;

export const tooltipPreviewCodeTS = `import Tooltip from "./Tooltip";

const App = () => {
  return (
    <>
      <Tooltip text="Tooltip Text!">
        <button className="px-6 py-2 bg-[#0bab7c] hover:bg-[#0bab7c]/80 text-white rounded-md">
          Default position
        </button>
      </Tooltip>
    </>
  );
};

export default App;
`;
export const tooltipPreviewCodeJS = `import Tooltip from "./Tooltip";

const App = () => {
  return (
    <>
      <Tooltip text="Tooltip Text!">
        <button className="px-6 py-2 bg-[#0bab7c] hover:bg-[#0bab7c]/80 text-white rounded-md">
          Default position
        </button>
      </Tooltip>
    </>
  );
};

export default App;
`;

export const tooltipPositionPreviewCode = `import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div className="flex flex-wrap items-center gap-x-4">
      <Tooltip text="Tooltip Text!">
        <button className="px-4 py-2 bg-[#0bab7c] text-white rounded-md">
          Top
        </button>
      </Tooltip>
      <Tooltip text="Tooltip Text!" position="bottom">
        <button className="px-4 py-2 bg-[#0bab7c] text-white rounded-md">
          Bottom
        </button>
      </Tooltip>
      <Tooltip text="Tooltip Text!" position="left">
        <button className="px-4 py-2 bg-[#0bab7c] text-white rounded-md">
          Left
        </button>
      </Tooltip>
      <Tooltip text="Tooltip Text!" position="right">
        <button className="px-4 py-2 bg-[#0bab7c] text-white rounded-md">
          Right
        </button>
      </Tooltip>
    </div>
  );
};

export default App;
`;

export const tooltipCSS = `.tooltip-enter {
  opacity: 0;
}

.tooltip-enter-active {
  opacity: 1;
  transition: opacity 500ms;
}

.tooltip-exit {
  opacity: 1;
}

.tooltip-exit-active {
  opacity: 0;
  transition: opacity 500ms;
}`;

// --------------------------------------------------Toggle------------------------------------------------------------
export const toggleComponentCodeTS = `import React, { useState, useCallback } from "react";

interface ToggleProps<T> {
  list: T[];
  initialValue?: T | null;
  children: (
    items: T[],
    toggleActive: (itemToActivate: T) => void,
    selectedItem: T | undefined
  ) => React.ReactNode;
}

const Toggle = <T,>({
  list,
  initialValue = null,
  children,
}: ToggleProps<T>): JSX.Element => {
  const [items, setItems] = useState<(T & { isActive: boolean })[]>(
    list.map((item) => ({
      ...item,
      isActive: item === initialValue,
    }))
  );

  const toggleActive = useCallback((itemToActivate: T) => {
    setItems((prevItems) => {
      const newItems = prevItems.map((item) => ({
        ...item,
        isActive: item === itemToActivate,
      }));
      return newItems;
    });
  }, []);

  const selectedItem = items.find((item) => item.isActive);

  return <>{children(items, toggleActive, selectedItem)}</>;
};

export default Toggle;
`;
export const toggleComponentCodeJS = `import React, { useState, useCallback } from "react";

const Toggle = ({ list, initialValue = null, children }) => {
  const [items, setItems] = useState(
    list.map((item) => ({
      ...item,
      isActive: item === initialValue,
    }))
  );

  const toggleActive = useCallback((itemToActivate) => {
    setItems((prevItems) => {
      const newItems = prevItems.map((item) => ({
        ...item,
        isActive: item === itemToActivate,
      }));
      return newItems;
    });
  }, []);

  const selectedItem = items.find((item) => item.isActive);

  return <>{children(items, toggleActive, selectedItem)}</>;
};

export default Toggle;
`;

export const togglePreviewCodeTS = `import Toggle from "./Toggle";

// Add "isActive" for typescript autocompletion
const items = [
  { id: 1, label: "Option 1", isActive: false },
  { id: 2, label: "Option 2", isActive: false },
  { id: 3, label: "Option 3", isActive: false },
];

const App = () => {
  return (
    <>
      <Toggle list={items} initialValue={items[0]}>
        {(items, toggleActive, selectedItem) => (
          <div>
            <ul className="flex items-center gap-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleActive(item)}
                  className={\`w-20 h-20 flex items-center flex-wrap justify-center drop-shadow-md bg-white dark:bg-zinc-700 rounded-lg cursor-pointer \${
                    item.isActive ? "!bg-[#0bab7c] text-white" : ""
                  }\`}
                >
                  {item.label}
                </div>
              ))}
            </ul>
            {selectedItem && (
              <p className="mt-3">Selected item: {selectedItem.label}</p>
            )}
          </div>
        )}
      </Toggle>
    </>
  );
};

export default App;
`;
export const togglePreviewCodeJS = `import Toggle from "./Toggle";

// Add "isActive" for typescript autocompletion
const items = [
  { id: 1, label: "Option 1", isActive: false },
  { id: 2, label: "Option 2", isActive: false },
  { id: 3, label: "Option 3", isActive: false },
];

const App = () => {
  return (
    <>
      <Toggle list={items} initialValue={items[0]}>
        {(items, toggleActive, selectedItem) => (
          <div>
            <ul className="flex items-center gap-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleActive(item)}
                  className={\`w-20 h-20 flex items-center flex-wrap justify-center drop-shadow-md bg-white dark:bg-zinc-700 rounded-lg cursor-pointer \${
                    item.isActive ? "!bg-[#0bab7c] text-white" : ""
                  }\`}
                >
                  {item.label}
                </div>
              ))}
            </ul>
            {selectedItem && (
              <p className="mt-3">Selected item: {selectedItem.label}</p>
            )}
          </div>
        )}
      </Toggle>
    </>
  );
};

export default App;
`;

export const toggleExampleTwoPreviewCode = `import { FiLayers, FiUser } from "react-icons/fi";
import Toggle from "./Toggle";
import { GiBriefcase } from "react-icons/gi";
import { BsCheck2 } from "react-icons/bs";

// Add "isActive" for typescript autocompletion
const items = [
  {
    id: 1,
    title: "Option 1",
    icon: <FiUser className="mx-auto text-3xl" />,
    isActive: false,
  },
  {
    id: 2,
    title: "Option 2",
    icon: <GiBriefcase className="mx-auto text-3xl" />,
    isActive: false,
  },
  {
    id: 3,
    title: "Option 3",
    icon: <FiLayers className="mx-auto text-3xl" />,
    isActive: false,
  },
];

const App = () => {
  return (
    <>
      <Toggle list={items} initialValue={items[0]}>
        {(items, toggleActive, selectedItem) => (
          <div>
            <div className="flex items-center gap-5 mt-5">
              {items.map((item) => (
                <div
                  key={item.id}
                  className={\`w-28 h-28 sm:w-36 sm:h-36 text-slate-500 dark:text-slate-200 rounded-lg grid place-items-center text-center border-2 border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 cursor-pointer relative overflow-hidden shadow \${
                    item.isActive && " !border-[#0bab7c] shadow-[#0bab7c]/30"
                  }\`}
                  onClick={() => toggleActive(item)}
                >
                  <div>
                    {item.icon}
                    <p className="mt-3">{item.title}</p>
                  </div>
                  {item.isActive && (
                    <div className="w-7 h-7 absolute -top-1 -right-1 rounded grid place-items-center bg-[#0bab7c]">
                      <BsCheck2 className="text-white" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            {selectedItem && (
              <p className="mt-3">Selected item: {selectedItem.title}</p>
            )}
          </div>
        )}
      </Toggle>
    </>
  );
};

export default App;
`;
export const toggleExampleThreePreviewCode = `import Toggle from "./Toggle";

// Add "isActive" for typescript autocompletion
const items = [
  { id: 1, label: "Option 1", isActive: false },
  { id: 2, label: "Option 2", isActive: false },
];

const App = () => {
  return (
    <>
      <Toggle list={items} initialValue={items[0]}>
        {(items, toggleActive, selectedItem) => (
          <div>
            <ul className="flex items-center gap-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleActive(item)}
                  className={\`w-20 h-20 flex items-center flex-wrap justify-center drop-shadow-md bg-white dark:bg-zinc-700 rounded-lg cursor-pointer \${
                    item.isActive ? "!bg-[#0bab7c] text-white" : ""
                  }\`}
                >
                  {item.label}
                </div>
              ))}
            </ul>
            {selectedItem && (
              <p className="mt-3">Selected item: {selectedItem.label}</p>
            )}
          </div>
        )}
      </Toggle>
    </>
  );
};

export default App;
`;

// --------------------------------------------------Toast------------------------------------------------------------
export const toastComponentCodeTS = `import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCheckCircle,
  FiXCircle,
  FiInfo,
  FiAlertTriangle,
} from "react-icons/fi";

interface ToastProps {
  message: string;
  variant: "success" | "danger" | "info" | "warning";
  trigger?: JSX.Element;
}

const Toast: React.FC<ToastProps> = ({ message, variant, trigger }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isVisible]);

  let bgColor = "bg-white dark:bg-zinc-800";
  let borderColor = "";
  let iconColor = "";
  let Icon;

  switch (variant) {
    case "success":
      borderColor = "border-l-green-500";
      iconColor = "text-green-500";
      Icon = FiCheckCircle;
      break;
    case "danger":
      borderColor = "border-l-red-500";
      iconColor = "text-red-500";
      Icon = FiXCircle;
      break;
    case "info":
      borderColor = "border-l-[#0bab7c]";
      iconColor = "text-[#0bab7c]";
      Icon = FiInfo;
      break;
    case "warning":
      borderColor = "border-l-yellow-500";
      iconColor = "text-yellow-500";
      Icon = FiAlertTriangle;
      break;
    default:
      break;
  }

  return (
    <div className="relative">
      {trigger &&
        React.cloneElement(trigger as React.ReactElement, {
          onClick: () => setIsVisible(true),
        })}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={\`fixed top-4 right-4 p-3 \${bgColor} text-slate-500 dark:text-slate-200 rounded-md shadow-md flex items-center border-l-2 z-50 \${borderColor}\`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            {Icon && <Icon className={\`mr-2 \${iconColor}\`} />}
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Toast;
`;
export const toastComponentCodeJS = `import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCheckCircle,
  FiXCircle,
  FiInfo,
  FiAlertTriangle,
} from "react-icons/fi";

const Toast = ({ message, variant, trigger }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isVisible]);

  let bgColor = "bg-white dark:bg-zinc-800";
  let borderColor = "";
  let iconColor = "";
  let Icon;

  switch (variant) {
    case "success":
      borderColor = "border-l-green-500";
      iconColor = "text-green-500";
      Icon = FiCheckCircle;
      break;
    case "danger":
      borderColor = "border-l-red-500";
      iconColor = "text-red-500";
      Icon = FiXCircle;
      break;
    case "info":
      borderColor = "border-l-[#0bab7c]";
      iconColor = "text-[#0bab7c]";
      Icon = FiInfo;
      break;
    case "warning":
      borderColor = "border-l-yellow-500";
      iconColor = "text-yellow-500";
      Icon = FiAlertTriangle;
      break;
    default:
      break;
  }

  return (
    <div className="relative">
      {trigger &&
        React.cloneElement(trigger, {
          onClick: () => setIsVisible(true),
        })}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={\`fixed top-4 right-4 p-3 \${bgColor} text-slate-500 dark:text-slate-200 rounded-md shadow-md flex items-center border-l-2 z-50 \${borderColor}\`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            {Icon && <Icon className={\`mr-2 \${iconColor}\`} />}
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Toast;
`;

export const toastPreviewCodeTS = `import Toast from "./Toast";

const App = () => {
  return (
    <>
      <Toast
        message="Success toast message!"
        variant="success"
        trigger={
          <button className="px-5 py-2 text-white bg-[#0bab7c] rounded-md hover:bg-[#0bab7c]/80 mt-3">
            Success Toast
          </button>
        }
      />
    </>
  );
};

export default App;
`;
export const toastPreviewCodeJS = `import Toast from "./Toast";

const App = () => {
  return (
    <>
      <Toast
        message="Success toast message!"
        variant="success"
        trigger={
          <button className="px-5 py-2 text-white bg-[#0bab7c] rounded-md hover:bg-[#0bab7c]/80 mt-3">
            Success Toast
          </button>
        }
      />
    </>
  );
};

export default App;
`;

export const toastVariantsPreviewCode = `import Toast from "./Toast";

const App = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-x-2">
        <Toast
          message="Success toast message!"
          variant="success"
          trigger={
            <button className="px-5 py-2 text-white bg-[#0bab7c] rounded-md hover:bg-[#0bab7c]/80 mt-3">
              Success Toast
            </button>
          }
        />
        <Toast
          message="Danger toast message!"
          variant="danger"
          trigger={
            <button className="px-5 py-2 text-white bg-[#0bab7c] rounded-md hover:bg-[#0bab7c]/80 mt-3">
              Danger Toast
            </button>
          }
        />
        <Toast
          message="Info toast message!"
          variant="info"
          trigger={
            <button className="px-5 py-2 text-white bg-[#0bab7c] rounded-md hover:bg-[#0bab7c]/80 mt-3">
              Info Toast
            </button>
          }
        />
        <Toast
          message="Warning toast message!"
          variant="warning"
          trigger={
            <button className="px-5 py-2 text-white bg-[#0bab7c] rounded-md hover:bg-[#0bab7c]/80 mt-3">
              Warning Toast
            </button>
          }
        />
      </div>
    </>
  );
};

export default App;
`;
