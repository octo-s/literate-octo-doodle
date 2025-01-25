
type TMods = Record<string, boolean | string>
export function classNames (cls: string, mods: TMods = {}, additional: string[] = []): string {

    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className, value]) => className)
    ].join(' ').trim()

}

// classNames('remove-btn', {hovered: true, selectable: true, red: false}, ['pdg'])
//  => 'remove-btn hovered selectable pdg'