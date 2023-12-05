import clsMerge from "../src/clsMerge";

describe("clsMerge", () => {
  test("should merge classes", () => {
    const className = clsMerge("foo", true && "bar", "baz");
    expect(className).toBe("foo bar baz");
  });
  test("should merge classes", () => {
    const className = clsMerge(["foo", "bar"]);
    expect(className).toBe("foo bar");
  });
  test("should merge classes", () => {
    const className = clsMerge(
      ["foo"],
      ["", "bar"],
      [["baz", [["hello"], "there"]]]
    );
    expect(className).toBe("foo bar baz hello there");
  });
});
