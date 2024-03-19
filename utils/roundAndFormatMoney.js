export function roundAndFormat(value) {
    const roundedData = value?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace(".", ",");

    return roundedData;
}