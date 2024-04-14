const fetchImg = async (animalName) => {
    const basePath = "./assets/imgs/";
    const extensions = ['.jpg', '.png'];

    for (let ext of extensions) {
        const url = `${basePath}${animalName}${ext}`;

        try {
            const response = await fetch(url);
            if (response.ok) {
                return url;
            }
        }

        catch (error) {
            console.error('Error fetching image:', error);
        }
    }

    return `${basePath}placeholder.png`;
};

export default fetchImg;