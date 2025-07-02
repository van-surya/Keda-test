import type { Config } from "tailwindcss";

const config: Config = {
    mode: 'jit',
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    // theme: {
    //     extend: {
    //         screens: {
    //             '3xl': '1910px',
    //             '4xl': '2560px',
    //         },
    //         fontFamily: {
    //             nebulica: ['Nebulica', 'sans-serif'],
    //             jedira: ['Jedira Regular', 'serif'],
    //             ibm: ['IBM Plex Mono', 'monospace'],
    //         },
    //         aspectRatio: {
    //             '16/9': '16 / 9',
    //             '3/4': '3 / 4',
    //             '7/5': '7 / 5',
    //         },
    //         colors: {
    //             "transparent": "transparent",
    //             "primary": "#F9941A",
    //             'likeblack': "#191919",
    //             'smoke': "#1d1d1f",
    //             'light': "#FBF4E6",
    //             'lemone': "#ccff00",
    //         },
    //         backgroundImage: {
    //             "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
    //             "gradient-conic":
    //                 "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    //         },
    //     },
    // },
    plugins: [],
};
export default config;
