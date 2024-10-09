export default function getListStudents() {
  const names = ['Guillaume', 'James', 'Serena'];
  const cities = ['San Francisco', 'Columbia', 'San Francisco'];
  const id = [1, 2, 5];
  const arr = [];
  let i;

  for (i = 0; i < 3; i += 1) {
    arr.push({
      firstName: names[i],
      id: id[i],
      location: cities[i],
    });
  }

  return (arr);
}
