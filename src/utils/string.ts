export function toPascalCase(text: string): string {
  if (!text.match('/[A-Z]/')) {
    return text
      .split('-')
      .map((item) => item.at(0)?.toUpperCase() + item.substring(1) ?? '')
      .join('');
  }

  return text;
}
