import React, { ReactNode } from 'react'
declare type CSSProperties = React.CSSProperties

declare interface PresentationTheme {
  backgroundColor?: string
  textColor?: string
}

declare interface Props {
  /**
   * The slides in the presentation.
   */
  children?: ReactNode

  /**
   * Override styling of the presentation.
  */
  style?: CSSProperties

  /**
   * The theme of your presentation.
  */
  theme?: PresentationTheme

}

declare const Presentation: React.FC<Props>

declare interface SlideProps {
  /**
   * The content of the slide.
   */
  children?: ReactNode

  /**
   * Override styling of the slide.
  */
  style?: CSSProperties
}

export default Presentation
export declare const Slide: React.FC<SlideProps>
