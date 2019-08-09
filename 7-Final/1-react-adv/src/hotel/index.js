

export function getFood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("biryani")
        }, 4000);
    });
}