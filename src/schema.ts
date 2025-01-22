import { z } from 'zod';

const fileSchema = z
  .instanceof(File, { message: 'Please upload a valid file' })
  .refine((file) => file.size <= 5 * 1024 * 1024, { message: 'File size must be less than 5MB' })
  .refine((file) => ['image/jpeg', 'image/png', 'application/pdf'].includes(file.type), {
    message: 'Only JPEG, PNG, and PDF files are allowed',
  });

const emailSchema = (label: string) =>
  z.string().email('Invalid email address').min(1, `${label} is required`);

const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters long')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number')
  .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character');

const inputFieldSchema = (label: string) => z.string().min(1, `${label} is required`);
const staticSelectSchema = (label: string) => z.string().nonempty(`${label} selection is required`);

const baseSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  profilePicture: fileSchema.optional(),
  framework: z.string().nonempty('Framework selection is required'),
});

export const createDynamicSchema = (items: { name: string; type: string; label?: string }[]) => {
  let schema = baseSchema;

  items.forEach((item) => {
    const { name, type, label = '' } = item;

    const dynamicSchemas: Record<string, z.ZodTypeAny> = {
      inputField: inputFieldSchema(label),
      fileInputField: fileSchema.optional(),
      staticSelect: staticSelectSchema(label),
      email: emailSchema(label),
      password: passwordSchema,
    };

    if (dynamicSchemas[type]) {
      schema = schema.extend({ [name]: dynamicSchemas[type] });
    }
  });

  return schema;
};
