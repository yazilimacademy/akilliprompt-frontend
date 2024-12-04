"use client";
import PromptCommentSection from "@/components/prompts/edit/comments-section";
import PromptEditSection from "@/components/prompts/edit/edit-section";
import PromptCard from "@/components/prompts/edit/prompt-card";
import PromptReviewSection from "@/components/prompts/edit/review-section";
import { mockPrompts } from "@/constants/prompts";
import { useParams } from "next/navigation";

export default function PromptEditPage() {
  const params = useParams();
  const prompt = mockPrompts.find((p) => p.id === params.id)!;

  return (
    <div className='bg-gray-100 min-h-screen w-full items-center justify-center p-4'>
      <div className='container mx-auto max-w-7xl'>
        <h1 className='text-3xl font-bold text-center text-blue-500 mb-4'>
          Prompt Editing System
        </h1>
        <div className='flex flex-row space-x-4 mx-auto justify-center'>
          <PromptCard prompt={prompt} />
          <div className='flex flex-col space-y-4 flex-1'>
            <PromptEditSection prompt={prompt} />
            <PromptReviewSection prompt={prompt} />
          </div>
        </div>
      </div>
      <PromptCommentSection />
    </div>
  );
}
