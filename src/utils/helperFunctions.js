const formatDate = (dateString) => {
  const today = new Date();
  const dateOfBirth = new Date(dateString);

  const yearDiff = today.getFullYear() - dateOfBirth.getFullYear();
  const monthDiff = today.getMonth() - dateOfBirth.getMonth();

  let year = '';
  if (yearDiff > 0) {
    year = `${yearDiff} year${yearDiff > 1 ? 's' : ''}`;
  }

  let month = '';
  if (monthDiff > 0) {
    month = `${monthDiff} month${monthDiff > 1 ? 's' : ''}`;
  }

  if (yearDiff === 0 && monthDiff === 0) {
    return 'Less than a month';
  }

  if (year && month) {
    return `${year} and ${month}`;
  }

  return year || month;
};

export { formatDate };
