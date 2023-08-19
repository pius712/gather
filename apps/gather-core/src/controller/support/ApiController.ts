import { Controller } from '@nestjs/common';

export function ApiController(path: string, version: string = 'v1') {
  return Controller(`api/${version}/${path}`);
}
