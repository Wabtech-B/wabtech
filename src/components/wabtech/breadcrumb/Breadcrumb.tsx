import React from "react";
import { FiChevronRight } from "react-icons/fi";

interface BreadcrumbItem {
  label: string;
  icon?: React.ReactNode;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: string | React.ReactNode;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = <FiChevronRight />,
}) => {
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
