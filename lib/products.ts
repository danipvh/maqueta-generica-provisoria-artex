export type CategoryId =
  | "deportiva"
  | "trabajo"
  | "bordados"
  | "articulos"

export type Category = {
  id: CategoryId
  label: string
}

export const categories: Category[] = [
  { id: "deportiva", label: "Ropa deportiva" },
  { id: "trabajo", label: "Ropa de trabajo" },
  { id: "bordados", label: "Bordados" },
  { id: "articulos", label: "Artículos deportivos" },
]

export type Product = {
  id: string
  name: string
  description: string
  category: CategoryId
  image: string
  tag?: string
}

export const products: Product[] = [
  {
    id: "camiseta-futbol",
    name: "Camiseta de fútbol personalizada",
    description:
      "Sublimación full color con número, nombre y escudo del club. Telas técnicas transpirables.",
    category: "deportiva",
    image: "/images/prod-camiseta-futbol.png",
    tag: "Más pedido",
  },
  {
    id: "buzo-deportivo",
    name: "Buzo deportivo institucional",
    description:
      "Conjunto de chaqueta y pantalón para equipos, escuelas y clubes. Bordado o estampado incluido.",
    category: "deportiva",
    image: "/images/prod-buzo.png",
  },
  {
    id: "uniforme-padel",
    name: "Uniforme de pádel y tenis",
    description:
      "Polera y short de alto rendimiento con secado rápido. Diseño 100% personalizable.",
    category: "deportiva",
    image: "/images/prod-padel.png",
  },
  {
    id: "ropa-salida",
    name: "Ropa de salida para equipos",
    description:
      "Chaquetas de presentación con escudo bordado para lucir dentro y fuera de la cancha.",
    category: "deportiva",
    image: "/images/prod-ropa-salida.png",
  },
  {
    id: "overol-trabajo",
    name: "Overol y ropa industrial",
    description:
      "Buzos de trabajo resistentes con cintas reflectantes. Cumplen normativa de seguridad.",
    category: "trabajo",
    image: "/images/prod-overol.png",
  },
  {
    id: "delantal-docente",
    name: "Delantal docente y de servicio",
    description:
      "Delantales duraderos con bolsillos, personalizados con el nombre y logo de tu institución.",
    category: "trabajo",
    image: "/images/prod-delantal.png",
  },
  {
    id: "polera-corporativa",
    name: "Polera corporativa bordada",
    description:
      "Poleras y polos para empresas con logo bordado de alta durabilidad en el pecho.",
    category: "bordados",
    image: "/images/prod-polera-corp.png",
    tag: "Empresas",
  },
  {
    id: "set-conos",
    name: "Set de agilidad",
    description:
      "Conos y barras de entrenamiento para preparación física y escuelas deportivas.",
    category: "articulos",
    image: "/images/prod-conos.png",
  },
  {
    id: "trofeos-medallas",
    name: "Trofeos y medallas",
    description:
      "Premiación para torneos y campeonatos. Amplio catálogo de tamaños y modelos.",
    category: "articulos",
    image: "/images/prod-trofeos.png",
  },
  {
    id: "balones",
    name: "Balones e implementos",
    description:
      "Balones de fútbol, básquetbol y accesorios deportivos para clubes y colegios.",
    category: "articulos",
    image: "/images/prod-balones.png",
  },
]
