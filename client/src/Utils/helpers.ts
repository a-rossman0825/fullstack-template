// utils/helpers.ts

/**
 * Creates a deep clone of an object using native JavaScript
 * For complex objects with methods/functions, consider using a specialized library
 */
export const deepClone = <T>(obj: T): T => {
  if (obj === null || typeof obj !== 'object') return obj;
  
  // Handle Date objects
  if (obj instanceof Date) return new Date(obj.getTime()) as T;
  
  // Handle Arrays
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item)) as T;
  }
  
  // Handle Objects
  const cloned = {} as T;
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  
  return cloned;
};