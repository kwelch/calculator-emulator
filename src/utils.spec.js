import {parseDisplay} from './utils';

describe('parseDisplay', () => {
  it('should split simple values', () => {
    let input = '1+1';
    let actual = parseDisplay(input);
    expect(actual).toEqual([1, '+', 1]);
  });

  it('should handle numbers of more than one character', () => {
    let input = '123/1';
    let actual = parseDisplay(input);
    expect(actual).toEqual([123, '/', 1]);
  });


  it('should handle multiple operators', () => {
    let input = '123-1*100';
    let actual = parseDisplay(input);
    expect(actual).toEqual([123, '-', 1, '*', 100]);
  });

  it('should handle multiple operators', () => {
    let input = '123-*100';
    let actual = parseDisplay(input);
    expect(actual).toEqual([123, '*', 100]);
  });
});