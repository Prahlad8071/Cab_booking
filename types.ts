
export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface SuggestionCard {
  title: string;
  description: string;
  image: string;
  ctaText: string;
}

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}
