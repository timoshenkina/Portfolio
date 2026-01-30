import { groq } from "next-sanity";

export const PROJECTS_QUERY = groq`*[_type == "project"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  description,
  mainImage,
  tags
}`;

export const PROJECT_BY_SLUG_QUERY = groq`*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  description,
  mainImage,
  tags,
  publishedAt,
  body
}`;
