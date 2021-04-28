export function generateRandomModuleId () {
    const arr = new Uint8Array(4);

    crypto.getRandomValues(arr);

    return Array.from(arr, (dec) => dec.toString(16).padStart(2, '0')).join('');
}
