import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

type Comment = {
  id: number;
  author: string;
  content: string;
  avatar: string;
};

export default function PromptCommentSection() {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: 'Alice',
      content:
        'Great prompt! I used it for my startup and got valuable insights.',
      avatar: '/placeholder.svg?height=40&width=40',
    },
    {
      id: 2,
      author: 'Bob',
      content: 'This AI coach is surprisingly effective. Highly recommend!',
      avatar: '/placeholder.svg?height=40&width=40',
    },
  ]);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        author: 'You',
        content: newComment.trim(),
        avatar: '/placeholder.svg?height=40&width=40',
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-8 p-4 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full mb-2"
        />
        <Button type="submit" className='bg-black hover:bg-white hover:text-black duration-500'>Post Comment</Button>
      </form>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-4">
            <Avatar>
              <AvatarImage src={comment.avatar} alt={comment.author} />
              <AvatarFallback>{comment.author[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{comment.author}</p>
              <p className="text-gray-600">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
