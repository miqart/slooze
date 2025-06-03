import { isAxiosError } from 'axios';

interface ApiErrorResponse {
  message: string;
  code?: string;
  status?: number;
}

export const getErrorMessage = (error: unknown): string => {
  let errorMessage;

  if (isAxiosError<ApiErrorResponse>(error)) {
    errorMessage = error.response?.data?.message;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return errorMessage || 'An unexpected error occurred.';
};
