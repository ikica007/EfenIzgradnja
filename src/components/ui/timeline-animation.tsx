'use client';
import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { cn } from '../../lib/utils';

interface TimelineContentProps extends HTMLMotionProps<any> {
  as?: any;
  animationNum?: number;
  timelineRef?: React.RefObject<HTMLElement>;
  customVariants?: any;
}

export const TimelineContent = forwardRef<HTMLElement, TimelineContentProps>(
  ({ as = 'div', children, className, customVariants, animationNum = 0, timelineRef, ...props }, ref) => {
    const Component = React.useMemo(() => {
      return typeof as === 'string' ? (motion as any)[as] : motion.create ? motion.create(as) : (motion as any)(as);
    }, [as]);
    
    return (
      <Component
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        custom={animationNum}
        variants={customVariants}
        className={cn(className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

TimelineContent.displayName = 'TimelineContent';
