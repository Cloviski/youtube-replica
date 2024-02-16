function getTimeDifference(publishedAt: string): string {
  const difference = Date.now() - Date.parse(publishedAt);
  const intervals = [
    { value: 0, unit: "Now" },
    { value: 60 * 1000, unit: "minute" },
    { value: 60 * 60 * 1000, unit: "hour" },
    { value: 24 * 60 * 60 * 1000, unit: "day" },
    { value: 7 * 24 * 60 * 60 * 1000, unit: "week" },
    { value: 30 * 24 * 60 * 60 * 1000, unit: "month" },
    { value: 12 * 30 * 24 * 60 * 60 * 1000, unit: "year" },
  ];

  for (const interval of intervals) {
    if (difference < interval.value) {
      const amount = Math.floor(difference / interval.value);
      return `${amount} ${
        amount < 2 ? interval.unit : interval.unit + "s"
      } ago`;
    }
  }

  const years = Math.floor(difference / (12 * 30 * 24 * 60 * 60 * 1000));
  return `${years} ${years < 2 ? "year" : "years"} ago`;
}

export default getTimeDifference;