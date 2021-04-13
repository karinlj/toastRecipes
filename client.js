import { createClient } from "contentful";

export const client = createClient({
  // space: "ur7uztfvjy80",
  // accessToken: "ePZ4EPcSGI77J7H8oYP-8fHjBPPdNP1gd7qeOHyrqOs",
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});
