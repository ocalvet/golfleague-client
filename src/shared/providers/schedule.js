export const getWeekSchedule = (weekNumber) => {
  return Promise.resolve({
    side: 'Back',
    week: weekNumber,
    date: new Date(),
    matches: [{
      id: 1,
      hole: 10,
      team1: 1,
      team2: 12
    },{
      id: 2,
      hole: 11,
      team1: 11,
      team2: 2
    },{
      id: 3,
      hole: 12,
      team1: 9,
      team2: 4
    },{
      id: 4,
      hole: 13,
      team1: 6,
      team2: 7
    },{
      id: 5,
      hole: 14,
      team1: 5,
      team2: 8
    },{
      id: 6,
      hole: 15,
      team1: 3,
      team2: 10
    },{
      id: 7,
      hole: 16,
      team1: 18,
      team2: 13
    },{
      id: 8,
      hole: 17,
      team1: 17,
      team2: 14
    },{
      id: 9,
      hole: 18,
      team1: 16,
      team2: 15
    }]
  });
}