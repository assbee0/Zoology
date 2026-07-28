export function Heading({
    depth,
    children,
}: {
    depth: number;
    children: React.ReactNode;
}) {
    const className = `heading level-${depth}`;

    switch (Math.min(Math.max(depth, 0), 5)) {
        case 0:
            return <h1 className={className}>{children}</h1>;
        case 1:
            return <h2 className={className}>{children}</h2>;
        case 2:
            return <h3 className={className}>{children}</h3>;
        case 3:
            return <h4 className={className}>{children}</h4>;
        case 4:
            return <h5 className={className}>{children}</h5>;
        default:
            return <h6 className={className}>{children}</h6>;
    }
}
