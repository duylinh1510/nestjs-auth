/*  This file defines a custom parameter decorator called @CurrentUser() that extracts the authenticated user from the request object.
    createParamDecorator — NestJS utility to create a decorator that injects values directly into route handler parameters.
    RequestWithUser — a custom type that extends Express's Request to include a user property (typed as your DB User schema).
    It grabs the current HTTP request via ExecutionContext and returns request.user.
*/

import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { User } from '../../db/schema';

type RequestWithUser = Request & { user: User };

export const CurrentUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<RequestWithUser>();
    return request.user;
  },
);
