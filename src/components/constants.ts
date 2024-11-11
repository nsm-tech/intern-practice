import { NavLink, PolicyLink, ContactLink, SocialLink } from "./types";
import FB from "../assets/fb.png";
import YT from "../assets/yt.png";
import IG from "../assets/ig.png";
import Tiktok from "../assets/tiktok.png";

export const navLinks: NavLink[] = [
  { href: "/", title: "Menu" },
  { href: "/location", title: "Location" },
  { href: "/about", title: "About Us" },
];

export const policyLink: PolicyLink[] = [
  { href: "/", title: "Terms of Service" },
  { href: "/", title: "Privacy Policy" },
];

export const contactLink: ContactLink[] = [
  { href: "/", title: "KintanBuf@Kin.com" },
  { href: "/", title: "Franchise" },
];

export const socialLinks: SocialLink[] = [
  { href: "https://facebook.com", icon: FB },
  { href: "https://youtube.com", icon: YT },
  { href: "https://instagram.com", icon: IG },
  { href: "https://tiktok.com", icon: Tiktok },
];
