// ./nextjs-app/sanity/lib/queries.ts

import { groq } from "next-sanity";

const basePostQuery = `{
  _id, title, body, slug, author->{name, image, slug}, mainImage, publishedAt, categories[]->{
    title, slug
  }
}`

// Get all posts and the author name and image and slug
export const postsQuery = groq`*[_type == "post" && defined(slug.current)]${ basePostQuery }`;

  // get one author by slug and all of their posts 
  export const authorPostsQuery = groq`*[_type == "author" && slug.current == $slug][0]{
      _id, name, image, bio, slug, "posts": *[_type == "post" && references(^._id)]${ basePostQuery }
    }`;

//get all featured posts
export const featuredPostsQuery = groq`*[_type == "post" && defined(slug.current) && featured == true]${ basePostQuery }`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]${ basePostQuery }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;





  //Get all categories
export const categoriesQuery = groq`*[_type == "category"]{
    _id, title, slug, description, image
  }`;

  //Get all post from a single category via its slug and get the category title

export const categoryPostsQuery = groq`*[_type == "post" && $slug in categories[]->slug.current]${ basePostQuery }`;
