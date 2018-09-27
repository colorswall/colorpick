export const hex2rgb = (hex, alpha) => {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    return { r: r, g: g, b: b };
};


export const rgb2hex = (r, g, b) => {
    var rgb = b | (g << 8) | (r << 16);
    return '#' + (0x1000000 + rgb).toString(16).slice(1)
}
export const isDarkColor = ({ r, g, b }) => ((r * 299) + (g * 587) + (b * 114)) / 1000 < 120;

export const getRandomArbitrary = (min, max) => parseInt(Math.random() * (max - min) + min, 10)

export const generateColors = (count) => {
    let colors = [];
    for (let i = 0; i < count; i++) {
        let r = getRandomArbitrary(0, 255);
        let g = getRandomArbitrary(0, 255);
        let b = getRandomArbitrary(0, 255);
        let color = rgb2hex(r, g, b);
        colors.push(color);
    }
    return colors;
}

export const colors2url = (colors) => colors.map(hex => hex.substring(1)).join()