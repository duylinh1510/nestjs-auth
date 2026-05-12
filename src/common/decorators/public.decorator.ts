// This file defines a custom decorator in NestJS used to mark routes as publicly accessible, bypassing authentication.

import { SetMetadata } from '@nestjs/common';

//IS_PUBLIC_KEY — a constant string used as a metadata key to tag routes.
export const IS_PUBLIC_KEY = 'isPublic';

// a custom decorator that attaches isPublic: true metadata to a route or controller using NestJS's SetMetadata.
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
