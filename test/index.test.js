import trimNull from '../index';

describe('trimNull', () => {
  test('普通对象', () => expect(trimNull({a: null}).a).toBeUndefined());
  test('数组', () => expect(trimNull([null])[0]).toBeUndefined())
  test('字符串', () => expect(trimNull('12')).toBe('12'));
  test('null', () => expect(trimNull(null)).toBeUndefined());
  test('undefined', () => expect(trimNull()).toBeUndefined());
})
