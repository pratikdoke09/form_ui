import React from 'react';
import { Fieldset, Grid } from '@mantine/core';
import AddProperty from './AddPRoperty';
import { Item } from '../helpers';

interface PersonalInformationFieldsetProps {
  title: string;
  inputItems: Item[];
  formData: { [key: string]: any };
  onChange: (updatedField: { [key: string]: any }) => void;
}

const FormBuilder: React.FC<PersonalInformationFieldsetProps> = ({ inputItems, formData, onChange, title }) => {
  return (
    <Fieldset legend={title} m={10}>
      <Grid>
        {inputItems.map((item) => (
          <AddProperty
            key={item.name}
            item={item}
            onChange={onChange}
            data={formData}
          />
        ))}
      </Grid>
    </Fieldset>
  );
};

export default FormBuilder;
