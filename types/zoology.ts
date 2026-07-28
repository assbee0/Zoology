export type ClassName = "aves" | "mammalia";

export type LocalizedName = {
    name: string;
    "name-cn"?: string;
    "name-jp"?: string;
};

export type IconNode = LocalizedName & {
    type?: "species" | string;
    icon: string;
    hasWild?: boolean;
};

export type TaxonomyNode = LocalizedName & {
    class?: ClassName;
    type?: string;
    children?: TaxonomyNode[];
    "icon-children"?: IconNode[];
};

export type TaxonomyData = TaxonomyNode & {
    class: ClassName;
};

export type ObservationPhoto = {
    id: string;
    location?: string;
    isWild?: boolean;
    description?: string;
};

export type SpeciesData = {
    id: string;
    class: ClassName;
    order: string;
    "name-cn"?: string;
    "name-jp"?: string;
    description?: string;
    photos: ObservationPhoto[];
};
