'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { EyeIcon, MessageSquareIcon, BookmarkIcon } from 'lucide-react';

export default function CreatePromptPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [promptText, setPromptText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log({ title, description, category, promptText });
    // Reset form or redirect user after successful submission
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Create a New Prompt</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value.toUpperCase())}
              placeholder="Enter a catchy title for your prompt"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Briefly describe what your prompt does"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Business">Business</SelectItem>
                <SelectItem value="Writing">Writing</SelectItem>
                <SelectItem value="Programming">Programming</SelectItem>
                <SelectItem value="Marketing">Marketing</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="promptText">Prompt Template</Label>
            <Textarea
              id="promptText"
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              placeholder="Enter your prompt template here"
              required
              className="min-h-[200px]"
            />
          </div>

          <Button type="submit" className="w-full">
            Create Prompt
          </Button>
        </form>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Preview</h2>
          <Card>
            <CardHeader>
              <CardTitle>{title || 'Your Prompt Title'}</CardTitle>
              {category && <Badge className='w-fit'>{category}</Badge>}
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                {description || 'Your prompt description will appear here'}
              </p>
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage
                    src="/placeholder.svg?height=40&width=40"
                    alt="Your Name"
                  />
                  <AvatarFallback>YN</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">Your Name</span>
              </div>
            </CardContent>
            <div className="px-6 py-4 bg-gray-50 flex justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <EyeIcon size={16} />
                <span>0</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageSquareIcon size={16} />
                <span>0</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookmarkIcon size={16} />
                <span>0</span>
              </div>
            </div>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prompt Text Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm whitespace-pre-wrap">
                {promptText || 'Your prompt text will appear here'}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
