/**
 * 一元函数
 * 输入一个值,输出一个值
 */
type CellFunction = (v: any) => any;

// len:: any => () => any
export const allaws = (v: any) => () => v;

// len:: any => number
export const len = (v: any) => v.length;

// last::[] => any
export const last = (arr: any[]) =>
  len(arr) > 0 ? arr[len(arr) - 1] : undefined;

// nth:: number => [] => any
export const nth = (n: number) => (arr: any[]) =>
  len(arr) > 0 && n > 0 ? arr[n] : undefined;

// add:: number => number => number
export const add = (a: number) => (b: number) => a + b;

// inc:: number => number
export const inc = add(1);

// sub:: number => number => number
export const sub = (a: number) => (b: number) => a - b;

// dec:: number => number
export const dec = sub(1);

// compose:: function[] => ...any => any
export function compose(...fs: CellFunction[]): any {
  if (fs.length === 0) {
    return allaws(undefined);
  }

  return function f(v:any) {
    let l = len(fs) - 1;
    while (l >= 0) {
      v = fs[l--](v);
    }
    return v;
  };
}

// pipe:: functionp[] => ...any => any
export function pipe(...fs: CellFunction[]): any{
  if (fs.length === 0) {
    return allaws(undefined);
  }

  return function f(v:any) {
    let l =  0;
    while (l < len(fs)) {
      v = fs[l++](v);
    }
    return v;
  };
}
