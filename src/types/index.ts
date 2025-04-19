export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  behanceLink?: string;
}

export interface SocialLink {
  id: number;
  platform: string;
  url: string;
  icon: string;
}

export interface SocialContent {
  id: number;
  platform: 'youtube' | 'instagram';
  title: string;
  description: string;
  views: number;
  likes: number;
  thumbnailUrl: string;
  contentUrl: string;
}