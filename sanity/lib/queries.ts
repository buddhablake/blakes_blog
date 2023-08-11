// ./nextjs-app/sanity/lib/queries.ts

import { groq } from "next-sanity";

// Get all posts and the author name and image and slug
export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
    _id, title, slug, author->{name, image, slug}, mainImage, publishedAt
  }`;

// export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
//     _id, title, slug, author->{name, image, slug}, mainImage, publishedAt
//   }`;

//get all featured posts
export const featuredPostsQuery = groq`*[_type == "post" && defined(slug.current) && featured == true]{
    _id, title, slug, author->{name, image}, mainImage, publishedAt
  }`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    title, mainImage, body, author->{name, image}, mainImage, publishedAt
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

// get one author by slug and all of their posts 
export const authorPostsQuery = groq`*[_type == "author" && slug.current == $slug][0]{
    _id, name, image, bio, slug, "posts": *[_type == "post" && references(^._id)]{
      _id, title, slug, author->{name, image}, mainImage, publishedAt
    }
  }`;




  //Get all categories
export const categoriesQuery = groq`*[_type == "category"]{
    _id, title, slug, description, image
  }`;

  //Get all post from a single category via its slug and get the category title

export const categoryPostsQuery = groq`*[_type == "post" && $slug in categories[]->slug.current]{
    _id, title, slug, author->{name, image}, mainImage, publishedAt, categories[]->{
      title, slug
    } 
  }`;
