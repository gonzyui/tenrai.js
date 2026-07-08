export class TenraiError extends Error {
  status: number;
  data?: any;

  constructor(message: string, status: number, data?: any) {
    super(message);
    this.name = 'TenraiError';
    this.status = status;
    this.data = data;
  }
}
