import { getClassData } from "@/lib/data";
import { TreeNode } from "@/components/tree-node";

export default async function ClassPage({
    params,
}: {
    params: Promise<{ className: string }>
}) {
    const { className } = await params;
    const data = getClassData(className);
    return (
        <div className={`body-${className}`}>
            <div className={`head-background-base head-background-${className}`}>
                <h1 className="head-title">{data["name-jp"] + " " + data.name}</h1>
            </div>
            <TreeNode node={data} />
        </div>
    );
}