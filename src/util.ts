export function twice(str: string): string {
  return str + str;
}

export type TagFunction<R> = (
  templateStrings: TemplateStringsArray,
  ...substitutions: unknown[]
) => R;
