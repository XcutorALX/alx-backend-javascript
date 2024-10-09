export default function updateUniqueItems(map) {
  if (map.constructor !== Map) {
    throw new Error('Cannot process');
  }

  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });

  return (map);
}
