import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { myTheme } from "./theme";
import CustomLogo from "./src/components/CustomLogo";
import CustomNavbar from "./src/components/CustomNavbar";
import { getDefaultDocumentNode }  from "./structure";


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: "Sanity_Website_Blog_Content_Studio",
  title: "Sanity Website Blog Content Studio",

  projectId,
  dataset,

  plugins: [
    deskTool({
      defaultDocumentNode: getDefaultDocumentNode,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: CustomLogo,
      navbar: CustomNavbar,
    },
  },
  theme: myTheme,
});


