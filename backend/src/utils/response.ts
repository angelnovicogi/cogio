export function success<T>(data: T) {
  return { data };
}

export function paginated<T>(data: T[], total: number, page: number, pageSize: number) {
  return { data, meta: { total, page, pageSize } };
}
