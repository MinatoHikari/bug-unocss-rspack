import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  content: {
    filesystem: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    pipeline: {
      include: [
        /\.(css|vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
      ],
      exclude: [],
    },
  },
  // shortcuts: [
  //     [
  //         'btn',
  //         'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default-modules disabled:bg-gray-600 disabled:opacity-50',
  //     ],
  //     [
  //         'icon-btn',
  //         'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600',
  //     ],
  // ],
  presets: [
    presetUno(),
    presetAttributify({
      prefix: "pp-",
    }),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      provider: "fontshare",
      fonts: {
        sans: "DM Sans",
        serif: "DM Serif Display",
        mono: "DM Mono",
      },
    }),
  ],

  transformers: [
    transformerDirectives({ enforce: "pre" }),
    transformerVariantGroup(),
  ],
});
