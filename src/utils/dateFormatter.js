export const dateFormatter = (date) => {
  if (date == 'undefined') {
    return '00/00/00';
  }

  const dateSplitted = date.split('-');
  const JoinedDay = dateSplitted[2].slice(0, 2);

  const getJoinedMonth = (month) => {
    switch (month) {
      case '01': {
        return 'Jan';
      }

      case '02': {
        return 'Feb';
      }

      case '03': {
        return 'Mar';
      }

      case '04': {
        return 'Apr';
      }

      case '05': {
        return 'May';
      }

      case '06': {
        return 'Jun';
      }

      case '07': {
        return 'Jul';
      }

      case '08': {
        return 'Aug';
      }

      case '09': {
        return 'Sep';
      }

      case '10': {
        return 'Oct';
      }

      case '11': {
        return 'Nov';
      }

      case '12': {
        return 'Dec';
      }

      default:
        return '00';
    }
  };

  const joinedDate = `Joined ${JoinedDay} ${getJoinedMonth(dateSplitted[1])} ${dateSplitted[0]}`;

  return joinedDate;
};
