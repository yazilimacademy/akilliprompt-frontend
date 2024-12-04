import { Card, CardHeader } from '@/components/ui/card';
import { IPrompt } from '@/types';

export default function PromptReviewSection({ prompt }: { prompt: IPrompt }) {
  return (
    <Card className="w-96 h-full">
      <CardHeader>
        <h3 className="text-xl font-semibold">Reviews</h3>
        <span className="text-gray-500">{prompt.comments} ratings</span>
      </CardHeader>
    </Card>
  );
}
