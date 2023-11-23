export interface Pokemon {
    id: number;
    num: string;
    name: string;
    img: string;
    type: Type[];
    abilities: Ability[];
    stats: Stat[];
}

export interface PokemonListItem {
    name: string;
    url: string;
}

export interface PokemonList {
    count: number,
    next: string,
    previous: string,
    results: PokemonListItem[]
}

export interface Ability{
    ability: {
        name: string;
        url: string;
    }
    isHidden: boolean;
    solot: number;
}

export interface Stat{
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    }
}

export interface Type{
    slot: number;
    type: {
        name: string;
        url: string;
    }
}