import { serve } from 'https://deno.land/std@0.50.0/http/server.ts';

const PORT = 8008;

const s = serve({ port: PORT });

console.log('Welcome to Deno  🦕');
console.log(`Server running on http://localhost:${PORT}`);

for await (const req of s) {
  req.respond({ body: 'Server ready, \nDeno is serving a Typescript file.' });
}
