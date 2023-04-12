import type { IGenericObject } from '../types/IGenericObject';

export function undot(flatMap: object): object {
  const root: IGenericObject = {};
  let currentLevel = root;

  Object.entries(flatMap).forEach(([key, value]) => {
    currentLevel = root;
    const depthMap = key.split('.');
    let prop;

    while (depthMap.length - 1) {
      prop = depthMap.shift();
      console.log(prop);
      // @ts-ignore
      if (Object.prototype.hasOwnProperty.call(currentLevel, prop)) {
        // @ts-ignore
        currentLevel = currentLevel[prop];
      } else {
        // @ts-ignore
        currentLevel[prop] = {};
        // @ts-ignore
        currentLevel = currentLevel[prop];
      }
    }

    // @ts-ignore
    currentLevel[depthMap.shift()] = value;
  });

  return root;
}
