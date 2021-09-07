export function isNumber(value) {
    return !isNaN(value) && !isNaN(parseFloat(value))
}