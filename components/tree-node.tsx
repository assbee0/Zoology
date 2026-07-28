import { Heading } from "./heading";
import { IconGrid } from "./icon-grid";
import { formatScientificName } from "@/lib/utils";
import { formatSubgenusScientificName } from "@/lib/utils";
import { Lang } from "@/types/lang";
import { TaxonomyNode } from "@/types/zoology";

function getName(node: TaxonomyNode, lang: Lang) {
    if (lang === "cn") return node["name-cn"] ?? node.name;
    if (lang === "jp") return node["name-jp"] ?? node.name;
    return node["name"];
}

function renderName(node: TaxonomyNode, lang: Lang) {
    const formattedName = formatScientificName(node.name);
    const displayName = getName(node, lang);

    return (
        <>
            {displayName}{" "}
            {(node.type === "genus" || node.type === "species") ? (
                <i>{formattedName}</i>
            ) : node.type === "subgenus" ? (
                <i>{formatSubgenusScientificName(node.name)}</i>
            ) : (
                formattedName
            )}
        </>
    );
}

export function TreeNode({
    node,
    depth = 0,
    className,
    lang,
}: {
    node: TaxonomyNode;
    className: string;
    depth?: number;
    lang: Lang;
}) {
    const isClass = !!node.class;
    const iconChildren = node["icon-children"];

    if (isClass) {
        return (
            <div className="node-block">
                {node.children?.map((child) => (
                    <TreeNode
                        key={child.name}
                        node={child}
                        className={className}
                        depth={depth + 1}
                        lang={lang}
                    />
                ))}
            </div>
        );
    }

    return (
        <div className="node-block">
            {node.name && (
                <Heading depth={depth}>
                    {renderName(node, lang)}
                </Heading>
            )}

            {iconChildren && iconChildren.length > 0 && (
                <IconGrid
                    items={iconChildren}
                    className={className}
                    lang={lang}
                />
            )}

            {node.children?.map((child) => (
                <TreeNode
                    key={child.name}
                    node={child}
                    className={className}
                    depth={depth + 1}
                    lang={lang}
                />
            ))}
        </div>
    );
}
