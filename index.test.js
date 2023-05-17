const  { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

  it('Handles times at Midday - 11:45', () => {
    const timeInWords = convertTimeToWords('11:45');
    expect(timeInWords).toBe('quarter to midday');
  });

  it('Handles times at 29 minutes - 2:29', () => {
    const timeInWords = convertTimeToWords('2:29');
    expect(timeInWords).toBe('twenty-nine past two');
  });

  it('Handles times at 1 minutes to - 2:59', () => {
    const timeInWords = convertTimeToWords('2:59');
    expect(timeInWords).toBe('one to three');
  });

  it('Handles times at midday to - 12:00', () => {
    const timeInWords = convertTimeToWords('12:00');
    expect(timeInWords).toBe('midday');
  });

  it('Handles times at O clock - 2:00', () => {
    const timeInWords = convertTimeToWords('2:00');
    expect(timeInWords).toBe("two o'clock");
  });

  it('Handles times at 30 past - 2:30', () => {
    const timeInWords = convertTimeToWords('2:30');
    expect(timeInWords).toBe("half past two");
  });

  it('Handles times at 15 to midnight - 23:45', () => {
    const timeInWords = convertTimeToWords('23:45');
    expect(timeInWords).toBe("quarter to midnight");
  });
});
