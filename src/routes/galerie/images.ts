import axios from 'axios';

let flickrPhotoJsonAktive  = [];
let flickrPhotoJsonJugi = [];
export const flickrPhotoLinkJugi: { imgUrl: string; id: number }[] = []
export const flickrPhotoLinkAktive : { imgUrl: string; id: number }[] = []

export function getPhotosAktive() {
    axios
        .get(
            'https://api.flickr.com/services/rest?method=flickr.groups.pools.getPhotos&api_key=ebf8b5a8addf16333494732b8eef8e19&group_id=14819815@N20&format=json&nojsoncallback=true'
        )
        .then((response) => {
            flickrPhotoJsonAktive = response.data.photos.photo;
            for (var i = 0; i < flickrPhotoJsonAktive.length; i++) {
                flickrPhotoLinkAktive[i] = {imgUrl:
                    "https://live.staticflickr.com/" +
                    flickrPhotoJsonAktive[i].server +
                    "/" +
                    flickrPhotoJsonAktive[i].id +
                    "_" +
                    flickrPhotoJsonAktive[i].secret +
                    "_b.jpg",
              id: i }
            }
        });
}

export function getPhotosJugi() {
    axios
        .get(
            'https://api.flickr.com/services/rest?method=flickr.groups.pools.getPhotos&api_key=ebf8b5a8addf16333494732b8eef8e19&group_id=14849220@N23&format=json&nojsoncallback=true'
        )
        .then((response) => {
            flickrPhotoJsonJugi = response.data.photos.photo;
            for (var i = 0; i < flickrPhotoJsonJugi.length; i++) {
                flickrPhotoLinkJugi[i] ={imgUrl:
                    'https://live.staticflickr.com/' +
                    flickrPhotoJsonJugi[i].server +
                    '/' +
                    flickrPhotoJsonJugi[i].id +
                    '_' +
                    flickrPhotoJsonJugi[i].secret +
                    '_b.jpg',
                    id: i }
            }
        });
}