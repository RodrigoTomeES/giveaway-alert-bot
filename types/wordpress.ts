/**
 * Interface for post title, content and excerpt
 */
interface ContentObject {
  //This property is always present
  rendered: string;
  //This property is only present in some contexts
  raw?: string;
}

/**
 * Interface for describing post title
 */
export interface PostTitle extends ContentObject {}

/**
 * Interface for describing post content
 */
export interface PostContent extends ContentObject {}

/**
 * Interface for describing post content
 */
export interface PostExcerpt extends ContentObject {}

/**
 * Interface descrinbing a WordPress post
 */
export interface Post {
  title: PostTitle;
  content: PostContent;
  excerpt: PostExcerpt;
  date: string;
  id: number;
  slug: string;
  link: string;
}
