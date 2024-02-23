import moment from "moment";

export const formatViewCount = (viewCount: number): string => {
  const suffix = viewCount >= 1000000 ? "M" : viewCount >= 1000 ? "K" : "";
  return suffix
    ? `${(viewCount / (suffix === "M" ? 1000000 : 1000)).toFixed(
        0
      )}${suffix} views`
    : `${viewCount} views`;
};

export const getPublishedTime = (publishedAt: string) => {
  const now = moment();
  const publishedTime = moment(publishedAt);
  const diffDays = now.diff(publishedTime, "days");

  if (diffDays <= 0) {
    return "today";
  } else if (diffDays <= 1) {
    return diffDays === 1 ? "1 day ago" : `${diffDays} days ago`;
  } else if (diffDays <= 7) {
    return `${diffDays} days ago`;
  } else if (diffDays <= 30) {
    return `${Math.floor(diffDays / 7)} week${diffDays <= 14 ? "" : "s"} ago`;
  } else if (diffDays <= 365) {
    return `${Math.floor(diffDays / 30)} month${diffDays <= 60 ? "" : "s"} ago`;
  } else {
    return `${Math.floor(diffDays / 365)} year${
      diffDays <= 730 ? "" : "s"
    } ago`;
  }
};
