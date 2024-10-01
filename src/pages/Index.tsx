import React, { useState } from 'react';
import UserProfile from '@/components/UserProfile';
import PropertyListing from '@/components/PropertyListing';
import PropertyDetails from '@/components/PropertyDetails';
import { toast } from '@/components/ui/use-toast';

const properties = [
  {
    id: 1,
    price: "9.0 million/month",
    address: "18 Ngoc Tu Gate, Van Mieu, Dong Da, Ha Noi",
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    postedTime: "8 hours ago"
  },
  {
    id: 2,
    price: "10.0 million/month",
    address: "48 Xuan Dieu, Tay Ho, Dong Da, Ha Noi",
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    postedTime: "12 hours ago"
  },
  {
    id: 3,
    price: "9.0 million/month",
    address: "22 Lieu Giai, Ba Dinh, Ha Noi",
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    postedTime: "1 day ago"
  }
];

const Index = () => {
  const [currentPropertyIndex, setCurrentPropertyIndex] = useState(0);

  const handleLike = () => {
    toast({
      title: "Liked!",
      description: "You liked this property.",
    });
    moveToNextProperty();
  };

  const handleDislike = () => {
    toast({
      title: "Disliked!",
      description: "You disliked this property.",
    });
    moveToNextProperty();
  };

  const moveToNextProperty = () => {
    setCurrentPropertyIndex((prevIndex) => (prevIndex + 1) % properties.length);
  };

  const currentProperty = properties[currentPropertyIndex];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Left Sidebar */}
      <div className="w-1/4 p-4 bg-white border-r">
        <UserProfile name="John Doe" status="Active renter" />
        <h2 className="mt-8 mb-4 text-xl font-semibold">Units Listing</h2>
        {properties.map((property, index) => (
          <PropertyListing
            key={property.id}
            price={property.price}
            address={property.address}
            isSelected={index === currentPropertyIndex}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <PropertyDetails 
          imageUrl={currentProperty.imageUrl}
          price={currentProperty.price}
          address={currentProperty.address}
          postedTime={currentProperty.postedTime}
          onLike={handleLike}
          onDislike={handleDislike}
        />
      </div>
    </div>
  );
};

export default Index;