// utils/date.ts

/**
 * Format a date to YYYY-MM-DD using native JavaScript
 * @param date - Date object to format
 * @returns Formatted date string
 */
export const formatDate = (date: Date): string => {
  const isoString = date.toISOString();
  return isoString.split('T')[0]!;
};

/**
 * Format a date with locale-specific formatting
 * @param date - Date object to format
 * @param locale - Locale string (default: 'en-US')
 * @param options - Intl.DateTimeFormat options
 * @returns Formatted date string
 */
export const formatDateLocale = (
  date: Date, 
  locale: string = 'en-US',
  options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' }
): string => {
  return new Intl.DateTimeFormat(locale, options).format(date);
};