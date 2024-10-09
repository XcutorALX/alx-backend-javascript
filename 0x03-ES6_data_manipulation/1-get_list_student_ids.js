export default function getListStudentIds(objs) {
  let result = [];

  if (Array.isArray(objs)) {
    result = objs.map((element) => element.id);
  }

  return (result);
}
