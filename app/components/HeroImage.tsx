"use client";
import { isMobile } from "react-device-detect";
import Image, { StaticImageData } from "next/image";
import hero_image from "../assets/hero_image.jpg";
import hero_image_mobile from "../assets/hero_image_mobile.jpg";

export function HeroImage() {
  let heroImageElement: StaticImageData | null = null;
  if (!isMobile) {
    heroImageElement = hero_image;
  } else {
    heroImageElement = hero_image_mobile;
  }

  return (
    <Image className="mx-auto mb-10 w-full" src={heroImageElement} alt="" />
  );
}
