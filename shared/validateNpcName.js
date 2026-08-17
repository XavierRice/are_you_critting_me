const namePattern = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,40}$/;

const blockedWords = [
  "fuck",
  "shit",
  "bitch",
  "cunt",
  "nigger",
  "faggot",
  "nazi",
    "f@gg0t",
"n1gger",
"sh1t",
"tranny",
"gay",
];

function normalizeName(value) {
  return value
    .toLowerCase()
    .replace(/0/g, "o")
    .replace(/1/g, "i")
    .replace(/3/g, "e")
    .replace(/4/g, "a")
    .replace(/5/g, "s")
    .replace(/7/g, "t")
    .replace(/@/g, "a")
    .replace(/\$/g, "s")
    .replace(/!/g, "i")
    .replace(/[\s'_-]+/g, "");
}

export function validateNpcName(name) {
  const cleanedName =
    typeof name === "string"
      ? name.trim()
      : "";

  if (!namePattern.test(cleanedName)) {
    return {
      isValid: false,
      message:
        "Names must be 2–40 characters and may only contain letters, spaces, apostrophes, and hyphens.",
    };
  }

  const normalizedName = normalizeName(cleanedName);

  const containsBlockedWord =
    blockedWords.some((word) =>
      normalizedName.includes(word)
    );

  if (containsBlockedWord) {
    return {
      isValid: false,
      message:
        "The Royal Census Office has rejected this name.",
    };
  }

  return {
    isValid: true,
    message: "",
  };
}