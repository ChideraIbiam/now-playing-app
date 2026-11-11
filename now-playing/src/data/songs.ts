export interface Song {
  id: number
  trackNumber: string
  title: string
  artist: string
  genre: string
  duration: string
  spotifyId: string
}

export const songs: Song[] = [
  { id: 1, trackNumber: '01', title: 'No One', artist: 'Alicia Keys', genre: 'R&B', duration: '4:14', spotifyId: '6IwKcFdiRQZOWeYNhUiWIv' },
  { id: 2, trackNumber: '02', title: 'Photograph', artist: 'Ed Sheeran', genre: 'Folk Pop', duration: '4:19', spotifyId: '6BuJPRLdYRb3QK3pJlOwxt' },
  { id: 3, trackNumber: '03', title: 'In My Mind', artist: 'Alok & John Legend', genre: 'Electronic', duration: '2:56', spotifyId: '7uoxJCPiqiEa3fvOQQQbyn' },
  { id: 4, trackNumber: '04', title: 'Be The One', artist: 'Dua Lipa', genre: 'Synth-Pop', duration: '3:25', spotifyId: '7FCfMXYTIiQ9b4hDYs4Iol' },
  { id: 5, trackNumber: '05', title: 'Alone', artist: 'Burna Boy', genre: 'Afrobeats', duration: '3:42', spotifyId: '0vLj7fwt3HM36zo7HEghCL' },
  { id: 6, trackNumber: '06', title: 'Big Girls Cry', artist: 'Sia', genre: 'Pop', duration: '3:31', spotifyId: '1yuNe8PsG7nKZj5skkYvdm' },
]