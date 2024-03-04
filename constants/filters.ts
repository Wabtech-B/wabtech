interface FilterOption {
  name: string;
  value: string;
}

interface FilterGroup {
  category: string;
  filterValue: string;
  options: FilterOption[];
}

export const filters: FilterGroup[] = [
  {
    category: "PricingType",
    filterValue: "type",
    options: [
      { name: "Free", value: "FREE" },
      { name: "Premium", value: "PREMIUM" },
    ],
  },
  {
    category: "Framework",
    filterValue: "framework",
    options: [
      { name: "Plain HTML", value: "plain-html" },
      { name: "React.js & JavaScript", value: "react-js" },
      { name: "React.js & Typescript", value: "react-ts" },
      { name: "Next.js & JavaScript", value: "next-js" },
      { name: "Next.js & Typescript", value: "next-ts" },
    ],
  },
  {
    category: "Styling",
    filterValue: "styling",
    options: [
      { name: "CSS", value: "css" },
      { name: "Tailwind CSS", value: "tailwind-css" },
      { name: "Material UI", value: "material-ui" },
      { name: "Bootstrap", value: "bootstrap" },
      { name: "Chakra UI", value: "chakra-ui" },
    ],
  },
];

export default filters;
