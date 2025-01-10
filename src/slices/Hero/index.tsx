import { Bounded } from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="text-5xl text-red-500">
     <PrismicRichText field={slice.primary.heading} />
     </div>
     <PrismicRichText field={slice.primary.body} />
     <PrismicNextLink field={slice.primary.button} />
     </Bounded>
  );
};

export default Hero;
