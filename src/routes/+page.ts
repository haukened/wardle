import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// disable SSR because this will be compiled as a static page
export const ssr = false;

// load a word by fetching one from this nifty vercel app
export const load = (async ({}) => {
    const response = await fetch('https://random-word-api.vercel.app/api?words=1&length=5');
    if (response.status != 200) {
        throw error(500, {message: "unable to fetch new word"})
    }
    const word = await response.json() as string[];
    if (word.length === 0) {
        throw error(500, {message: "server returned empty response"})
    }
    return {word: word[0]}
}) satisfies PageServerLoad;