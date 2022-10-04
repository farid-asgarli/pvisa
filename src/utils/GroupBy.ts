export function groupBy<T extends { [key: string]: any }, TKey extends keyof T>(
  input: Array<T>,
  key: TKey
) {
  type ReturnObject = {
    [Property in T[TKey]]: T[];
  };

  return input.reduce((acc, currentValue) => {
    let groupKey = currentValue[key];
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(currentValue);
    return acc;
  }, {} as ReturnObject);
}
