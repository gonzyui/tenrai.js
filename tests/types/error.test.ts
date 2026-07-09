import { describe, it, expect } from 'vitest';
import { TenraiError, type TenraiApiErrorResponse } from '../../src/types/error';

describe('TenraiError', () => {
  it('should create an error with message and status', () => {
    const error = new TenraiError('Not found', 404);

    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(TenraiError);
    expect(error.message).toBe('Not found');
    expect(error.status).toBe(404);
    expect(error.data).toBeUndefined();
  });

  it('should create an error with message, status, and data', () => {
    const errorData: TenraiApiErrorResponse = {
      status: 404,
      type: 'ResourceNotFoundException',
      message: 'Not found',
      error: 'Resource not found',
      path: '/anime/1',
    };
    const error = new TenraiError('Not found', 404, errorData);

    expect(error.message).toBe('Not found');
    expect(error.status).toBe(404);
    expect(error.data).toEqual(errorData);
  });

  it('should have the correct name', () => {
    const error = new TenraiError('Error', 500);
    expect(error.name).toBe('TenraiError');
  });
});
