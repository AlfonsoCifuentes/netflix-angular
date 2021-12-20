export interface INetflixModel {
  nav: INav;
  hero: IHero;
  top10: Itop10;
  films: IFilms;
  footer: IFooter;
}

export interface INav {
  logo: Iimg;
}

export interface Iimg {
  src: string;
  alt: string;
}

export interface IHero {
    title: string;
    portada: Iimg;
}

export interface Itop10 {
    title: string;
    imgGallery: Iimg[];
}

export interface IFilms {
    title: string;
    imgGallery: Iimg[];
}

export interface IFooter {
  icons: Iimg[];

}
