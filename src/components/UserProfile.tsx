import React, { useState } from 'react';
import { User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UserProfileModal from './UserProfileModal';

interface UserProfileProps {
  name: string;
  status: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, status }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="w-full flex items-center p-4 bg-white rounded-lg shadow hover:bg-gray-50">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-gray-500" />
          </div>
          <div className="ml-4 text-left">
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-sm text-gray-500">{status}</p>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>User Profile</DialogTitle>
        </DialogHeader>
        <UserProfileModal />
      </DialogContent>
    </Dialog>
  );
};

export default UserProfile;