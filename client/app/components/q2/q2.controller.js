class Q2Controller {
  constructor($filter) {
    'ngInject';
    this.$filter = $filter;

    this.partyCountFilter = [1, 2, 3];
    this.timeFilter = ['11:30 AM', '11:45 AM', '12:00 PM'];

    this.sessions = [
      {
        type: 'Lunch',
        timeslots: [
          { time: '11:30 AM', venue: 'Dining Room', availability: true, selected: false },
          { time: '11:45 AM', venue: 'Dining Room', availability: true, selected: false },
          { time: '12:00 PM', venue: 'Dining Room', availability: true, selected: false },
          { time: '12:15 PM', venue: 'Dining Room', availability: true, selected: false },
          { time: '12:30 PM', venue: 'Dining Room', availability: true, selected: false },
          { time: '12:45 PM', venue: 'Dining Room', availability: false, selected: false },
          { time: '1:00 PM', venue: 'Dining Room', availability: true, selected: false },
          { time: '1:15 PM', venue: 'Dining Room', availability: true, selected: false },
        ],
      },
      {
        type: 'Dinner',
        timeslots: [
          { time: '11:30 AM', venue: 'Dining Room', availability: true, selected: false },
          { time: '11:45 AM', venue: 'Dining Room', availability: true, selected: false },
          { time: '12:00 PM', venue: 'Dining Room', availability: true, selected: false },
          { time: '12:15 PM', venue: 'Dining Room', availability: true, selected: false },
          { time: '12:30 PM', venue: 'Dining Room', availability: true, selected: false },
          { time: '12:45 PM', venue: 'Dining Room', availability: false, selected: false },
          { time: '1:00 PM', venue: 'Dining Room', availability: false, selected: false },
          { time: '1:15 PM', venue: 'Dining Room', availability: false, selected: false },
        ],
      },
    ];

    this.dateSelections = this.getDateSelections();
  }

  getDateSelections() {
    let dates = [];
    const currentDate = new Date();
    
    for(let i=1; i<10; i++) {
      let obj = {
        date: new Date(currentDate),
        disabled: Math.random() >= 0.9,
        unavailable: Math.random() >= 0.9,
      };
      
      // Select the first day
      if (i === 1) {
        obj.filled = true;
      }
      
      dates.push(obj);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  }

  getDayName(date) {
    let name = this.$filter('date')(date, 'EEE');
    const currentDate = this.$filter('date')(new Date(), 'y/m/d');

    if (this.$filter('date')(date, 'y/m/d') == currentDate) {
      name = 'Today';
    }

    return name;
  }
}

export default Q2Controller;
