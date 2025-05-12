export type Design = {
    name: string;
    img: string;
    description: string;
    sqft: string;
    bed: string;
    bath: string;
    detail: DesignDetail;
};

export type DesignDetail = {
    pros: BulletPoints[];
    imamges: BulletPoints[];
    budget: BulletPoints[];
    add_cost: BulletPoints[];
};

export type BulletPoints = {
    title: string;
    detail: string;
};