import React from 'react';
import {
  TextInput,
  FileInput,
  NativeSelect,
  Grid,
} from "@mantine/core";
import { INPUT_FIELD, FILE_INPUT_FIELD, STATIC_SELECT, Item } from "../helpers";

interface AddPropertyProps {
  item: Item;
  onChange: (e: { [key: string]: any }) => void;
  data: { [key: string]: any };  // Add the data prop type definition
}

const AddProperty: React.FC<AddPropertyProps> = ({ item, onChange, data }) => {
  const handleTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ [item.name]: e.target.value });
  };

  const handleFileInputChange = (file: File | null) => {
    onChange({ [item.name]: file });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange({ [item.name]: e.target.value });
  };

  switch (item.type) {
    case INPUT_FIELD:
      return (
        <Grid.Col span={item.gridSpan}>
          <TextInput
            label={item.label}
            description={item.description}
            placeholder={item.placeholder}
            value={data[item.name] || ''}
            onChange={handleTextInputChange} 
          />
        </Grid.Col>
      );

    case FILE_INPUT_FIELD:
      return (
        <Grid.Col span={item.gridSpan}>
          <FileInput
            label={item.label}
            description={item.description}
            placeholder={item.placeholder}
            value={data[item.name] || undefined}
            onChange={handleFileInputChange}
          />
        </Grid.Col>
      );

    case STATIC_SELECT:
      return (
        <Grid.Col span={item.gridSpan}>
          <NativeSelect
            value={data[item.name] || ''}  
            onChange={handleSelectChange} 
            data={item.options || []} 
            label={item.label}
            description={item.description}
          />
        </Grid.Col>
      );

    default:
      return null;
  }
};

export default AddProperty;
