// src/helpers.ts

// src/helpers.ts

export interface Item {
  type: string; // e.g., 'inputField', 'fileInputField', 'staticSelect', 'email', 'password'
  name: string;
  label: string;
  description?: string;
  placeholder?: string;
  gridSpan?: number;
  options?: string[];
}
export const INPUT_FIELD = 'inputField';
export const FILE_INPUT_FIELD = 'fileInputField';
export const STATIC_SELECT = 'staticSelect';