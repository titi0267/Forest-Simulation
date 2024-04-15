/*
^(?!--|\/\*)(.+?)(?:;|$)
*/

const parseSqlFiles = () => {};

const regroupMatches = (input: string) => {
  const regex: RegExp = /^(?!--|\/\*)(.+?)(?:;|$)/gms;
  const matches: string[] = [];
  let match: RegExpExecArray | null;
  let currentStatement: string = "";

  while ((match = regex.exec(input)) !== null) {
    const statement: string = match[1];
    if (statement.endsWith(";")) {
      matches.push(currentStatement + statement);
      currentStatement = "";
    } else {
      currentStatement += statement + " ";
    }
  }

  console.log(matches);
};
