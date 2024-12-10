import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//Todo: integrate types 

export function groupByDate(events: any) {
  const grouped = events.reduce((acc: any, event: any) => {
    // Extract the date part (YYYY-MM-DD) from the timestamp
    const _date = event.timestamp.split('T')[0];
    const date = new Date(_date).toLocaleDateString('en', { weekday: "long", year: "numeric", month: "long", day: "numeric" });

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

  return grouped;
}