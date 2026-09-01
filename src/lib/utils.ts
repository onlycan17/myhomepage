export function formatDate(input: string): string {
  const date = new Date(input);

  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

export function formatIsoDate(input: string): string {
  return input.replace(/T.*/, "");
}

export function joinClasses(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}
