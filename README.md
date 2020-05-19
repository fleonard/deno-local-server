# Manga REST API using Deno v1.0

[Deno](https://deno.land/) is a simple, modern and secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust.
This repository is created to showcase how to build a simple REST API using Oak running on a Deno local server.

## Installation

Using Shell (macOS, Linux):

```sh
curl -fsSL https://deno.land/x/install/install.sh | sh
```

## Development

Run the following command:

```sh
deno run --allow-env --allow-net app.ts
```

## API endpoints

The main endpoint is `/mangas`.
You can get all mangas or a specific one by title with `/mangas/:title`.
You can also remove mangas by title and update existing mangas both by title and by author.

## Nice to know

You run `deno fmt app.ts` to automatically format the file properly.
