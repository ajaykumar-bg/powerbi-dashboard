export const getRoadMapChipColor = (type) => {
  let color = 'default';
  switch (type) {
    case 'Upgrade':
      color = 'success';
      break;
    case 'Re-Platform':
      color = 'primary';
      break;
    default:
      color = 'default';
  }
  return color;
};
