export function genNum(length: number): number {
  return Math.floor(Math.random() * length);
}

export function genDate(): number {
  return new Date().getTime();
}

export function genNumPhone(): string {
  return Math.random().toString().substring(2, 9);
}
