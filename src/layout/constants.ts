import { INavLink, IPolicyLink, IContactLink, ISocialLink } from "./interfaces";

export const NAV_LINKS: INavLink[] = [
  { href: "/", title: "Menu" },
  { href: "/location", title: "Location" },
  { href: "/about", title: "About Us" },
];

export const POLICY_LINKS: IPolicyLink[] = [
  { href: "/", title: "Terms of Service" },
  { href: "/", title: "Privacy Policy" },
];

export const CONTACT_LINKS: IContactLink[] = [
  { href: "/", title: "KintanBuf@Kin.com" },
  { href: "/", title: "Franchise" },
];

export const SOCIAL_LINKS: ISocialLink[] = [
  { href: "https://facebook.com", icon: "fb.png" },
  { href: "https://youtube.com", icon: "yt.png" },
  { href: "https://instagram.com", icon: "ig.png" },
  { href: "https://tiktok.com", icon: "tiktok.png" },
];
