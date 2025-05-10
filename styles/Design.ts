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
    imamges: string[];
    budget: bulletPoints[];
};

type bulletPoints = {
    title: string;
    detail: string;
};