export default function shortenText(text: string, maxLength: number): string {
  if (!text) return "No description"
  if (text.length <= maxLength) {
    return text;
  } else {
    const lastSpaceIndex = text.lastIndexOf(" ", maxLength - 4); 
    return `${text.slice(0, lastSpaceIndex)}...`;
  }
}
