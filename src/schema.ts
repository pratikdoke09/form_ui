import { z } from 'zod';

export const INPUT_TYPES = {
  INPUT_FIELD: 'inputField',
  FILE_INPUT_FIELD: 'fileInputField',
  STATIC_SELECT: 'staticSelect',
  EMAIL: 'email',
  PASSWORD: 'password',
  RADIO: 'radio',
  CHECKBOX: 'checkbox'
} as const;


const fileSchema = z
  .instanceof(File, { message: 'Please upload a valid file' })
  .refine((file) => file.size <= 5 * 1024 * 1024, { 
    message: 'File size must be less than 5MB' 
  })
  .refine((file) => ['image/jpeg', 'image/png', 'application/pdf'].includes(file.type), { 
    message: 'Only JPEG, PNG, and PDF files are allowed' 
  });

const emailSchema = (label: string) => z
  .string()
  .email('Invalid email address')
  .min(1, `${label} is required`)
  .max(50, 'Email must be less than 50 characters');

const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters long')
  .max(20, 'Password must be less than 20 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number')
  .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character');

const inputFieldSchema = (label: string, maxLength = 50) => z
  .string()
  .min(1, `${label} is required`)
  .max(maxLength, `${label} must be less than ${maxLength} characters`);

const staticSelectSchema = (label: string) => z
  .string()
  .nonempty(`${label} selection is required`);

const radioSchema = (label: string, options: string[]) => z
  .enum(options as [string, ...string[]], {
    errorMap: () => ({ message: `Please select a valid option for ${label}` })
  });

const checkboxSchema = (label: string) => z
  .boolean()
  .refine(val => val === true, { message: `${label} must be checked` });

const baseSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  profilePicture: fileSchema.optional()
});

export const createDynamicSchema = (items: { 
  name: string; 
  type: typeof INPUT_TYPES[keyof typeof INPUT_TYPES]; 
  label?: string;
  options?: string[];
}[]) => {
  let schema = baseSchema;

  items.forEach((item) => {
    const { name, type, label = '', options = [] } = item;
    
    const dynamicSchemas: Record<string, z.ZodTypeAny> = {
      [INPUT_TYPES.INPUT_FIELD]: inputFieldSchema(label),
      [INPUT_TYPES.FILE_INPUT_FIELD]: fileSchema.optional(),
      [INPUT_TYPES.STATIC_SELECT]: staticSelectSchema(label),
      [INPUT_TYPES.EMAIL]: emailSchema(label),
      [INPUT_TYPES.PASSWORD]: passwordSchema,
      [INPUT_TYPES.RADIO]: radioSchema(label, options),
      [INPUT_TYPES.CHECKBOX]: checkboxSchema(label)
    };

    if (dynamicSchemas[type]) {
      schema = schema.extend({ [name]: dynamicSchemas[type] });
    }
  });

  return schema;
};