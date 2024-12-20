'use client';

import { useState, useEffect } from 'react';
import { DataTable } from '@/components/ui/data-table';
import { Button } from '@/components/ui/button';
import { 
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';
import { IUser } from '@/types';
import { columns } from '@/components/admin/users/columns';

export default function AdminUsersPage() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteUserId, setDeleteUserId] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const mockUsers: IUser[] = [
    {
      id: '1',
      email: 'john.doe@example.com',
      password: '[hashed]', // In real data, this shouldn't be exposed to frontend
      firstName: 'John',
      lastName: 'Doe',
      isAdmin: true,
      emailVerified: new Date('2024-01-15'),
    },
    {
      id: '2',
      email: 'jane.smith@example.com',
      password: '[hashed]',
      firstName: 'Jane',
      lastName: 'Smith',
      isAdmin: false,
      emailVerified: new Date('2024-02-20'),
    },
    {
      id: '3',
      email: 'bob.wilson@example.com',
      password: '[hashed]',
      firstName: 'Bob',
      lastName: 'Wilson',
      isAdmin: false,
      emailVerified: null,
    },
  ];
    
  // Then modify your fetchUsers function to use mock data:
  const fetchUsers = async () => {
    try {
      // Comment out the real API call for testing
      // const response = await fetch('/api/users');
      // const data = await response.json();
            
      // Use mock data instead
      setUsers(mockUsers);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async () => {
    if (!deleteUserId) return;

    try {
      await fetch(`/api/users/${deleteUserId}`, {
        method: 'DELETE',
      });
      await fetchUsers();
      setDeleteUserId(null);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Users Management</h1>
        <Button onClick={() => window.location.href = '/admin/users/new'}>
                    Add New User
        </Button>
      </div>

      <DataTable columns={columns} data={users} />

      <AlertDialog open={!!deleteUserId} onOpenChange={() => setDeleteUserId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the user.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteUser}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}