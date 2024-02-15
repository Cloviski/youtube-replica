import moment from "moment";

function getPublishedTime(publishedAt: string): string {
  const now = moment();
  const publishedTime = moment(publishedAt);
  const diffDays = now.diff(publishedTime, "days");

  if (diffDays <= 0) {
    return "today";
  } else if (diffDays <= 1) {
    return `${diffDays} day ag`;
  } else if (diffDays <= 7) {
    return `${diffDays} days ag`;
  } else if (diffDays <= 30) {
    const diffWeeks = Math.floor(diffDays / 7);
    return `${diffWeeks} week${diffWeeks === 1 ? "" : "s"} ag`;
  } else if (diffDays <= 365) {
    const diffMonths = Math.floor(diffDays / 30);
    return `${diffMonths} month${diffMonths === 1 ? "" : "s"} ag`;
  } else {
    const diffYears = Math.floor(diffDays / 365);
    return `${diffYears} year${diffYears === 1 ? "" : "s"} ag`;
  }
}

export default getPublishedTime;
