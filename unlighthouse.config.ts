/// <reference types="unlighthouse" />

import { defineConfig } from "unlighthouse";

export default defineConfig({
  // examplebtn-basic
  site: "localhost:3000",
  scanner: {
    exclude: ["/private-zone/*"],
    // samples: 3,
    // device: "desktop",
    // throttle: true,
  },
  debug: true,
});
