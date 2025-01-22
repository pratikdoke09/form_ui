import { Item } from '../helpers';
export const inputItems: Item[] = [
  {
    type: 'inputField',
    name: 'name',
    label: 'Name',
    description: 'Your full name',
    placeholder: 'Enter your name',
    gridSpan: 4,
  },
  {
    type: 'email', 
    name: 'email',
    label: 'Email',
    description: 'Your email address',
    placeholder: 'Enter your email',
    gridSpan: 4,
  },
  {
    type: 'password', 
    name: 'password',
    label: 'Password',
    description: 'Your password',
    placeholder: 'Enter your password',
    gridSpan: 4,
  },
  {
    type: 'fileInputField',
    name: 'profilePicture',
    label: 'Profile Picture',
    description: 'Upload your profile picture',
    gridSpan: 4,
  },
  {
    type: 'staticSelect',
    name: 'framework',
    label: 'Framework',
    description: 'Select your preferred framework',
    options: ['React', 'Angular', 'Svelte', 'Vue'],
    gridSpan: 4,
  },
];

export const addDynamicField = (field: Item, items: Item[]): Item[] => {
    return [...items, field];
  };