export type IPrompt = {
  id: string;
  title: string;
  description: string;
  author: string;
  avatar: string;
  category: string;
  views: number;
  comments: number;
  saves: number;
  tags: string[];
  personalizationOptions: string[];
  content: string;
};
