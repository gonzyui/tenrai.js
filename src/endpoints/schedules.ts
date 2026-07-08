import type { TenraiClient } from '../client';
import type {
  Anime,
  TenraiPaginatedResponse,
  ScheduleQueryParams,
} from '../types';

export class SchedulesEndpoint {
  private client: TenraiClient;

  constructor(client: TenraiClient) {
    this.client = client;
  }

  /**
   * Get anime schedules
   * @param params Query parameters
   * @returns Promise with anime schedules data
   */
  async getSchedules(
    params?: ScheduleQueryParams,
  ): Promise<TenraiPaginatedResponse<Anime>> {
    return this.client.request<TenraiPaginatedResponse<Anime>>(
      '/schedules',
      params,
    );
  }
}
