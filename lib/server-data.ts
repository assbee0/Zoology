import fs from "fs";
import path from "path";
import { TaxonomyData } from "@/types/zoology";


export function getClassData(className: string): TaxonomyData {
    const filePath = path.join(process.cwd(), "data", `${className}.json`);
    const json = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(json) as TaxonomyData;
}

export function getOrderData(order: string): TaxonomyData {
    const filePath = path.join(process.cwd(), "data/orders", `${order}.json`);
    const json = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(json) as TaxonomyData;
}

export function getAllClasses() {
    return ["aves", "mammalia"];
}
