export function capitalizeWords(text: string): string {
    const words = text.split(' ');
    return words
        .map((word) =>
            word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join(' ');
}