import { Heading } from "./heading";
import { IconGrid } from "./icon-grid";

export function TreeNode({
    node,
    depth = 0,
}: {
    node: any;
    depth?: number;
}) {
    const isClass = !!node.class;
    if (isClass) {
        return (
            <div className="node-block">
                {node.children?.map((child: any) => (
                    <TreeNode
                        key={child.name}
                        node={child}
                        depth={depth + 1}
                    />
                ))}
            </div>
        )
    }

    const hasIconChildren = !!node["icon-children"];
    if (hasIconChildren) {
        return (
            <div className="node-block">
                {node.name && (
                    <Heading
                        depth={depth}
                        text={node["name-jp"] + " " + node.name}
                    />
                )}
                <IconGrid items={node["icon-children"]} />
            </div>
        );
    }
    else {
        // 🧠 没 icon → heading + children
        return (
            <div className="node-block">
                {node.name && (
                    <Heading
                        depth={depth}
                        text={node["name-jp"] + " " + node.name}
                    />
                )}

                {node.children?.map((child: any) => (
                    <TreeNode
                        key={child.name}
                        node={child}
                        depth={depth + 1}
                    />
                ))}
            </div>
        );
    }
}