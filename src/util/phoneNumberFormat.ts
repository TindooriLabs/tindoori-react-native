export const formatPhoneNumber = (input: string) => {
  // Remove all non-digit characters
  const digits = input.replace(/\D/g, "");

  // Apply formatting based on the length of the digits
  let formattedNumber = "";
  if (digits.length >= 4 && digits.length < 7) {
    formattedNumber = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  } else if (digits.length >= 7) {
    formattedNumber = `(${digits.slice(0, 3)}) ${digits.slice(
      3,
      6
    )}-${digits.slice(6, 10)}`;
  } else {
    formattedNumber = digits;
  }

  return formattedNumber;
};
