export function formatYoutubeUrls(urls = []) {
    return urls
        .map(url => {
            try {
                const parsed = new URL(url);

                // Handle youtu.be short links
                if (parsed.hostname.includes("youtu.be")) {
                    const videoId = parsed.pathname.slice(1);
                    return {
                        videoId,
                        url: `https://www.youtube.com/watch?v=${videoId}`
                    };
                }

                // Handle standard youtube.com links
                if (parsed.searchParams.has("v")) {
                    const videoId = parsed.searchParams.get("v");
                    return {
                        videoId,
                        url: `https://www.youtube.com/watch?v=${videoId}`
                    };
                }

                return null;
            } catch {
                return null;
            }
        })
        .filter(Boolean);
}

export const proteinVideoUrls = [
    "https://www.youtube.com/watch?v=mK5Zv1Gi67A",
    "https://www.youtube.com/watch?v=oCkOQUsEGEo",
    "https://www.youtube.com/watch?v=RUDi7gf-zF4",
    "https://www.youtube.com/watch?v=e2JiidC3qO4",
    "https://www.youtube.com/watch?v=YHdxBff_M6k",
    "https://www.youtube.com/watch?v=1Q6ij1qSrrw",
    "https://www.youtube.com/watch?v=AF8ykw6IKQQ",
    "https://www.youtube.com/watch?v=n9YgUY9MZjc",
    "https://www.youtube.com/watch?v=JFpx2mwBqLg",
    "https://www.youtube.com/watch?v=hsATyLoy9vU"

];