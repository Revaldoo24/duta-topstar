"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

const easing = [0.22, 1, 0.36, 1] as const;

interface MotionProviderProps {
  children: React.ReactNode;
}

interface FadeInUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
}

interface StaggerGroupProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

export function MotionProvider({ children }: MotionProviderProps) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}

export function FadeInUp({
  children,
  className,
  delay = 0,
  distance = 24,
}: FadeInUpProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.6, ease: easing, delay }}
    >
      {children}
    </m.div>
  );
}

export function StaggerGroup({
  children,
  className,
  stagger = 0.08,
  delay = 0,
}: StaggerGroupProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </m.div>
  );
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: easing },
        },
      }}
    >
      {children}
    </m.div>
  );
}

