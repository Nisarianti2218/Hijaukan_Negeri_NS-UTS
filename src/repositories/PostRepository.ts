export interface Post {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  category?: string;
  authorId: string;
  authorName: string;
  createdAt: string;
  imageBase64?: string;
}

export class PostRepository {
  private static readonly POSTS_KEY = 'posts';

  static getAllPosts(): Post[] {
    if (typeof window === 'undefined') return [];
    const posts = localStorage.getItem(this.POSTS_KEY);
    return posts ? JSON.parse(posts) : [];
  }

  static savePost(post: Post): void {
    const posts = this.getAllPosts();
    localStorage.setItem(this.POSTS_KEY, JSON.stringify([...posts, post]));
  }

  static getPostById(id: string): Post | undefined {
    const posts = this.getAllPosts();
    return posts.find(post => post.id === id);
  }

  static getPostsByAuthor(authorId: string): Post[] {
    const posts = this.getAllPosts();
    return posts.filter(post => post.authorId === authorId);
  }

  static deletePost(id: string): void {
    const posts = this.getAllPosts();
    const filteredPosts = posts.filter(post => post.id !== id);
    localStorage.setItem(this.POSTS_KEY, JSON.stringify(filteredPosts));
  }

  static updatePost(id: string, updatedPost: Partial<Post>): void {
    const posts = this.getAllPosts();
    const postIndex = posts.findIndex(post => post.id === id);
    if (postIndex !== -1) {
      posts[postIndex] = { ...posts[postIndex], ...updatedPost };
      localStorage.setItem(this.POSTS_KEY, JSON.stringify(posts));
    }
  }
}
