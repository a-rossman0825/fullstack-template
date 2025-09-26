// utils/helpers.ts
import _ from 'lodash';

export const deepClone = <T>(obj: T): T => _.cloneDeep(obj);