class TimeslotController {
  constructor() {
  }

  toggleTimeslot(item) {
    if (item.availability) {
      item.selected = !item.selected;
    }
  }
}

export default TimeslotController;
