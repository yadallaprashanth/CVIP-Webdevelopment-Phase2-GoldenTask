document.getElementById('shortenBtn').addEventListener('click', function() {
    const longUrl = document.getElementById('urlInput').value;

    // Mockup shortening. In a real scenario, you would call your backend API.
    const shortUrl = 'http://short.url/' + btoa(longUrl).slice(0, 6);
    
    document.getElementById('result').innerHTML = `Short URL: <a href="${shortUrl}" target="_blank">${shortUrl}</a>`;
});
