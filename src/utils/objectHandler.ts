export const isInstance = (o: Object, c: any) => o instanceof c;

export const getKeys = (o: Object): Array<PropertyKey> => Reflect.ownKeys(o);

export const has = (o: Object, k: PropertyKey): boolean => Reflect.has(o, k);

export const get = (o: Object, k: PropertyKey): any => {
  if (has(o, k)) {
    return Reflect.get(o, k);
  }

  throw new Error(`${k.toString()} not exist`);
};

// can clear the sdie-effect
export const set = (o: Object, k: PropertyKey, v: any): boolean =>
  Reflect.set(o, k, v);

export const del = (o: Object, k: PropertyKey): boolean =>
  Reflect.deleteProperty(o, k);

export const getValueList = (o: Object): Array<any> => {
  return getKeys(o).reduce((valueList, k) => {
    valueList.push(get(o, k));
    return valueList;
  }, [] as Array<any>);
};

export const getValueListFromTwoDimensional = (
  stuffList: Array<Array<any>>,
  key: PropertyKey
): Array<any> => {
  return stuffList.reduce((resList, curList) => {
    if (curList) {
      curList.forEach(stuff => {
        resList.push(get(stuff, key));
      });
    }

    return resList;
  }, [] as Array<any>);
};
