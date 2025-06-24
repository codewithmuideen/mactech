// src/components/Header/NavData.tsx

import React from 'react';
import images from '../../constants/images'; // For icons/images
import {
  ProductDropdown,
  IntegrationsDropdown,
  UseCasesDropdown,
  ResourcesDropdown,
  LanguageDropdown
} from './DropdownContent';

export interface NavItem {
  id: string;
  label: string | React.ReactNode;
  href?: string;
  isDropdown: boolean;
  dropdownContent?: React.ReactNode; // For desktop use
  isMegaMenu?: boolean;
  dropdown?: { label: string; href: string }[]; // For mobile use
}

export const mainNavItems: NavItem[] = [
  {
    id: 'product',
    label: 'Product',
    isDropdown: true,
    isMegaMenu: true,
    dropdownContent: <ProductDropdown />,
    dropdown: [
      { label: 'Contact Management', href: '#' },
      { label: 'Email Marketing & Tools', href: '#' },
      { label: 'Tasks & Calendar', href: '#' },
      { label: 'Sales Pipeline', href: '#' },
      { label: 'Sales Analytics', href: '#' },
      { label: 'Projects', href: '#' },
      { label: 'Workflow Automation', href: '#' },
      { label: 'AI Content Assistant', href: '#' },
      { label: 'Collaboration', href: '#' },
    ],
  },
  {
    id: 'pricing',
    label: 'Pricing',
    href: '/signup',
    isDropdown: false,
  },
  {
    id: 'integrations',
    label: 'Integrations',
    isDropdown: true,
    isMegaMenu: true,
    dropdownContent: <IntegrationsDropdown />,
    dropdown: [
      { label: 'API for Developers', href: '#' },
      { label: 'Technology Partners', href: '#' },
    ],
  },
  {
    id: 'use-cases',
    label: 'Use Cases',
    isDropdown: true,
    isMegaMenu: true,
    dropdownContent: <UseCasesDropdown />,
    dropdown: [
      { label: 'Real Estate', href: '#' },
      { label: 'Consultants', href: '#' },
      { label: 'Manufacturers', href: '#' },
    ],
  },
  {
    id: 'resources',
    label: 'Resources',
    isDropdown: true,
    isMegaMenu: true,
    dropdownContent: <ResourcesDropdown />,
    dropdown: [
      { label: 'Blog', href: '#' },
      { label: 'Help Center', href: '#' },
      { label: 'Guides', href: '#' },
    ],
  },
];

export const rightNavItems: NavItem[] = [
  {
    id: 'language',
    label: <img src={images.globe2} alt="Language Selector" className="w-6 h-6" />,
    isDropdown: true,
    dropdownContent: <LanguageDropdown />,
    dropdown: [
      { label: 'English', href: '#' },
      { label: 'French', href: '#' },
      { label: 'Spanish', href: '#' },
    ],
  },
  {
    id: 'login',
    label: 'Log In',
    href: '/login',
    isDropdown: false,
  },
];
