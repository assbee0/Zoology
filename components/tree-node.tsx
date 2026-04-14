import { Heading } from "./heading";
import { IconGrid } from "./icon-grid";

function renderName(node: any) {
    return (
        <>
            {node["name-jp"]}{" "}
            {(node.type === "genus" || node.type === "species") ? (
                <i>{node.name}</i>
            ) : (
                node.name
            )}
        </>
    );
}

export function TreeNode({
    node,
    depth = 0,
    className
}: {
    node: any;
    className: string;
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
                        className={className}
                        depth={depth + 1}
                    />
                ))}
            </div>
        );
    }

    const hasIconChildren = !!node["icon-children"];

    if (hasIconChildren) {
        return (
            <div className="node-block">
                {node.name && (
                    <Heading depth={depth}>
                        {renderName(node)}
                    </Heading>
                )}
                <IconGrid items={node["icon-children"]} className={className} />
            </div>
        );
    } else {
        return (
            <div className="node-block">
                {node.name && (
                    <Heading depth={depth}>
                        {renderName(node)}
                    </Heading>
                )}

                {node.children?.map((child: any) => (
                    <TreeNode
                        key={child.name}
                        node={child}
                        className={className}
                        depth={depth + 1}
                    />
                ))}
            </div>
        );
    }
}