// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://Farai-Donhwe.github.io",
  base: "/Azure-PerthExtendedZone",
  trailingSlash: "always",
  integrations: [
    starlight({
      title: "Perth Extended Zone",
      description:
        "Technical guidance for deploying workloads to the Azure Perth Extended Zone — serving Western Australia with low-latency, data-resident cloud services.",
      favicon: "/images/favicon.svg",
      logo: {
        src: "./src/assets/images/logo.svg",
      },
      editLink: {
        baseUrl:
          "https://github.com/Farai-Donhwe/Azure-PerthExtendedZone/edit/main/site/",
      },
      lastUpdated: true,
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Farai-Donhwe/Azure-PerthExtendedZone",
        },
      ],
      expressiveCode: {
        styleOverrides: { borderRadius: "0.5rem" },
      },
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "Overview",
          collapsed: true,
          autogenerate: { directory: "overview" },
        },
        {
          label: "Design Considerations",
          collapsed: true,
          autogenerate: { directory: "design-considerations" },
        },
        {
          label: "Use Cases",
          collapsed: true,
          autogenerate: { directory: "use-cases" },
        },
        {
          label: "Appendix",
          collapsed: true,
          autogenerate: { directory: "appendix" },
        },
      ],
    }),
  ],
});
