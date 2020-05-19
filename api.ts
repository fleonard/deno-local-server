import { Manga } from './manga.ts';

let mangas: Array<Manga> = [
  {
    title: 'Attack on Titan',
    author: 'Hajime Isayama',
  },
  {
    title: 'Monster',
    author: 'Naoki Urasawa',
  },
  {
    title: 'Pluto',
    author: 'Naoki Urasawa',
  },
  {
    title: 'One Piece',
    author: 'Eiichiro Oda',
  },
]

export const getMangas = ({ response }: { response: any }) => {
  response.body = mangas;
}

export const getManga = ({
  params,
  response,
}: {
  params: {
    title: string
  }
  response: any
}) => {
  const dog = mangas.filter((manga) => manga.title.toLowerCase() === params.title.toLowerCase());
  if (dog.length) {
    response.status = 200;
    response.body = mangas[0];
    return;
  }

  response.status = 400;
  response.body = { msg: `Sorry, ${params.title} is not available in the library.` };
}

export const addManga = async ({
  request,
  response,
}: {
  request: any
  response: any
}) => {
  const body = await request.body();
  const { title, author }: { title: string; author: string } = body.value;
  mangas.push({
    title: title,
    author: author,
  })

  response.body = { msg: 'OK' };
  response.status = 200;
}

export const updateMangaAuthor = async ({
  params,
  request,
  response,
}: {
  params: {
    title: string
  }
  request: any
  response: any
}) => {
  const temp = mangas.filter((existingManga) => existingManga.title.toLowerCase() === params.title.toLowerCase());
  const body = await request.body();
  const { author }: { author: string } = body.value;

  if (temp.length) {
    temp[0].author = author;
    response.status = 200;
    response.body = { msg: 'OK' };
    return;
  }

  response.status = 400;
  response.body = { msg: `Sorry, ${params.title} is not available in the library.` };
}

export const updateMangaTitle = async ({
  params,
  request,
  response,
}: {
  params: {
    author: string
  }
  request: any
  response: any
}) => {
  const temp = mangas.filter((existingManga) => existingManga.author.toLowerCase() === params.author.toLowerCase());
  const body = await request.body();
  const { title }: { title: string } = body.value;

  if (temp.length) {
    temp[0].title = title;
    response.status = 200;
    response.body = { msg: 'OK' };
    return;
  }

  response.status = 400
  response.body = { msg: `Sorry, mangas from ${params.author} are not available in the library.` };
}

export const removeManga = ({
  params,
  response,
}: {
  params: {
    title: string
  }
  response: any
}) => {
  const lengthBefore = mangas.length;
  mangas = mangas.filter((manga) => manga.title.toLowerCase() !== params.title.toLowerCase());

  if (mangas.length === lengthBefore) {
    response.status = 400;
    response.body = { msg: `Sorry, ${params.title} is not available in the library.` };
    return;
  }

  response.body = { msg: 'OK' };
  response.status = 200;
}
