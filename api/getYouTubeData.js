const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const apiKey = process.env.YOUTUBE_API_KEY;
    const channelId = process.env.YOUTUBE_CHANNEL_ID;
    const maxResults = 5;

    try {
        const youtubeResponse = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`);
        const youtubeData = await youtubeResponse.json();

        if (youtubeData.items) {
            res.json({ videos: youtubeData.items });
        } else {
            res.json({ error: 'Failed to fetch videos' });
        }
    } catch (error) {
        res.json({ error: 'Error fetching YouTube videos' });
    }
};
