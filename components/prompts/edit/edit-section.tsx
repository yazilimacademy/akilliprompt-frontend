import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader } from '@/components/ui/card';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {Label} from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { IPrompt } from '@/types';
import { CopyIcon, Send } from 'lucide-react';
import { useState } from 'react';
  
export default function PromptEditSection({ prompt }: { prompt: IPrompt }) {
  const { toast } = useToast();
  const [model, setModel] = useState<string>('chatgpt');
  // Add state for tags
  const [businessDescription, setBusinessDescription] = useState<string>('');
  const [challenges, setChallenges] = useState<string>('');

  // eslint-disable-next-line no-unused-vars
  const [newPrompt, setNewPrompt] = useState<string>(prompt.content);
  const handleModelChange = (value: string) => {
    setModel(value);
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(newPrompt);
    toast({
      title: 'Copied to clipboard',
      description: 'Prompt copied to clipboard',
    });
  };

  const handleOpenPrompt = () => {
    switch (model) {
    case 'chatgpt':
      window.open('https://chatgpt.com', '_blank');
        
    case 'gemini':
      window.open('https://gemini.google.com', '_blank');

    case 'claude':
      window.open('https://claude.ai', '_blank');

    case 'groq':
      window.open('https://groq.com', '_blank');
    default:
      break;
    }
  };

  return (
    <Card className="w-96 h-full">
      <CardHeader>
        <h3 className="text-xl font-semibold mb-4">Use this Prompt</h3>
        <div className="space-y-4">
          <div className="flex flex-col gap-2 w-full">
            <h4 className="font-semibold mb-2">Edit Tags</h4>
            <div className="flex flex-col gap-2 items-start space-x-2">
              <Label htmlFor="business">
                <Badge className="bg-red-500 text-white">
                                    #Describe your business
                </Badge>
              </Label>
              <Textarea
                cols={1}
                rows={1}
                id="business"
                className="flex-grow"
                placeholder="Type something"
                value={businessDescription}
                onChange={(e) => setBusinessDescription(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-2 items-start space-x-2">
              <Label htmlFor="challenges">
                <Badge className="bg-blue-500 text-white">
                  #Challenges you&apos;re facing
                </Badge>
              </Label>
              <Textarea
                cols={1}
                rows={1}
                id="challenges"
                className="flex-grow"
                placeholder="Type something"
                value={challenges}
                onChange={(e) => setChallenges(e.target.value)}
              />
            </div>
          </div>
          <Dialog>
            <DialogTrigger className="w-full">
              <Button className="w-full">
                <Send className="mr-2 h-4 w-4"/> Send Prompt
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Share link</DialogTitle>
                <DialogDescription>
                                    Anyone who has this link will be able to view this.
                </DialogDescription>
              </DialogHeader>
              <div className="flex w-full items-center space-x-2">
                <div className="grid flex-1 gap-2">
                  <Select onValueChange={handleModelChange}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select a model"/>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Chat GPT</SelectLabel>
                        <SelectItem
                          onClick={() => handleModelChange('chatgpt')}
                          className="cursor-pointer"
                          value="chatgpt"
                        >
                                                    Chat GPT
                        </SelectItem>
                        <SelectItem
                          onClick={() => handleModelChange('gemini')}
                          className="cursor-pointer"
                          value="gemini"
                        >
                                                    Gemini
                        </SelectItem>
                        <SelectItem
                          onClick={() => handleModelChange('claude')}
                          className="cursor-pointer"
                          value="claude"
                        >
                                                    Claude
                        </SelectItem>
                        <SelectItem
                          onClick={() => handleModelChange('groq')}
                          className="cursor-pointer"
                          value="groq"
                        >
                                                    Groq
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  type="submit"
                  size="default"
                  className="px-3 w-full"
                  onClick={handleCopyPrompt}
                >
                  <span className="flex flex-row gap-2 items-center">
                    Copy Prompt
                    <CopyIcon className="h-4 w-4"/>
                  </span>
                </Button>
              </div>
              <DialogFooter className="sm:justify-start">
                <Button
                  type="button"
                  variant="default"
                  onClick={handleOpenPrompt}
                >
                                    Open
                </Button>
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                                        Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <div className="text-center text-sm text-gray-500">
                        Powered by Oricin
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
