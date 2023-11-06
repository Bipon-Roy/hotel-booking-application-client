/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#e63946",
                secondary: "#9e2a2b",
                mainBg: "#f8f9fa",
                textMain: "#000814",
            },
        },
    },
    plugins: [require("daisyui")],
};
