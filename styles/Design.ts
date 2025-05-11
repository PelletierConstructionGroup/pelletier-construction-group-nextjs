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
    pros: bulletPoints[];
    imamges: bulletPoints[];
    budget: bulletPoints[];
    add_cost: bulletPoints[];
};

export type bulletPoints = {
    title: string;
    detail: string;
};