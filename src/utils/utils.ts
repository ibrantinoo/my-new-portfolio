import { experiences } from "./constants";

export const caluclateOverallExperience = () => {

    // Collect all date ranges as [from, to] pairs
    const ranges = experiences.map(exp => [
        new Date(exp.fromDate),
        new Date(exp.toDate)
    ]);

    // Sort ranges by start date
    ranges.sort((a, b) => a[0].getTime() - b[0].getTime());

    // Merge overlapping ranges
    const merged: [Date, Date][] = [];
    for (const [start, end] of ranges) {
        if (!merged.length || merged[merged.length - 1][1] < start) {
            merged.push([start, end]);
        } else {
            merged[merged.length - 1][1] = new Date(
                Math.max(merged[merged.length - 1][1].getTime(), end.getTime())
            );
        }
    }

    // Calculate total months from merged ranges
    let totalMonths = 0;
    for (const [start, end] of merged) {
        const months =
            (end.getFullYear() - start.getFullYear()) * 12 +
            (end.getMonth() - start.getMonth());
        totalMonths += months;
    }

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    return `${years} years and ${months} months`;
}