import {classNames} from "shared/classNames/classNames";

describe('classNames', () => {
     test('with only first param', () => {
         expect(classNames('someClass')).toBe('someClass')
     });

    test('width additional class', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass',
            {hovered: true}, ['class1', 'class2']
        )).toBe(expected)
    });

    test('width mods', () => {
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(classNames('someClass',
            {hovered: true, scrollable: true}, ['class1', 'class2']
        )).toBe(expected)
    });

    test('width mods false', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass',
            {hovered: true, scrollable: false}, ['class1', 'class2']
        )).toBe(expected)
    });

    test('width mods undefined', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass',
            {hovered: true, scrollable: undefined}, ['class1', 'class2']
        )).toBe(expected)
    });
});