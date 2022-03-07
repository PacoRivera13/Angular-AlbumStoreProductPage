export interface albumInfo {
    id: number;
    artist: string;
    album: albumDetail;
}

export interface albumDetail {
    name: string;
    releaseDate: Date;
    coverImage: string;    
    tracks: tracks[];
}

export interface tracks {
    trackNumber: number;
    trackName: string;
    trackLength: string;
    trackPrice: number;
}