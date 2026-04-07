import { getHeadingTag } from "@/lib/data";

export function Heading({
    depth,
    text,
}: {
    depth: number;
    text: string;
}) {
    const Tag = getHeadingTag(depth);

    return (
        <Tag className={`heading level-${depth}`}>
            {text}
        </Tag>
    );
}