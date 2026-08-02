import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset, Slug } from '@sanity/types';
import groq from 'groq';

export const eventsQuery = groq`*[_type == "event" && dateFrom >= now()]  | order(dateFrom asc)`;
export const pastEventsQuery = groq`*[_type == "event" && dateTo < now()]  | order(dateFrom desc) [0..3]`;

export const blogPostsQuery = groq`*[_type == "blogPost"] | order(date desc)`;
export const recentBlogPostsQuery = groq`*[_type == "blogPost"] | order(date desc) [0..1]`;
export const blogPostQuery = (id: string) => {
  return groq`*[_type == "blogPost" && _id == "${id}"]`;
};

export const aboutQuery = groq`*[_type == "about"][0]`;

export const kontaktVorstand = groq`*[_type == "kontaktVorstand"] | order(fullname asc)`;

export const kontaktLeiter = groq`
  *[_type == "kontaktLeiter"] | order(count(riegen) asc, count(additionalriegen) desc, fullname asc){
    ...,
    "riegen": riegen[]->{
      _id,
      name,
      age,
      body,
      image
    },
    "additionalriegen": additionalriegen[]->{
      _id,
      name,
      age,
      body,
      image
    } 
  }`;

export const bolleQuery = groq`*[_type == 'bolle'] | order(date desc)`;
export const bolleProgrammQuery = groq`*[_type == 'bolleProgramm']`;
export const bolleFaqQuery = groq`*[_type == 'bolleFaq']`;

export const downloadsQuery = groq`*[_type == 'download' && date > now()]`;

export const galerieJugi = groq`*[_type == "galerieJugi"] | order(date desc)`;
export const galerieAktive = groq`*[_type == "galerieAktive"] | order(date desc)`;

export const riegenQuery = groq`
  *[_type == "riege"]{
    ...,
   "kontaktLeiter": *[_type == 'kontaktLeiter' && references(^._id)] | order(fullname asc){
	...
  },
 training,
  }
`;

export const riegeQuery = (id: string) => {
  return groq`
    *[_type == 'riege' && _id == "${id}"]{
      ...,
      "hauptleiter": *[_type == 'kontaktLeiter' && ^._id in riegen[]._ref] | order(fullname asc){
        fullname,
        mail,
      },
      "hilfsleiter": *[_type == 'kontaktLeiter' && ^._id in additionalriegen[]._ref] | order(fullname asc){
        fullname,
        mail,
      },
      training
    }
  `;
};

export interface Person {
  _type: 'kontaktVorstand' | 'kontaktLeiter';
  _createdAt: string;
  fullname: string;
}

export interface Gallery {
  _type: 'galerieJugi' | 'galerieAktive';
  _createdAt: string;
  title: string;
}

export interface Anlass {
  _type: 'event';
  _createdAt: string;
  title: string;
  dateFrom: Date;
  dateTo: Date;
  mainImage: ImageAsset;
  description: string;
}

export interface BlogPost {
  _type: 'blog';
  _createdAt: string;
  title: string;
  date: Date;
  mainImage: ImageAsset;
  body: string;
}

export interface Riege {
  _type: 'riege';
  _createdAt: string;
  kontaktLeiter: Person[];
}
