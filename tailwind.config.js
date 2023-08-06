/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "sidebar-bg-color": "var(--sidebar-bg-color)",
        "navbar-bg-color": "var(--navbar-bg-color)",
        "sorter-bg": "var(--sorter-bg)",
        "pagination-search-product-bg": "var(--pagination-search-product-bg)",
        "transaction-bg": "var(--transaction-bg)",
        "primary-cart-bg": "var(--primary-cart-bg)",
        "secondary-cart-bg": "var(--secondary-cart-bg)",
        "tcp-bg": "var(--tcp-bg)",
        "pic-bg": "var(--pic-bg)",
        // "pi-bg": "var(--pi-bg)",
        "product-view-bg": "var(--product-view-bg)",
        "ho-bg": "var(--ho-bg)",
        "icon-bg": "var(--icon-bg)",
        "rf-c": "var(--rf-c)",
        "bf-c": "var(--bf-c)",
        "btn-bg": "var(--btn-bg)",
        "tis-c": "var(--tis-c)",
        "primary-border-c": "var(--primary-border-c)",
        "sb-bg": "var(--sb-bg)",
        "aft-c": "var(--aft-c)",
        "aft-bg": "var(--aft-bg)",
        "dft-c": "var(--dft-c)",
        afi: "var(--afi)",
        dfi: "var(--dfi)",
        "bc-c": "var(--bc-c)",
        "select-bg": "var(--select-bg)",
        "hs-bg": "var(--hs-bg)",
        as: "var(--as)",
      },
      fontFamily: {
        lato: ["var(--font-lato)"],
      },
      screens: {
        "3xl": { min: "1536px" },
        // => @media (min-width: 1536px)

        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px)

        xl: { max: "1279px" },
        // => @media (max-width: 1279px)

        lg: { max: "1023px" },
        // => @media (max-width: 1023px)

        md: { max: "767px" },
        // => @media (max-width: 767px)

        sm: { max: "639px" },
        // => @media (max-width: 639px)

        xs: { max: "475px" },
        // => @media (max-width: 475px)
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    // Don't want to include any themes and disable all colors
    themes: [],
  },
};
