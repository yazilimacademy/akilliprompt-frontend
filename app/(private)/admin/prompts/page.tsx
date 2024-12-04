'use client';

import { Button } from '@/components/ui/button';
import { mockPrompts } from '@/constants/prompts';
import { useRouter } from 'next/navigation';

export default function AdminPromptPage() {
    const router = useRouter();

    return (
        <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Prompts</h1>
                <Button 
                    onClick={() => router.push('/admin/prompts/create')}
                >
                    Add New Prompt
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mockPrompts.map((prompt) => (
                    <div 
                        key={prompt.id} 
                        className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-xl font-semibold">{prompt.title}</h2>
                                <p className="text-gray-600 mt-1">{prompt.description}</p>
                            </div>
                            <div className="text-sm text-gray-500">
                                <div>Views: {prompt.views}</div>
                                <div>Saves: {prompt.saves}</div>
                            </div>
                        </div>
                        <div className="mt-2 flex gap-2">
                            {prompt.tags.map((tag) => (
                                <span 
                                    key={tag} 
                                    className="px-2 py-1 bg-gray-100 rounded-full text-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
