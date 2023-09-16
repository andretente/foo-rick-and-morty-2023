export function delayedFetch(
  url: string,
  timeout: number = 3000
): Promise<Response> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(url)
        .then((response) => resolve(response))
        .catch((error) => reject(error))
    }, timeout)
  })
}
