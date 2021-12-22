export const getPriceQuotes = async () => {
    const headers: HeadersInit = {
        "Content-Type": "application/json",
    }

    const requestOptions: RequestInit = {
        headers
    }

    return await fetch("http://localhost:4000/api/listings-latest", requestOptions)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log('error', error));
}