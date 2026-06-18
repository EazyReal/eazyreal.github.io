export type DateValue = Date | string | undefined;

const datePrefix = /^\d{4}-\d{2}-\d{2}/;

export const normalizeDate = (date: DateValue) => {
  if (!date) {
    return undefined;
  }

  if (date instanceof Date) {
    return date.toISOString().slice(0, 10);
  }

  return date.match(datePrefix)?.[0] ?? date;
};

const toDate = (date: DateValue) => {
  if (!date) {
    return undefined;
  }

  if (date instanceof Date) {
    return date;
  }

  if (datePrefix.test(date)) {
    return new Date(`${normalizeDate(date)}T00:00:00Z`);
  }

  return new Date(date);
};

export const formatDisplayDate = (date: DateValue) =>
  new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
    year: "numeric",
  }).format(toDate(date));
