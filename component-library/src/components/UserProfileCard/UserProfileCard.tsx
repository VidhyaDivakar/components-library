import React from 'react';
import type { User } from '../../types/index'; 
import type { UserProfileCardProps } from '../../types/index';

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail = false,
  showRole = false,
  onEdit,
  children
}) => {
  return (
    <div className="max-w-sm w-full bg-white rounded-xl shadow-md p-6">
      {/* Avatar + Name */}
      <div className="flex items-center space-x-4">
        {user.avatarUrl ? (
          <img
            src={user.avatarUrl}
            alt={user.name}
            className="w-14 h-14 rounded-full object-cover"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
            {user.name.charAt(0)}
          </div>
        )}

        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            {user.name}
          </h2>

          {showRole && user.role && (
            <p className="text-sm text-gray-600">{user.role}</p>
          )}
        </div>
      </div>

      {/* Email */}
      {showEmail && user.email && (
        <p className="mt-3 text-sm text-gray-500">
          {user.email}
        </p>
      )}

      {/* Custom content */}
      {children && (
        <div className="mt-3">
          {children}
        </div>
      )}

      {/* Edit Button */}
      {onEdit && (
        <button
          onClick={() => onEdit(user.id)}
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Edit Profile
        </button>
      )}
    </div>
  );
};