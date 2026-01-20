export type PublicNavItems = { label: string; href: string };
export type PrivateNavItems = { label: string; href: string };

export const publicNavItems: PublicNavItems[] = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "Deals", href: "/newsfeed" },
  { label: "Categories", href: "/vendor" },
  { label: "Advertise With Us", href: "/advertise" },
  { label: "Subscribe", href: "/subscribe" },
];

export const privateNavItems: PrivateNavItems[] = [
  ...publicNavItems,
  { label: "My Properties", href: "/myproperties" },
];
