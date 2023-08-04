module.exports = function toReadable(number) {
    const words = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number < 0 || number >= 1000) {
        return "Number out of range";
    }

    if (number < 20) {
        return words[number];
    }

    if (number < 100) {
        const tens_digit = Math.floor(number / 10);
        const ones_digit = number % 10;
        return (
            words[20 + tens_digit] +
            (ones_digit > 0 ? " " + words[ones_digit] : "")
        );
    }

    const hundreds_digit = Math.floor(number / 100);
    const remaining_number = number % 100;
    return (
        words[hundreds_digit] +
        " hundred" +
        (remaining_number > 0 ? " " + toReadable(remaining_number) : "")
    );
};
