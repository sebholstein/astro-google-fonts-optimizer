type Fn<Args extends unknown[], ReturnType> = (
  ...args: Args
) => Promise<ReturnType>;

// Define the cacheWrapper function with type safety
export const cacheWrapper = <Args extends unknown[], ReturnType>(
  fn: Fn<Args, ReturnType>,
): Fn<Args, ReturnType> => {
  const cache = new Map<string, ReturnType>();
  return async (...args: Args): Promise<ReturnType> => {
    const cacheKey = JSON.stringify(args);
    const cachedData = cache.get(cacheKey);
    if (cachedData) {
      return cachedData;
    }
    const data = await fn(...args);
    cache.set(cacheKey, data);
    return data;
  };
};

export const tenacityWrapper = <Args extends any[], ReturnType>(
  fn: Fn<Args, ReturnType>,
  retries: number,
  delay: number = 0,
): Fn<Args, ReturnType> => {
  return async (...args: Args): Promise<ReturnType> => {
    let lastError: Error | null = null;

    for (let attempt = 0; attempt < retries; attempt++) {
      try {
        return await fn(...args);
      } catch (error) {
        lastError = error;
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
    // If all retries failed, throw the last error
    throw lastError;
  };
};
