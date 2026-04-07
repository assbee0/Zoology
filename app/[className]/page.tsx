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
        <div className="body-aves">
            <div className="head-background">
                <h1 className="head-title">{data["name-jp"] + " " + data.name}</h1>
            </div>
            <TreeNode node={data} />
        </div>
    );
}