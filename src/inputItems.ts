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

// Additional form fields
export const inputItems1: Item[] = [
  {
    type: 'inputField',
    name: 'username', 
    label: 'Username',
    description: 'Your username',
    placeholder: 'Enter your username',
    gridSpan: 4,
  },
  {
    type: 'email',
    name: 'workEmail', 
    label: 'Work Email',
    description: 'Your work email address',
    placeholder: 'Enter your work email',
    gridSpan: 4,
  },
  {
    type: 'password',
    name: 'confirmPassword',
    label: 'Confirm Password',
    description: 'Re-enter your password',
    placeholder: 'Confirm your password',
    gridSpan: 4,
  },
  {
    type: 'fileInputField',
    name: 'resume', 
    label: 'Resume',
    description: 'Upload your resume',
    gridSpan: 4,
  },
  {
    type: 'staticSelect',
    name: 'experienceLevel',
    label: 'Experience Level',
    description: 'Select your level of experience',
    options: ['Beginner', 'Intermediate', 'Expert'],
    gridSpan: 4,
  },
];


export const addDynamicField = (field: Item, items: Item[]): Item[] => {
  return [...items, field];
};
