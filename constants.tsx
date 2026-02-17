
import { NavItem, SuggestionCard, FooterLinkGroup } from './types';

export const MAIN_NAV: NavItem[] = [
  { label: 'Ride', href: '#' },
  { label: 'Drive', href: '#' },
  { label: 'Business', href: '#' },
  { label: 'Uber Eats', href: '#' },
  { label: 'About', href: '#', hasDropdown: true },
];

export const SUGGESTIONS: SuggestionCard[] = [
  {
    title: 'Ride',
    description: 'Go anywhere with Uber. Request a ride, hop in, and go.',
    image: 'https://picsum.photos/seed/uber-ride/400/300',
    ctaText: 'Details'
  },
  {
    title: 'Package',
    description: 'Uber Connect makes on-demand delivery easier than ever.',
    image: 'https://picsum.photos/seed/uber-package/400/300',
    ctaText: 'Details'
  },
  {
    title: 'Reserve',
    description: 'Reserve your ride in advance so you can relax on the day of your trip.',
    image: 'https://picsum.photos/seed/uber-reserve/400/300',
    ctaText: 'Details'
  }
];

export const FOOTER_LINKS: FooterLinkGroup[] = [
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '#' },
      { label: 'Our offerings', href: '#' },
      { label: 'Newsroom', href: '#' },
      { label: 'Investors', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' }
    ]
  },
  {
    title: 'Products',
    links: [
      { label: 'Ride', href: '#' },
      { label: 'Drive', href: '#' },
      { label: 'Deliver', href: '#' },
      { label: 'Eat', href: '#' },
      { label: 'Uber for Business', href: '#' },
      { label: 'Uber Freight', href: '#' }
    ]
  },
  {
    title: 'Global citizenship',
    links: [
      { label: 'Safety', href: '#' },
      { label: 'Sustainability', href: '#' }
    ]
  },
  {
    title: 'Travel',
    links: [
      { label: 'Reserve', href: '#' },
      { label: 'Airports', href: '#' },
      { label: 'Cities', href: '#' }
    ]
  }
];
