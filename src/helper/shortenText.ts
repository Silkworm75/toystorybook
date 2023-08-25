export default function shortenText(text: string, maxLength: number): string {
  if (!text) return "No description";

  return text.length <= maxLength
    ? text
    : `${text.slice(0, text.lastIndexOf(" ", maxLength - 4))}...`;
}
