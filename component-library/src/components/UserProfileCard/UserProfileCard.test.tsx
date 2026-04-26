/// <reference types="vitest" />
import { render, screen, fireEvent } from '@testing-library/react';
import { UserProfileCard } from './UserProfileCard';
import { vi } from 'vitest';

describe('UserProfileCard Component', () => {
  const mockUser = {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Software Engineer',
    avatarUrl: 'https://placehold.co/100x80/000000/FFFFFF/png'
  };

  test('renders user name', () => {
    render(
      <UserProfileCard
        user={mockUser}
        showEmail={true}
        showRole={true}
        onEdit={vi.fn()}
      >
        <div>Last Login: 2 hours ago</div>
      </UserProfileCard>
    );

    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  test('hides email when showEmail is false', () => {
    render(
      <UserProfileCard
        user={mockUser}
        showEmail={false}
        showRole={false}
        onEdit={vi.fn()}
      />
    );

    expect(screen.queryByText('john.doe@example.com')).not.toBeInTheDocument();
  });

  test('calls onEdit when button is clicked', () => {
    const mockEdit = vi.fn();

    render(
      <UserProfileCard
        user={mockUser}
        showEmail={true}
        showRole={true}
        onEdit={mockEdit}
      />
    );

    fireEvent.click(screen.getByText('Edit Profile'));

    expect(mockEdit).toHaveBeenCalledWith('1');
  });

  test('renders children content', () => {
    render(
      <UserProfileCard
        user={mockUser}
        showEmail={true}
        showRole={true}
        onEdit={vi.fn()}
      >
        <div>Last login: 2 hours ago</div>
      </UserProfileCard>
    );

    expect(screen.getByText('Last login: 2 hours ago')).toBeInTheDocument();
  });
});