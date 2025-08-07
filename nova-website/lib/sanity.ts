// lib/sanity.ts
import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "wkexqpkp", // Replace this
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: false,
});
