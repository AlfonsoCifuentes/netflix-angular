# 🎬 Netflix Angular Clone

> **Una réplica de la interfaz de Netflix construida con Angular, demostrando habilidades avanzadas de frontend y diseño de interfaces complejas**

[![Angular](https://img.shields.io/badge/Angular-Latest-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Advanced-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![SCSS](https://img.shields.io/badge/SCSS-Modern-CF649A?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![Netflix](https://img.shields.io/badge/Netflix-Inspired-E50914?style=for-the-badge&logo=netflix&logoColor=white)](https://netflix.com/)

## 🌟 Características Principales

### 🎯 **UI/UX Netflix-like**
- **🎨 Interfaz Idéntica**: Recreación pixel-perfect de Netflix
- **📱 Responsive Design**: Adaptación perfecta a todos los dispositivos
- **⚡ Smooth Animations**: Transiciones fluidas y engaging
- **🎥 Video Preview**: Hover effects con preview de contenido
- **🔍 Search Experience**: Búsqueda avanzada con autocomplete

### 🛠️ **Stack Tecnológico**

#### **Frontend Architecture**
```typescript
// Componente principal con lazy loading
@Component({
  selector: 'app-netflix',
  template: `
    <app-header></app-header>
    <app-hero-banner [featuredMovie]="featuredContent"></app-hero-banner>
    <app-movie-rows [categories]="movieCategories"></app-movie-rows>
    <app-footer></app-footer>
  `
})
export class NetflixComponent implements OnInit {
  featuredContent: Movie;
  movieCategories: Category[];
}
```

## 🏗️ Arquitectura de Componentes

### 📁 **Estructura Netflix-like**
```
src/app/
├── core/
│   ├── header/            # Navegación principal
│   ├── hero-banner/       # Banner principal
│   └── footer/            # Footer global
├── features/
│   ├── browse/            # Exploración de contenido
│   ├── search/            # Búsqueda avanzada
│   ├── player/            # Reproductor de video
│   └── profile/           # Gestión de perfiles
├── shared/
│   ├── movie-card/        # Cards de películas
│   ├── carousel/          # Carrusel horizontal
│   └── modal/             # Modal de detalles
└── services/
    ├── content.service.ts # Gestión de contenido
    └── auth.service.ts    # Autenticación
```

### 🎬 **Componentes Clave**

#### **Hero Banner**
```typescript
@Component({
  selector: 'app-hero-banner',
  template: `
    <div class="hero-banner" [style.background-image]="backgroundImage">
      <div class="hero-content">
        <h1 class="hero-title">{{ movie.title }}</h1>
        <p class="hero-description">{{ movie.description }}</p>
        <div class="hero-buttons">
          <button class="btn-play" (click)="playMovie()">
            <i class="icon-play"></i> Reproducir
          </button>
          <button class="btn-info" (click)="showInfo()">
            <i class="icon-info"></i> Más información
          </button>
        </div>
      </div>
    </div>
  `
})
export class HeroBannerComponent {
  @Input() movie: Movie;
}
```

#### **Movie Carousel**
```typescript
@Component({
  selector: 'app-movie-carousel',
  template: `
    <div class="carousel-container">
      <h2 class="carousel-title">{{ category.title }}</h2>
      <div class="carousel-wrapper">
        <button class="nav-btn prev" (click)="scrollLeft()">❮</button>
        <div class="carousel-content" #carouselContainer>
          <app-movie-card 
            *ngFor="let movie of category.movies" 
            [movie]="movie"
            (movieSelected)="onMovieSelected($event)">
          </app-movie-card>
        </div>
        <button class="nav-btn next" (click)="scrollRight()">❯</button>
      </div>
    </div>
  `
})
export class MovieCarouselComponent {
  @Input() category: Category;
  @Output() movieSelected = new EventEmitter<Movie>();
}
```

## 🎯 Funcionalidades Netflix

### 🏠 **Página Principal**
- **🎬 Hero Banner**: Película destacada con trailer
- **📚 Categorías**: "Tendencias", "Continuar viendo", "Mi lista"
- **🔄 Carruseles**: Navegación horizontal infinita
- **⚡ Lazy Loading**: Carga optimizada de contenido

### 🔍 **Búsqueda Avanzada**
- **🔎 Search Bar**: Búsqueda en tiempo real
- **🏷️ Filtros**: Por género, año, rating
- **📱 Autocomplete**: Sugerencias inteligentes
- **🎯 Resultados**: Grid responsive de resultados

### 🎥 **Reproductor de Video**
- **▶️ Video Player**: Reproductor HTML5 customizado
- **⏸️ Controles**: Play, pausa, volumen, fullscreen
- **📱 Mobile Optimized**: Controles touch-friendly
- **🔊 Audio**: Gestión de audio y subtítulos

### 👤 **Gestión de Perfiles**
- **👥 Multiple Profiles**: Soporte para varios usuarios
- **🎨 Avatar Selection**: Selección de avatares
- **📝 Profile Management**: Edición de perfiles
- **🔒 Parental Controls**: Controles parentales

## 🎨 Diseño y Estética

### 🌈 **Netflix Color Palette**
```scss
// Variables de color Netflix
$netflix-red: #E50914;
$netflix-black: #141414;
$netflix-dark-gray: #221F1F;
$netflix-light-gray: #757575;
$netflix-white: #FFFFFF;

// Gradientes característicos
.hero-gradient {
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(20,20,20,0.5) 50%,
    rgba(20,20,20,1) 100%
  );
}
```

### ✨ **Animations y Effects**
```scss
// Hover effects en movie cards
.movie-card {
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(0,0,0,0.8);
  }
}

// Smooth scroll en carouseles
.carousel-content {
  scroll-behavior: smooth;
  overflow-x: auto;
  display: flex;
  gap: 10px;
}
```

## 🚀 Instalación y Setup

### **Quick Start**
```bash
# Clonar repositorio
git clone https://github.com/AlfonsoCifuentes/netflix-angular.git

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env

# Ejecutar en desarrollo
ng serve

# Build para producción
ng build --prod
```

### **Environment Configuration**
```typescript
// environment.ts
export const environment = {
  production: false,
  tmdbApiKey: 'your-tmdb-api-key',
  tmdbBaseUrl: 'https://api.themoviedb.org/3',
  imageBaseUrl: 'https://image.tmdb.org/t/p/w500'
};
```

## 🌐 Integración de APIs

### **TMDB API Integration**
```typescript
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl = environment.tmdbBaseUrl;
  private apiKey = environment.tmdbApiKey;

  getTrending(): Observable<Movie[]> {
    return this.http.get<any>(`${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`)
      .pipe(
        map(response => response.results),
        catchError(this.handleError)
      );
  }

  searchMovies(query: string): Observable<Movie[]> {
    return this.http.get<any>(`${this.baseUrl}/search/multi?api_key=${this.apiKey}&query=${query}`)
      .pipe(
        map(response => response.results),
        debounceTime(300),
        distinctUntilChanged()
      );
  }
}
```

## 📱 Responsive Design

### **Mobile First Approach**
```scss
// Breakpoints Netflix-style
.movie-carousel {
  .carousel-content {
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
    }
    
    @media (min-width: 769px) and (max-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
    }
    
    @media (min-width: 1201px) {
      grid-template-columns: repeat(6, 1fr);
      gap: 16px;
    }
  }
}
```

## 🏆 Logros Técnicos

### ✅ **Netflix Features Implementadas**
- ✅ **Hero Banner**: Con video background
- ✅ **Infinite Carousels**: Navegación horizontal
- ✅ **Search Engine**: Búsqueda en tiempo real
- ✅ **Video Player**: Reproductor customizado
- ✅ **Profile System**: Múltiples usuarios
- ✅ **Responsive Design**: Mobile, tablet, desktop

### 🎯 **Objetivos Alcanzados**
- **🎨 Pixel Perfect**: Réplica exacta de Netflix UI
- **⚡ Performance**: Carga rápida y smooth
- **📱 Mobile Experience**: UX optimizada para móviles
- **🔍 Search UX**: Experiencia de búsqueda fluida

## 🔗 Enlaces y Demo

- **🐙 Repositorio**: [GitHub](https://github.com/AlfonsoCifuentes/netflix-angular)
- **🌐 Demo Live**: [Netflix Clone Demo](#)
- **📱 Mobile Demo**: [Mobile Version](#)
- **🎬 TMDB API**: [The Movie Database](https://www.themoviedb.org/)

---

<div align="center">

**🎬 Netflix UI Clone - Angular Masterpiece 🎬**

*Demonstrating advanced frontend skills with pixel-perfect Netflix recreation*

</div>
