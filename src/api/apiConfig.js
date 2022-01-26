const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '3f9323e7b4b34ee8c2bf4bc19beeaa4c',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;