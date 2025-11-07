import { merge } from '../src/function';

describe('merge', () => {

    it('should merge three arrays with standard inputs', () => {
        const coll1 = [1, 5, 9];
        const coll2 = [2, 6, 10];
        const coll3 = [11, 8, 4];
        expect(merge(coll1, coll2, coll3)).toEqual([1, 2, 4, 5, 6, 8, 9, 10, 11]);
    });

    it('should handle collection_1 being empty', () => {
        const coll1: number[] = [];
        const coll2 = [2, 3];
        const coll3 = [5, 1];
        expect(merge(coll1, coll2, coll3)).toEqual([1, 2, 3, 5]);
    });

    it('should handle collection_1 and collection_2 being empty', () => {
        const coll1: number[] = [];
        const coll2: number[] = [];
        const coll3 = [5, 4, 3];
        expect(merge(coll1, coll2, coll3)).toEqual([3, 4, 5]);
    });

    it('should handle collection_3 being empty', () => {
        const coll1 = [1, 5];
        const coll2 = [2, 6];
        const coll3: number[] = [];
        expect(merge(coll1, coll2, coll3)).toEqual([1, 2, 5, 6]);
    });

    it('should return an empty array if all inputs are empty', () => {
        const coll1: number[] = [];
        const coll2: number[] = [];
        const coll3: number[] = [];
        expect(merge(coll1, coll2, coll3)).toEqual([]);
    });

    it('should handle duplicates across arrays', () => {
        const coll1 = [1, 5, 5];
        const coll2 = [2, 5, 10];
        const coll3 = [10, 8, 5];
        expect(merge(coll1, coll2, coll3)).toEqual([1, 2, 5, 5, 5, 5, 8, 10, 10]);
    });

    it('should handle negative numbers correctly', () => {
        const coll1 = [-5, 0, 10];
        const coll2 = [-1, 6];
        const coll3 = [8, 3, -2];
        expect(merge(coll1, coll2, coll3)).toEqual([-5, -2, -1, 0, 3, 6, 8, 10]);
    });

    it('should handle single element arrays', () => {
        const coll1 = [2];
        const coll2 = [1];
        const coll3 = [3];
        expect(merge(coll1, coll2, coll3)).toEqual([1, 2, 3]);
    });

    it('should handle a more complex merge', () => {
        const coll1 = [10, 20, 30, 40, 50];
        const coll2 = [15, 25, 35, 45, 55];
        const coll3 = [60, 48, 32, 22, 11];
        expect(merge(coll1, coll2, coll3)).toEqual([10, 11, 15, 20, 22, 25, 30, 32, 35, 40, 45, 48, 50, 55, 60]);
    });
});