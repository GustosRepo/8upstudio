export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

export const inquireNav: NavItem = { label: "Inquire", href: "/work-with-us" };

export const footerNav: NavItem[] = [...primaryNav, inquireNav];
