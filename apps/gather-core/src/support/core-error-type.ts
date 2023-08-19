import { HttpStatus } from '@nestjs/common';

export const CoreErrorType: Record<string, CoreErrorType> = {
  PROFILE_NOT_FOUND: {
    status: HttpStatus.NOT_FOUND,
    code: 'dd',
    message: '',
  },
} as const;

export type CoreErrorType = {
  status: HttpStatus;
  code: string;
  message: string;
};
