type Mods = Record<string, string | boolean>

// const obj:Mods={  // пример записи
//     'test':true
// }

// хелпер для конкатинации классов. mods - доп классы по условию
export function classNames(
    cls: string, //основной класс
    mods?: Mods, // модификаторы классов hovered,disabled и тд
    additional?: string[]): string { // доп классы
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods).filter(([_, value]) => Boolean(value)).map(([className, _]) => className)
    ].join(' ')
}