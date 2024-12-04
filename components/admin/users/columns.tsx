'use client';

import { Button } from '@/components/ui/button';
import { IUser } from '@/types';
import { ColumnDef } from '@tanstack/react-table';
import { DeleteUserButton } from './DeleteUserButton';

export const columns: ColumnDef<IUser>[] = [
    {
        accessorKey: 'firstName',
        header: 'First Name',
    },
    {
        accessorKey: 'lastName',
        header: 'Last Name',
    },
    {
        accessorKey: 'email',
        header: 'Email',
    },
    {
        accessorKey: 'isAdmin',
        header: 'Admin',
        cell: ({ row }) => (
            <span>{row.original.isAdmin ? 'Yes' : 'No'}</span>
        ),
    },
    {
        accessorKey: 'emailVerified',
        header: 'Verified',
        cell: ({ row }) => (
            <span>{row.original.emailVerified ? 'Yes' : 'No'}</span>
        ),
    },
    {
        id: 'actions',
        cell: ({ row }) => {
            const user = row.original;
            return (
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.location.href = `/admin/users/${user.id}/edit`}
                    >
                        Edit
                    </Button>
                    <DeleteUserButton userId={user.id} />
                </div>
            );
        },
    },
];