import * as React from "react";

export type CSSSize = number | string;

export type ResponsiveSettings = {
  columns?: CSSSize;
  gap?: CSSSize;
  columnGap?: CSSSize;
  rowGap?: CSSSize;
  minRowHeight?: CSSSize;
  autoRows?: CSSSize | "sm" | "md" | "lg";
  rows?: CSSSize;
  areas?: string | string[];
  placeItems?: string;
  placeContent?: string;
  justifyItems?: string;
  alignItems?: string;
};

export type Breakpoints = {
  sm?: ResponsiveSettings;
  md?: ResponsiveSettings;
  lg?: ResponsiveSettings;
  xl?: ResponsiveSettings;
};

export type AsProp = keyof JSX.IntrinsicElements | React.ComponentType<any>;

export interface BentoGridProps extends React.HTMLAttributes<HTMLElement> {
  as?: AsProp;
  columns?: CSSSize;
  gap?: CSSSize;
  columnGap?: CSSSize;
  rowGap?: CSSSize;
  minRowHeight?: CSSSize;
  autoRows?: CSSSize | "sm" | "md" | "lg";
  rows?: CSSSize;
  areas?: string | string[];
  placeItems?: string;
  placeContent?: string;
  justifyItems?: string;
  alignItems?: string;
  responsive?: Breakpoints;
  children?: React.ReactNode;
}

export interface BentoBoxProps extends React.HTMLAttributes<HTMLElement> {
  as?: AsProp;
  asChild?: boolean;
  colSpan?: CSSSize;
  rowSpan?: CSSSize;
  span?: CSSSize;
  colStart?: CSSSize;
  rowStart?: CSSSize;
  placeSelf?: string;
  children?: React.ReactNode;
}

export const BentoGrid: React.ForwardRefExoticComponent<
  BentoGridProps & React.RefAttributes<HTMLElement>
>;

export const BentoBox: React.ForwardRefExoticComponent<
  BentoBoxProps & React.RefAttributes<HTMLElement>
>;

export function useBreakpoint(
  customQueries?: Partial<Record<"sm" | "md" | "lg" | "xl", string>>
): "sm" | "md" | "lg" | "xl" | undefined;
