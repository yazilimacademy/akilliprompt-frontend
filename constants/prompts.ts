import { IPrompt } from '@/types';

export const mockPrompts: IPrompt[] = [
  {
    id: '1',
    title: 'AI Business Coach',
    description: 'Turn ChatGPT into your personal AI business coach',
    author: 'Jodie Cook',
    avatar: '/placeholder.svg?height=40&width=40',
    category: 'Business',
    tags: ['Marketing', 'Business', 'Branding'],
    views: 1900,
    comments: 24,
    saves: 204,
    personalizationOptions: [
      'Describe your business',
      "Challenges you're facing",
    ],
    content: `Hi there! I'm seeking guidance as I navigate my business journey, and I'd love to engage in a conversation with you as my business coach. My business is {{Describe your business}}, and I'm facing some challenges in {{Challenges you're facing}} . I believe your expertise can help me gain clarity, develop effective strategies, and overcome obstacles. Can we engage in a back-and-forth conversation where I can share more details about my business, and you can ask questions, confront my thinking and find the root cause of some of my challenges?`,
  },
];
