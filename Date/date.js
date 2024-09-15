function calculateMonthsAndDaysBetween(startDate, endDate) {
  // Ensure the input dates are Date objects
  if (!(startDate instanceof Date) || !(endDate instanceof Date)) {
    throw new Error("Invalid date input");
  }

  // Extract the year, month, and day from both dates
  const startYear = startDate.getFullYear();
  const startMonth = startDate.getMonth(); // 0-based index for month
  const startDay = startDate.getDate();

  const endYear = endDate.getFullYear();
  const endMonth = endDate.getMonth(); // 0-based index for month
  const endDay = endDate.getDate();

  // Calculate the difference in years and months
  let yearDifference = endYear - startYear;
  let monthDifference = endMonth - startMonth;

  if (monthDifference < 0) {
    yearDifference--;
    monthDifference += 12;
  }

  // Total months between the dates
  let totalMonths = yearDifference * 12 + monthDifference;

  // Calculate the remaining days
  let remainingDays = endDay - startDay;

  // If the remaining days are negative, adjust the months and days
  if (remainingDays < 0) {
    totalMonths--;
    // Add days of the previous month
    const previousMonthDate = new Date(endDate);
    previousMonthDate.setMonth(previousMonthDate.getMonth() - 1);
    const daysInPreviousMonth = new Date(
      previousMonthDate.getFullYear(),
      previousMonthDate.getMonth() + 1,
      0
    ).getDate();
    remainingDays += daysInPreviousMonth;
  }

  return {
    totalMonths,
    remainingDays,
  };
}

//High School
const startDate10 = new Date("2009-07-15");
const endDate10 = new Date("2010-07-01");
const highSchool = calculateMonthsAndDaysBetween(startDate10, endDate10);
console.log(
  `High School from ${startDate10} to ${endDate10} months: ${highSchool.totalMonths} and days: ${highSchool.remainingDays}`
);
//Intermediate
const startDate12 = new Date("2011-07-15");
const endDate12 = new Date("2012-07-01");
const intermediate = calculateMonthsAndDaysBetween(startDate12, endDate12);
console.log(
  `High School from ${startDate12} to ${endDate12} months: ${intermediate.totalMonths} and days: ${intermediate.remainingDays}`
);
//Gap
const gapStartDate = new Date("2012-07-01");
const gapEndDate = new Date("2014-06-01");

const gapResult = calculateMonthsAndDaysBetween(gapStartDate, gapEndDate);
console.log(
  `Gap from ${gapStartDate} to ${gapEndDate} months: ${gapResult.totalMonths} and days: ${gapResult.remainingDays}`
);
//Graduation
const collegeStartDate = new Date("2014-06-01");
const collegeEndDate = new Date("2018-06-01");

const collegeResult = calculateMonthsAndDaysBetween(
  collegeStartDate,
  collegeEndDate
);

console.log(
  `College from ${collegeStartDate} to ${collegeEndDate} months: ${collegeResult.totalMonths} and days: ${collegeResult.remainingDays}`
);
