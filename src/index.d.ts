import * as React from "react";

export type CSSSize = number | string;

export type ResponsiveSettings = {
  columns?: CSSSize;
  gap?: CSSSize;
  minRowHeight?: CSSSize;
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
  minRowHeight?: CSSSize;
  responsive?: Breakpoints;
  children?: React.ReactNode;
}

export interface BentoBoxProps extends React.HTMLAttributes<HTMLElement> {
  as?: AsProp;
  colSpan?: CSSSize;
  rowSpan?: CSSSize;
  children?: React.ReactNode;
}

export const BentoGrid: React.ForwardRefExoticComponent<
  BentoGridProps & React.RefAttributes<HTMLElement>
>;

export const BentoBox: React.ForwardRefExoticComponent<
  BentoBoxProps & React.RefAttributes<HTMLElement>
>;
