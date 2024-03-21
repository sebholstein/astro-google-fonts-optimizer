type Fn<T extends unknown[], R> = (...args: T) => Promise<R>;

// Define the cacheWrapper function with type safety
export const cacheWrapper = <T extends unknown[], R>(
  fn: Fn<T, R>,
): Fn<T, R> => {
  const cache = new Map<string, R>();
  return async (...args: T): Promise<R> => {
    const cacheKey = JSON.stringify(args);
    const cachedData = cache.get(cacheKey);
    if (cachedData) {
      console.log('cache hit');
      return cachedData;
    }
    console.log('cache miss');
    const data = await fn(...args);
    cache.set(cacheKey, data);
    return data;
  };
};
export const tenacityWrapper = <T extends any[], R>(
  fn: Fn<T, R>,
  retries: number,
  delay: number = 0,
): Fn<T, R> => {
  return async (...args: T): Promise<R> => {
    let lastError: Error | null = null;

    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        return await fn(...args);
      } catch (error) {
        lastError = error;
        console.error(`Attempt ${attempt + 1} failed. Retrying...`);
        if (attempt < retries) {
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
      }
    }

    // If all retries failed, throw the last error
    throw lastError;
  };
};
