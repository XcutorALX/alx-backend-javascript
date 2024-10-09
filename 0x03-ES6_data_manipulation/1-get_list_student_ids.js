export default function getListStudentIds(objs) {
  let result = [];

  if (objs.constructor === Array) {
    result = objs.map((element) => element.id);
  }

  return (result);
}
