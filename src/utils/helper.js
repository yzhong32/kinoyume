function extractDayAndTime(content) {
  // Assuming the first item is 'open', start from the second item
  const dayTimePairs = content.slice(1).map((item) => {
    // Find the index where the time starts (first occurrence of a number)
    const timeStartIndex = item.search(/\d/);
    // Extract the day and time based on the index
    const day = item.substring(0, timeStartIndex).trim();
    const time = item.substring(timeStartIndex).trim();
    return {day, time};
  });

  // Separate the days and times
  const days = dayTimePairs.map((pair) => pair.day);
  const times = dayTimePairs.map((pair) => pair.time);

  return {days, times};
}


export default extractDayAndTime;
