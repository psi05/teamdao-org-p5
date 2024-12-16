import { useState, useEffect } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);
dayjs.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "%d seconds",
    m: "1 min",
    mm: "%d mins",
    h: "1 hr",
    hh: "%d hrs",
    d: "1 day",
    dd: "%d days",
    M: "1 month",
    MM: "%d months",
    y: "1 year",
    yy: "%d years",
  },
});

const TimeAgo = ({ date }: any) => {
  const [timeAgo, setTimeAgo] = useState(getRelativeTime(date));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeAgo(getRelativeTime(date));
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  function getRelativeTime(date: any) {
    const now = dayjs();
    const diffInSeconds = now.diff(date, "second");

    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds ago`;
    } else {
      return dayjs(date).fromNow();
    }
  }

  return <span>{timeAgo}</span>;
};

export default TimeAgo;
