// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Don't Look Back In Anger", artist: "Oasis", genre: "Rock"},
    { title: "Supersonic", artist: "Oasis", genre: "Rock"},
    { title: "Time", artist: "Pink Floyd", genre: "Rock"},
    { title: "Parklife", artist: "Blur", genre: "Rock"},
    { title: "While My Guitar Gently Weeps", artist: "The Beatles", genre: "Rock"},
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "Rock",
    "Rocket": "R&B",
    "Groot": "Pop"
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function const playlistsContainer = document.getElementById("playlists");to create playlists for each Guardian
    // Your code here
    const playlistsContainer = document.getElementById("playlists");

    Object.keys(guardians).map(guardian => {
        const preffedGenre = guardians[guardian];
        const playlist = songs.filter(song => song.genre === preffedGenre);

        //CREATE PLAYLIST DIV
        const playlistDiv = document.createElement('div');
        playlistDiv.classList.add('playlist');

        // ADD GUARDIAN'S NAME AS THE PLAYLIST TITLE
        const guardianTitle = document.createElement('h2');
        guardianTitle.textContent = `${Starlord}'s Playlist`;
        playlist.appendChild(guardianTitle);
    })
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);





