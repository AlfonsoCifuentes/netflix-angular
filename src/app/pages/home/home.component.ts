import { Component, OnInit } from '@angular/core';
import { FilmsComponent } from './components/films/films.component';
import { IFilms, INetflixModel } from './models/netflix-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
public netflixModel: INetflixModel;
public terrorMovies: IFilms;
public accionMovies: IFilms;
public animeMovies: IFilms;
public comediaMovies: IFilms;
public dramaMovies: IFilms;
public scifiMovies: IFilms;
  constructor() {
    this.netflixModel = {
      nav: {

        logo: {
          src:"../../../assets/images/LOGO/2560px-Netflix_2015_logo.svg.png", 
          alt:"Logo Netflix"
        }
      },

      hero: {
        title: "El Club de la Lucha",
        portada: {
          src:"../../../assets/images/Portada/clubluchaportada.jpg",
          alt:"Fotograma de El Club de La Lucha"
        }
      },

      top10: {
        title: "Las 10 más populares en España hoy",
        imgGallery: [
          {
            src:"../../../assets/images/Top10/1-papel.webp", 
            alt: "La Casa de Papel"
          },

          {
            src:"../../../assets/images/Top10/2-reina.webp",
            alt:"La Reina del Flow"
          },

          {
            src:"../../../assets/images/Top10/3-titanes.webp",
            alt:"Titanes"
          },

          {
            src:"../../../assets/images/Top10/4-lostinspace.webp",
            alt:"Perdidos en el Espacio"
          },

          {
            src:"../../../assets/images/Top10/5-dondecaben.webp",
            alt:"Donde caben 2 caben 3"
          },

          {
            src:"../../../assets/images/Top10/6-aquinohay.webp",
            alt:"Aquí no no hay quien viva"
          },

          {
            src:"../../../assets/images/Top10/7-blacklist.webp",
            alt:"The Blacklist"
          },

          {
            src:"../../../assets/images/Top10/8-ricos.webp",
            alt:"Ricos y Mimados"
          },

          {
            src:"../../../assets/images/Top10/9-poder.webp",
            alt:"El Podel del Perro"
          },

          {
            src:"../../../assets/images/Top10/10-gooddoctor.webp",
            alt:"The Good Doctor"
          }
        ]
      },

      films: {
        title:"Películas de Hollywood",
        imgGallery:  [
          {
            src:"../../../assets/images/Accion/equalizer2.webp", 
            alt: "The Equalizer 2"
          },

          {
            src:"../../../assets/images/Sci-fi/12monos.webp",
            alt:"12 Monos"
          },

          {
            src:"../../../assets/images/Terror/life.webp",
            alt:"Life"
          },

          {
            src:"../../../assets/images/Sci-fi/transformers.webp",
            alt:"Transformers"
          },

          {
            src:"../../../assets/images/Drama/1917.webp",
            alt:"1917"
          },

          {
            src:"../../../assets/images/Accion/heat.webp",
            alt:"Heat"
          },

          {
            src:"../../../assets/images/Drama/salvaralsoldado.webp",
            alt:"Salvar al Soldado Ryan"
          },

          {
            src:"../../../assets/images/Comedia/cazafantasmas.webp",
            alt:"Los Cazafantasmas"
          },

          {
            src:"../../../assets/images/Comedia/erasehollywood.webp",
            alt:"Erase una vez en Hollywood"
          },

          {
            src:"../../../assets/images/Accion/johnwick2.webp",
            alt:"John Wick 2"
          }
        ]
      },

      footer: {
        icons: [
            {
              src:"../../../assets/images/Icons/facebook.png",
              alt:"Facebook"
            },

            {
              src:"../../../assets/images/Icons/instagram.png",
              alt:"Instagram"
            },

            {
              src:"../../../assets/images/Icons/twitter.png",
              alt:"Twitter"
            },

            {
              src:"../../../assets/images/Icons/youtube.png",
              alt:"YouTube"
            }
        ]

  

      }



    },

    this.terrorMovies = {
      title: "Terror",
      imgGallery:  [
        {
          src:"../../../assets/images/Terror/apostol.jpg", 
          alt: "El Apostol"
        },

        {
          src:"../../../assets/images/Terror/calleterror.jpg",
          alt:"La Calle del Terror"
        },

        {
          src:"../../../assets/images/Terror/reflejos.webp",
          alt:"Reflejos"
        },

        {
          src:"../../../assets/images/Terror/infiernoagua.webp",
          alt:"Infierno bajo el agua"
        },

        {
          src:"../../../assets/images/Terror/insidious2.webp",
          alt:"Insidious parte 2"
        },

        {
          src:"../../../assets/images/Terror/malasana.webp",
          alt:"Malasaña 32"
        },

        {
          src:"../../../assets/images/Terror/multiple.webp",
          alt:"Múltiple"
        },

        {
          src:"../../../assets/images/Terror/life.webp",
          alt:"Life"
        }
      ]
    },

    this.accionMovies = {
      title: "Acción",
      imgGallery:  [
        {
          src:"../../../assets/images/Accion/ejercitomuertos.jpg", 
          alt: "El Ejército de los Muertos"
        },

        {
          src:"../../../assets/images/Accion/elprotector.webp",
          alt:"El protector"
        },

        {
          src:"../../../assets/images/Accion/equalizer2.webp",
          alt:"The Equalizer 2"
        },

        {
          src:"../../../assets/images/Accion/heat.webp",
          alt:"Heat"
        },

        {
          src:"../../../assets/images/Accion/jackreacher.webp",
          alt:"Jack Reacher"
        },

        {
          src:"../../../assets/images/Accion/johnwick2.webp",
          alt:"John Wick 2"
        },

        {
          src:"../../../assets/images/Accion/killbill2.webp",
          alt:"Kill Bill Vol.2"
        },

        {
          src:"../../../assets/images/Accion/misionimposiblenacion.webp",
          alt:"Misión Imposible:Nación Secreta"
        },

        {
          src:"../../../assets/images/Accion/renacido.webp",
          alt:"El Renacido"
        },

        {
          src:"../../../assets/images/Accion/terminator2.webp",
          alt:"Terminator 2"
        },

        {
          src:"../../../assets/images/Accion/worldwarz.webp",
          alt:"Guerra Mundial Z"
        }
      ]
    },

    this.animeMovies = {
      title: "Anime",
      imgGallery:  [
        {
          src:"../../../assets/images/Anime/ajin.jpg", 
          alt: "Ajin: Semihumano"
        },

        {
          src:"../../../assets/images/Anime/castilloambulante.webp",
          alt:"El Castillo Ambulante"
        },

        {
          src:"../../../assets/images/Anime/chihiro.webp",
          alt:"El viaje de Chihiro"
        },

        {
          src:"../../../assets/images/Anime/evangelion.webp",
          alt:"Neon-Genesis: Evangelion"
        },

        {
          src:"../../../assets/images/Anime/gitsarise.webp",
          alt:"Ghost in the Shell: Arise"
        },

        {
          src:"../../../assets/images/Terror/malasana.webp",
          alt:"Malasaña 32"
        },

        {
          src:"../../../assets/images/Anime/gundam.webp",
          alt:"Gundam"
        },

        {
          src:"../../../assets/images/Anime/laputa.webp",
          alt:"El Castillo en el Cielo"
        },

        {
          src:"../../../assets/images/Anime/mononoke.webp",
          alt:"La Princesa Mononoke"
        },

        {
          src:"../../../assets/images/Anime/ninokuni.jpg",
          alt:"Ni No Kuni"
        },

        {
          src:"../../../assets/images/Anime/perfectblue.webp",
          alt:"Perfect Blue"
        },

        {
          src:"../../../assets/images/Anime/porcorosso.webp",
          alt:"Porco Rosso"
        }
      ]
    },

    this.comediaMovies = {
      title: "Comedia",
      imgGallery:  [
        {
          src:"../../../assets/images/Comedia/casi300.webp", 
          alt: "Casi 300"
        },

        {
          src:"../../../assets/images/Comedia/cazafantasmas.webp",
          alt:"Cazafantasmas"
        },

        {
          src:"../../../assets/images/Comedia/dictador.webp",
          alt:"El Dictador"
        },

        {
          src:"../../../assets/images/Comedia/erasehollywood.webp",
          alt:"Erase Una Vez en Hollywood"
        },

        {
          src:"../../../assets/images/Comedia/family guy.webp",
          alt:"Padre de Familia"
        },

        {
          src:"../../../assets/images/Comedia/juerga.webp",
          alt:"Juerga Hasta el Fin"
        },

        {
          src:"../../../assets/images/Comedia/laterminal.webp",
          alt:"La Terminal"
        },

        {
          src:"../../../assets/images/Comedia/padresella.webp",
          alt:"Los Padres de Ella"
        },

        {
          src:"../../../assets/images/Comedia/regresofuturo.webp",
          alt:"Regreso al Futuro"
        },

        {
          src:"../../../assets/images/Comedia/rickandmorty.webp",
          alt:"Rick and Morty"
        },

        {
          src:"../../../assets/images/Comedia/scarymovie3.webp",
          alt:"Scary Movie 3"
        },

        {
          src:"../../../assets/images/Comedia/ted2.webp",
          alt:"Ted 2"
        }
      ]
    },

    this.dramaMovies = {
      title: "Drama",
      imgGallery:  [
        {
          src:"../../../assets/images/Drama/1917.webp", 
          alt: "1917"
        },

        {
          src:"../../../assets/images/Drama/arrival.webp",
          alt:"The Arrival"
        },

        {
          src:"../../../assets/images/Drama/corazones.webp",
          alt:"Corazones de Acero"
        },

        {
          src:"../../../assets/images/Drama/culpable.jpg",
          alt:"Culpable"
        },

        {
          src:"../../../assets/images/Drama/millaverde.webp",
          alt:"La Milla Verde"
        },

        {
          src:"../../../assets/images/Drama/naufrago.webp",
          alt:"Náufrago"
        },

        {
          src:"../../../assets/images/Drama/noespais.webp",
          alt:"No es país para viejos"
        },

        {
          src:"../../../assets/images/Drama/salvaralsoldado.webp",
          alt:"Salvar al Soldado Ryan"
        },

        {
          src:"../../../assets/images/Drama/scarface.webp",
          alt:"El Precio del Poder"
        },

        {
          src:"../../../assets/images/Drama/schindler.webp",
          alt:"La Lista de Schindler"
        },

        {
          src:"../../../assets/images/Drama/sombradiablo.webp",
          alt:"La Sombra del Diablo"
        },

        {
          src:"../../../assets/images/Drama/unicosuperviviente.webp",
          alt:"El Único Superviviente"
        },
      ]
    },

    this.scifiMovies = {
      title: "Ciencia-Ficción",
      imgGallery:  [
        {
          src:"../../../assets/images/Sci-fi/6dia.webp", 
          alt: "El Sexto Día"
        },

        {
          src:"../../../assets/images/Sci-fi/afterearth.webp",
          alt:"After Earth"
        },

        {
          src:"../../../assets/images/Sci-fi/startrek.webp",
          alt:"Star Trek"
        },

        {
          src:"../../../assets/images/Sci-fi/12monos.webp",
          alt:"12 Monos"
        },

        {
          src:"../../../assets/images/Sci-fi/colverparadox.jpg",
          alt:"The Cloverfield Paradox"
        },

        {
          src:"../../../assets/images/Sci-fi/core.webp",
          alt:"El Núcleo"
        },

        {
          src:"../../../assets/images/Sci-fi/deepimpact.webp",
          alt:"Deep Impact"
        },

        {
          src:"../../../assets/images/Sci-fi/gits.webp",
          alt:"Ghost in the Shell: El alma de la Máquina"
        },

        {
          src:"../../../assets/images/Sci-fi/jumper.webp",
          alt:"The Jumper"
        },

        {
          src:"../../../assets/images/Sci-fi/passengers.webp",
          alt:"Passengers"
        },

        {
          src:"../../../assets/images/Sci-fi/transformers.webp",
          alt:"Transformers"
        },

        {
          src:"../../../assets/images/Sci-fi/watchmen.webp",
          alt:"Watchmen"
        }
      ]
    }
  }

  ngOnInit(): void {
  }

}
