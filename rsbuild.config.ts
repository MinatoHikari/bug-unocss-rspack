import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { UnoCSSRspackPlugin } from "@unocss/webpack/rspack";

const isDev = process.env.NODE_ENV === "development";

export default defineConfig({
  plugins: [pluginVue()],
  output: {
    filename: {
      css: isDev ? "[name].css" : "[name].[contenthash:8].css",
    },
  },
  tools:{
    rspack(config,ctx) {
      ctx.prependPlugins(UnoCSSRspackPlugin());
      config.optimization ??= {};
      config.optimization.realContentHash = true;
    }
  }
});
