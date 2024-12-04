import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import HighlightedText from '../highlighted-text';

import { Bookmark, Eye, Link, MoreHorizontal } from 'lucide-react';

import { IPrompt } from '@/types';

export default function PromptCard({ prompt }: { prompt: IPrompt }) {
  return (
    <Card className="w-full flex flex-col">
      <CardHeader className="flex justify-between items-center">
        <div>
          <Badge variant="secondary" className="mr-2">
            Prompt
          </Badge>
          <span className="text-gray-500">{prompt.tags.join(', ')}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Link className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <h2 className="text-2xl font-bold mb-4">{prompt.title}</h2>
        <div className="flex items-center mb-4">
          <Avatar className="h-8 w-8 mr-2">
            <AvatarImage src="/placeholder-avatar.jpg" alt="Jodie Cook" />
            <AvatarFallback>JC</AvatarFallback>
          </Avatar>
          <span className="font-semibold mr-4">
            {prompt.author.split(' ')[0].charAt(0)}
            {prompt.author.split(' ')[1].charAt(0)}
          </span>
          <span className="text-gray-500 mr-4">{prompt.views} Uses</span>
          <span className="text-gray-500 mr-4">{prompt.saves} Saved</span>
          <span className="text-gray-500">Creation date: 06/27/2023</span>
        </div>
        <p className="mb-4">{prompt.description}</p>
        <div className="bg-gray-100 p-4 rounded-lg">
          <HighlightedText text={prompt.content} />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold mr-4">{prompt.views}</span>
          <span className="text-gray-500 flex flex-row gap-2 items-center">
            <Eye className="h-6 w-6" />
            Prompt Uses
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-2xl font-bold mr-4">{prompt.saves}</span>
          <span className="text-gray-500 flex flex-row gap-2 items-center">
            {' '}
            <Bookmark className="h-6 w-6" />
            Saved
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
