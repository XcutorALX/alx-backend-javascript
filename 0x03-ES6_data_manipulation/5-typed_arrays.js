export default function createInt8TypedArray(length, position, value) {
  const buffer = new DataView(
    new ArrayBuffer(length),
    0,
    length,
  );

  if (position >= length) {
    throw new Error('position out of range');
  }

  buffer.setUint8(position, value);
  return (buffer);
}
