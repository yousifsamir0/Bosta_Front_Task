import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//Todo: integrate types 
export const getFormattedDate = (date: string, lng = 'en') => {
  return new Date(date).toLocaleDateString(lng, { weekday: "short", year: "numeric", month: "short", day: "numeric" });
}
export const getDateNoYear = (date: string, lng = 'en') => {
  return new Date(date).toLocaleDateString(lng, { weekday: "long", month: "short", day: "numeric" });
}
export const getTime = (date: string, lng = 'en') => {
  return new Date(date).toLocaleString(lng, { hour: 'numeric', minute: 'numeric', hour12: true })
}

export function groupByDate(events: any, lng = 'en') {
  const grouped = events.reduce((acc: any, event: any) => {
    // Extract the date part (YYYY-MM-DD) from the timestamp
    const _date = event.timestamp.split('T')[0];
    const date = new Date(_date).toLocaleDateString(lng, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    // Find if the date is already in the accumulator
    let dateGroup = acc.find((group: any) => group.date === date);

    // If not, create a new group for the date
    if (!dateGroup) {
      dateGroup = { date, events: [] };
      acc.push(dateGroup);
    }

    // Add the event to the corresponding date's events
    dateGroup.events.push(event);

    return acc;
  }, []);

  // Sort the groups by date (latest first)
  grouped.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Sort the events within each group by timestamp (latest first)
  grouped.forEach((group: any) => {
    group.events.sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  });

  return grouped;
}
