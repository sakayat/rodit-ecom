export const currencyFormate = (price) => {
    return price.toLocaleString("en-US",{
        style: "currency",
        currency: "USD"
    })
}