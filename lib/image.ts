export const IMAGE_BASE_URL =
    "https://pub-b11a1f5c52684f09b114835aeaa27cd6.r2.dev";

export type ImageSize =
    | "thumb"
    | "medium"
    | "full";

export function getImageUrl(
    imageId: string,
    size: ImageSize = "medium"
) {
    const ext =
        size === "full"
            ? "jpg"
            : "webp";

    return `${IMAGE_BASE_URL}/${size}/${imageId}.${ext}`;
}