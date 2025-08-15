const title = 'Lá Tábua'
const description = 'Bem vindo ao Zetsubou Blog! Postagens corriqueiras sobre algum assunto aleatório que me interessar.'

// Agora usando imagem local no projeto
const image: string = "B5.jpg"; // caminho para a imagem na pasta do projeto

// Criando elemento de imagem
const imgElement: HTMLImageElement = document.createElement('img');
imgElement.src = image;
imgElement.alt = title;
imgElement.width = 400; 
imgElement.height = 250;

// Adicionando no body
document.body.appendChild(imgElement);

const SEO = {
  title,
  canonical: "https://zetsubou-blog.vercel.app",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://Lá Tábua.vercel.app",
    siteName: "Lá Tábua",
    title,
    description,
    images: [
      {
        URL,
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: "@Ubfplank",
    site: "@site",
    cardType: "summary_large_image",
  },
};

export default SEO;