/**
 * Represents the standard structured error response returned by the Tenrai API.
 */
export interface TenraiApiErrorResponse {
  /**
   * The HTTP status code returned for the request.
   */
  status: number;
  /**
   * The machine-readable category of the error.
   */
  type: string;
  /**
   * The human-readable explanation of what happened.
   */
  message: string;
  /**
   * Additional context or recovery guidance (optional).
   */
  error?: string;
  /**
   * The request path that produced the error.
   */
  path: string;
}

/**
 * Standard error class thrown by the Tenrai client when request failures occur.
 */
export class TenraiError extends Error {
  /**
   * The HTTP status code of the error.
   */
  status: number;
  /**
   * Structured error details from the Tenrai API.
   */
  data?: TenraiApiErrorResponse;

  constructor(message: string, status: number, data?: TenraiApiErrorResponse) {
    super(message);
    this.name = 'TenraiError';
    this.status = status;
    this.data = data;
  }
}
