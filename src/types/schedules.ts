/**
 * Query parameters for anime schedules.
 */
export interface ScheduleQueryParams {
  /**
   * Filter schedules by day of the week.
   */
  filter?:
    | 'monday'
    | 'tuesday'
    | 'wednesday'
    | 'thursday'
    | 'friday'
    | 'saturday'
    | 'sunday'
    | 'other'
    | 'unknown';
  /**
   * Flag — pass `true` to filter out NSFW entries.
   */
  sfw?: boolean;
  /**
   * Flag — pass `true` to include unapproved entries in results.
   */
  unapproved?: boolean;
  /**
   * Flag — pass `true` to filter out kids entries.
   */
  kids?: boolean;
  /**
   * Page number to retrieve (default: 1).
   */
  page?: number;
  /**
   * Results per page (default: 25, max: 50).
   */
  limit?: number;
}
