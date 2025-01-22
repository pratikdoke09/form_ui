import React from 'react';
import { Fieldset, Grid } from '@mantine/core';
import AddProperty from './AddPRoperty';
import { Item } from '../helpers';

interface FormBuilderProps {
  title: string;
  inputItems: Item[];
}

const FormBuilder: React.FC<FormBuilderProps> = ({ inputItems, title }) => (
  <Fieldset legend={title} m={10}>
    <Grid>
      {inputItems.map((item) => (
        <AddProperty key={item.name} item={item} />
      ))}
    </Grid>
  </Fieldset>
);

export default FormBuilder;
