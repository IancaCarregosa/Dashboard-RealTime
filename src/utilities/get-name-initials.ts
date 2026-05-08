export const getNameInitials = (name: string, count = 2) => {
  const words = name
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  const initials = words
    .map((word) => {
      const match = word.match(/\p{L}/u);
      return match ? match[0] : "";
    })
    .join("");

  return initials.slice(0, count).toUpperCase();
};

