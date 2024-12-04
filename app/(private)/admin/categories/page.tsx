'use client';

import { columns } from "@/components/admin/categories/columns";
import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const mockCategories = [
    {
        id: "1",
        name: "Electronics",
        createdAt: new Date("2024-01-01"),
        createdBy: "John Doe",
    },
    {
        id: "2",
        name: "Clothing",
        createdAt: new Date("2024-01-02"),
        createdBy: "Jane Doe",
    },
    {
        id: "3",
        name: "Books",
        createdAt: new Date("2024-01-03"),
        createdBy: "Jane Doe",
    },
];

export default function AdminCategoriesPage() {
    const router = useRouter();

    return (
        <div className="flex flex-col gap-4 p-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Categories</h1>
                <Button
                    onClick={() => router.push('/admin/categories/create')}
                >
                    Add New Category
                </Button>
            </div>
            <DataTable
                columns={columns}
                data={mockCategories}
            />
        </div>
    );
}