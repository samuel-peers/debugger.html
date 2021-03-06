import assert from "./assert";

export function reportException(who, exception) {
  const msg = `${who} threw an exception: `;
  console.error(msg, exception);
}

export function executeSoon(fn) {
  setTimeout(fn, 0);
}

export default assert;
