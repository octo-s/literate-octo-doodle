
type TMods = Record<string, boolean | string>
export function classNames (cls: string, mods: TMods, additional: string[]): string {

    return [
        cls,
        ...additional,
        Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className, value]) => className)
    ].join(' ')

}

// classNames('remove-btn', {hovered: true, selectable: true, red: false}, ['pdg'])
//  => 'remove-btn hovered selectable pdg'