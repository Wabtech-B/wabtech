import React from "react";

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
    ? { stroke: `url(#${gradientId})` }
    : { fill: `url(#${gradientId})` };

  const classNames = className ? `gradient-icon ${className}` : "gradient-icon";

  return (
    <div className={classNames}>
      <svg width="0" height="0">
        <linearGradient id={gradientId} x1="100%" y1="100%" x2="0%" y2="0%">
          {gradientColors.map((color, index) => (
            <stop
              key={index}
              offset={`${(index / (gradientColors.length - 1)) * 100}%`}
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
