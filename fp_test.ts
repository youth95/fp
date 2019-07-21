import { runTests, test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { allaws, len, last, compose, inc, pipe } from "./fp.ts";

const assertEqualsTests = (v: any[]) =>
  v.forEach(vv => assertEquals(vv[0], vv[1]));

const testAssertEquals = (name: string, v: any[]) =>
  test({ name, fn: () => assertEqualsTests(v) });

testAssertEquals("allaws", [
  ["", allaws("")()],
  [null, allaws(null)()],
  [undefined, allaws(undefined)()],
  [true, allaws(true)()],
  // [() => 1,allaws(() => 1)()],
  [/m/g, allaws(/m/g)()]
]);

testAssertEquals("len", [
  [0, len([])],
  [1, len([0])],
  [0, len({ length: 0 })],
  [1, len({ length: 1 })]
]);

testAssertEquals("last", [[1, last([0, 1])], [undefined, last([])]]);

testAssertEquals("compose",[
  [3,compose(inc,inc,inc)(0)],
  [3,pipe(inc,inc,inc)(0)],
]);

runTests();
