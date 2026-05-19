import GenericCard from '../components/ui/generic-card';
export interface FeatureCardProps {
  image: string;
  imagePosition?: "left" | "right";
  title: string;
  description: string;
  alt: string;
  bgColor?: string;
  className?:string

}


export interface GenericCardProps {
  icon:string,
  title: string;
  description:string,
  bgColor?: string
}


export interface HeadingProps{
  title: string,
  description: string
}


export interface TestimonialCardProps {
  rating: number;
  testimonial: string;
  name: string;
  location: string;
  initials?: string;
}