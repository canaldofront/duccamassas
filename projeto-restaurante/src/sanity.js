import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'jvt8x5jk',
  dataset: 'production',
  apiVersion: '2022-10-11',
  useCdn: false,
});

export default client;
