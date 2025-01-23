import { useState } from 'react';
import { MantineProvider, Button } from '@mantine/core';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { inputItems, inputItems1 } from './inputItems';
import { createDynamicSchema } from './schema';
import FormBuilder from './FormBuilder';
import { z } from 'zod';

function App() {
  
  const [items] = useState([...inputItems, ...inputItems1]);

  
  const formSchema = createDynamicSchema(items);
  type FormSchemaType = z.infer<typeof formSchema>;

 
  const methods = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormSchemaType) => {
    console.log('Form Data:', data);
  };

  return (
    <MantineProvider>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <FormBuilder title="Dynamic Form" inputItems={items} />
          <Button type="submit" mt="md">
            Submit
          </Button>
        </form>
      </FormProvider>
    </MantineProvider>
  );
}

export default App;
