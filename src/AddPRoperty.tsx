import React from 'react';
import { TextInput, FileInput, NativeSelect, Grid, PasswordInput } from '@mantine/core';
import { useFormContext } from 'react-hook-form';
import { INPUT_FIELD, FILE_INPUT_FIELD, STATIC_SELECT, Item } from '../helpers';

interface AddPropertyProps {
  item: Item;
}

const AddProperty: React.FC<AddPropertyProps> = ({ item }) => {
  const {
    register,
    formState: { errors },
    setValue,
    trigger,
  } = useFormContext();

  const handleFileChange = (file: File | null) => {
    if (file) {
      setValue(item.name, file);
      trigger(item.name);
    }
  };

  switch (item.type) {
    case INPUT_FIELD:
      return (
        <Grid.Col span={item.gridSpan}>
          <TextInput
            label={item.label}
            description={item.description}
            placeholder={item.placeholder}
            {...register(item.name)}
            error={errors[item.name]?.message}
          />
        </Grid.Col>
      );

    case 'email':
      return (
        <Grid.Col span={item.gridSpan}>
          <TextInput
            label={item.label}
            description={item.description}
            placeholder={item.placeholder}
            {...register(item.name)}
            error={errors[item.name]?.message}
          />
        </Grid.Col>
      );

    case 'password':
      return (
        <Grid.Col span={item.gridSpan}>
          <PasswordInput
            label={item.label}
            description={item.description}
            placeholder={item.placeholder}
            {...register(item.name)}
            error={errors[item.name]?.message}
          />
        </Grid.Col>
      );

    case FILE_INPUT_FIELD:
      return (
        <Grid.Col span={item.gridSpan}>
          <FileInput
            label={item.label}
            description={item.description}
            onChange={handleFileChange}
            error={errors[item.name]?.message}
            accept="image/jpeg, image/png, application/pdf"
          />
        </Grid.Col>
      );

    case STATIC_SELECT:
      return (
        <Grid.Col span={item.gridSpan}>
          <NativeSelect
            data={item.options || []}
            label={item.label}
            description={item.description}
            {...register(item.name)}
            error={errors[item.name]?.message}
          />
        </Grid.Col>
      );

    default:
      return null;
  }
};

export default AddProperty;