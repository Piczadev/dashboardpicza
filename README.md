Prompt y preset para unificar sitio web (Landing, Blog, Newsletter, News)
	•	Se integra en una sola página con navegación clara, manteniendo la estructura de secciones. 	•	Estética Liquid Glass (Glassmorphism) con paleta azul-violeta sobre fondo oscuro. 	•	Branding incluido: PiczaDev, avatar y logo, con interacciones sutiles.
Estructura objetivo (secciones)
	•	Landing / Inicio 	•	Hero con gradient azul-violeta, logo PiczaDev y avatar. 	•	CTA principal: Suscribirse al Newsletter o Conectar Wallet. 	•	Highlights de Web3 y beneficios. 	•	Blog 	•	Feed de artículos en tarjetas glass. 	•	Filtros por categorías y extractos. 	•	Enlace a artículo completo. 	•	Newsletter y Conexiones 	•	Formulario de suscripción tipo glass. 	•	Bloques de social connections (Discord, Twitter, GitHub, WarpCast). 	•	Artículos Destacados 	•	Carrusel o grid de posts destacados. 	•	Footer global 	•	Enlaces a documentación, seguridad, términos, privacidad.
Plantilla de prompt para diseño unificado
	•	Descripción corta (Prompt template):
 {
  title: "PiczaDev Liquid Glass - Landing + Blog + Newsletter",
  sections: ["Landing", "Blog", "Newsletter", "Destacados"],
  aesthetic: "Liquid Glass",
  palette: ["#0b1020", "#4f46e5", "#8b5cf6"],
  features: ["Wallet integration", "Newsletter signup", "Glass cards", "Gradient CTAs"],
  assets: ["Landing Liquid Glass", "Artifact Vault", "Newsletter & Connections"],
  tech: { "framework": "Next.js", "styling": "TailwindCSS", "data": "Markdown CMS" }
}
 	•	README de implementación (plantilla):
 -  Objetivo, alcance, entregables, estructura, flujo de trabajo, criterios de aceptación.
-  Repositorio: dotfiles/website-picza
-  Prácticas: lint, pruebas, revisión de código, documentación.
-  Estructura: /src/components, /src/pages, /public/assets, /docs
-  Notas técnicas: Wallet, Newsletter API, CMS (mock en desarrollo)
 Estructura de archivos sugerida
	•	/src/components 	•	Navbar.tsx 	•	Footer.tsx 	•	GlassCard.tsx 	•	GlassButton.tsx 	•	GlassForm.tsx 	•	Hero.tsx 	•	BlogFeed.tsx 	•	NewsletterPanel.tsx 	•	FeaturedCarousel.tsx 	•	/src/pages 	•	index.tsx (Landing + secciones integradas) 	•	blog/[slug].tsx 	•	newsletter.tsx 	•	destacados.tsx 	•	/public/assets 	•	logos, gradients, imágenes de Liquid Glass 	•	/docs 	•	style-guide.md 	•	architecture.md 	•	integration.md 	•	Scripts de despliegue 	•	deploy.sh (con SSR/SSG, prerendering) 	•	build-notes.md
Recomendaciones técnicas
	•	Stack: Next.js + TailwindCSS; generación estática cuando sea posible. 	•	Accesibilidad: etiquetas ARIA, navegación por teclado, contraste WCAG AA. 	•	Rendimiento: lazy loading, imágenes optimizadas, bundle splitting. 	•	SEO: meta tags, Open Graph, JSON-LD básico. 	•	Seguridad: wallet integration con buenas prácticas (no exponer claves).
Plantilla de README para @ray-code y @thinking
	•	Propósito: Unificar sitio web PiczaDev con Landing, Blog, Newsletter y News (Liquid Glass). 	•	Alcance: Landing, Blog, Newsletter/Conexiones, Artículos Destacados, Footer; Wallet. 	•	Entregables: Plantilla unificada, componentes modulares, documentación y scripts de despliegue. 	•	Estructura de archivos: /src/components, /src/pages, /public/assets, /docs 	•	Flujo de trabajo: SSR/SSG con Next.js, TailwindCSS, pipeline de assets; API de newsletter. 	•	Estilo: Glassmorphism con paleta azul-violeta; interacción suave; accesibilidad. 	•	Requisitos: SEO, rendimiento, pruebas de accesibilidad, pruebas de usabilidad. 	•	Metas: entrega en 2 sprints; revisión de código y documentación.
Notas de diseño (basado en los attachments)
	•	Mantener consistencia con Liquid Glass en todos los cards y CTAs. 	•	Integrar assets de Stitch Instructions (Landing Liquid Glass, Artifact Vault, Newsletter & Connections). 	•	Separar blog y newsletter en sus rutas/páginas, pero unificar en una experiencia de navegación fluida en la página principal.
Resumen del proyecto para @ray-code y @thinking
	•	Propósito: Construir y desplegar PiczaDev Liquid Glass – sitio único con Landing, Blog, Newsletter y News / Destacados. 	•	Alcance: Home, Blog, Newsletter, Artículos Destacados, Footer; integración de Wallet y suscripciones. 	•	Entregables: Plantilla de página, componentes modulares, guía de estilo, documentación de implementación, scripts de deployment. 	•	Estructura de repositorio sugerida: /src/components, /src/pages, /public/assets, /docs. 	•	Roadmap: 2 sprints, con commits y revisiones de diseño. 	•	Notas técnicas y decisiones: usar Next.js + Tailwind; Glassmorphism; assets de Stitch Instructions; SEO y accesibilidad incorporadas.
Notas finales (para proyecto @ray-code @thinking)
	•	Si quieres, puedo generar archivos de código inicial (Next.js + Tailwind) y un ejemplo de página index.tsx que renderice las secciones integradas. 	•	También puedo crear el template de Markdown/MDX para blog y newsletter, con componentes GlassCards y CTA basados en los recursos proporcionados.
