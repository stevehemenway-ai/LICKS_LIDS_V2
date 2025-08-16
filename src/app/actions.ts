
'use server';

export type GenerateFormState = {
  success: boolean;
  message: string;
  portraitDataUri?: string;
  petName?: string;
  hatStyle?: string;
};

export type PublishFormState = {
    success: boolean;
    message: string;
}
