import { cacheWrapper, tenacityWrapper } from './wrappers';

const userAgents: { name: string; ua: string }[] = [
  // this must always be the first element here!
  {
    name: 'woff',
    ua: 'Mozilla/5.0 (Windows NT 10.0; Trident/7.0; rv:11.0) like Gecko',
  },
  // from: https://github.com/fontsource/google-font-metadata/blob/main/data/user-agents.json
  {
    name: 'woff2',
    ua: 'Mozilla/5.0 (Windows NT 6.3; rv:39.0) Gecko/20100101 Firefox/44.0"',
  },
];

const fetchFunc = <Args extends (typeof userAgents)[number]>(
  entry: Args,
  url: string,
) =>
  fetch(url, { headers: { 'User-Agent': entry.ua } })
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.text();
    })
    .then((t) => t.replace(/  +/g, '').replace(/\t+/g, '').replace(/\n+/g, ''));

const cachedFetch = cacheWrapper(tenacityWrapper(fetchFunc, 3, 500));

export async function downloadFontCSS(url: string): Promise<string> {
  const fontDownloads: string[] = [];
  for await (const agent of userAgents) {
    const fontData = await cachedFetch(agent, url);
    fontDownloads.push(fontData);
  }
  return fontDownloads.join(' ');
}
