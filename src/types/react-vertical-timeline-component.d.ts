declare module 'react-vertical-timeline-component' {
  import { ReactNode } from 'react';

  interface VerticalTimelineElementProps {
    date?: string;
    dateClassName?: string;
    icon?: ReactNode;
    iconStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    contentArrowStyle?: React.CSSProperties;
    children?: ReactNode;
  }

  interface VerticalTimelineProps {
    children?: ReactNode;
    className?: string;
    lineColor?: string;
    layout?: '1-column' | '2-columns';
  }

  export const VerticalTimeline: React.FC<VerticalTimelineProps>;
  export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>;
} 