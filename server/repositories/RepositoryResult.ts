export interface RepositoryResult<T> {
  success: boolean;
  data?: T;
  error?: string;
}
