export interface Gear {
    productNameKor: string;
    productNameEn: string;
    modelName: string;
    brandNameKor: string;
    brandNameEn?: string;
    description: string;
    sportCategory: string;
    category1: string;
    category2?: string;
    category3?: string;
    category4?: string;
    specs?: string[];
    tags: string[];
    imgs?: string[];
}