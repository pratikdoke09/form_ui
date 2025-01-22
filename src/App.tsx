// App.tsx
import { useState } from 'react';
import { MantineProvider, createTheme, Button } from '@mantine/core';
import { Item } from '../helpers';
import FormBuilder from './FormBuilder';

// Define the theme
const theme = createTheme({
  // Define your theme here if needed
});

const inputItems: Item[] = [
  {
    type: 'inputField',
    name: 'name',
    label: 'Name',
    description: 'Your full name',
    placeholder: 'Enter your name',
    gridSpan: 4,
  },
  {
    type: 'fileInputField',
    name: 'profilePicture',
    label: 'Profile Picture',
    description: 'Upload your profile picture',
    placeholder: 'Choose a file',
    gridSpan: 4,
  },
  {
    type: 'staticSelect',
    name: 'framework',
    label: 'Framework',
    description: 'Select your preferred framework',
    options: ['React', 'Angular', 'Svelte', 'Vue'],
    gridSpan: 3,
  },
];

const anotherInputItems: Item[] = [
  {
    type: 'inputField',
    name: 'anotherName',
    label: 'Name',
    description: 'Your Other name',
    placeholder: 'Enter your Other name',
    gridSpan: 4,
  },
  {
    type: 'staticSelect',
    name: 'gender',
    label: 'Gender ',
    description: 'Select your Gender',
    options: ['male', 'female', 'not a gender'],
    gridSpan: 4,
  },
];

const a: Item[] = [
  {
    type: 'inputField',
    name: 'anotherName',
    label: 'Name',
    description: 'Your Other name',
    placeholder: 'Enter your Other name',
    gridSpan: 3,
  },
  {
    type: 'staticSelect',
    name: 'gender',
    label: 'Gender ',
    description: 'Select your Gender',
    options: ['male', 'female', 'not a gender'],
    gridSpan: 3,
  },
  {
    type: 'inputField',
    name: 'anotherName',
    label: 'Name',
    description: 'Your Other name',
    placeholder: 'Enter your Other name',
    gridSpan: 3,
  },
  {
    type: 'staticSelect',
    name: 'gender',
    label: 'Gender ',
    description: 'Select your Gender',
    options: ['male', 'female', 'not a gender'],
    gridSpan: 3,
  },
];

function App() {
  const [formData, setFormData] = useState<{ [key: string]: any }>({
    name: '',
    profilePicture: undefined,
    framework: 'React',
  });

  const handleChange = (updatedField: { [key: string]: any }) => {
    setFormData((prevData) => ({
      ...prevData,
      ...updatedField,
    }));
  };

  return (
    <MantineProvider theme={theme}>
      <FormBuilder
        title="Personal information"
        inputItems={inputItems} 
        formData={formData} 
        onChange={handleChange}
      />
      <FormBuilder
        title="another information"
        inputItems={anotherInputItems} 
        formData={formData} 
        onChange={handleChange}
      />
      <FormBuilder
        title="lilo "
        inputItems={a} 
        formData={formData} 
        onChange={handleChange}
      />
      <Button onClick={() => console.log(formData)}>Submit</Button>
    </MantineProvider>
  );
}

export default App;
