interface DailyData {
  time: string[];
  weathercode: number[];
  apparent_temperature_max: number[];
  apparent_temperature_min: number[];
  precipitation_probability_max: number[];
  et0_fao_evapotranspiration: number[];
}

export function transformDataToArrayOfObjects<T extends keyof DailyData>(
  data: DailyData
): Array<Record<T, DailyData[T]>> {
  const keys = Object.keys(data) as T[];
  const length = data[keys[0]].length;

  const arrayOfObjects = Array.from({ length }, (_, index) =>
    keys.reduce((obj, key) => {
      obj[key] = data[key][index];
      return obj;
    }, {} as Record<T, DailyData[T]>)
  );

  return arrayOfObjects;
}