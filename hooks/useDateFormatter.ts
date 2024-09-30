type DateParts = {
  day: string;
  date: string;
  time: string;
};

export function useSplitDate(dateString: string): DateParts {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date format");
  }

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const day = daysOfWeek[date.getUTCDay()];
  const monthName = months[date.getUTCMonth()];
  const dayOfMonth = String(date.getUTCDate()).padStart(2, "0");

  const hours = date.getUTCHours() % 12 || 12;
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  const ampm = date.getUTCHours() >= 12 ? "PM" : "AM";

  const formattedDate = `${monthName} ${dayOfMonth}`;
  const formattedTime = `${hours}:${minutes} ${ampm}`;

  return {
    day,
    date: formattedDate,
    time: formattedTime,
  };
}
