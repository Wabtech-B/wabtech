import React, { ReactElement } from "react";
interface AvatarGroupProps {
  size?: "small" | "medium" | "large";
  max?: number;
  children: React.ReactNode;
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({
  children,
  size = "medium",
  max = 4,
}) => {
  const avatars = React.Children.toArray(children).slice(0, max);

  return (
    <div className="flex">
      {avatars.map((avatar, index) => (
        <div
          key={index}
          className="relative cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110 -ml-4 rounded-full first:ml-0"
        >
          <div className="border-2 rounded-full border-white dark:border-zinc-900">
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
