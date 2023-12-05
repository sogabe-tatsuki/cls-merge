type StringArg = string | null | undefined;
type ArrArg = Array<StringArg | ArrArg>;
type ClsArg = Array<StringArg | ArrArg>;

export default function clsMerge(...args: ClsArg): string {
  return args
    .flat(5)
    .filter((x) => typeof x === "string" && x !== "")
    .join(" ")
    .trim();
}
