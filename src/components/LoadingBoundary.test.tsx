import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LoadingBoundary } from './LoadingBoundary';

describe('LoadingBoundary', () => {
  it('renders children when not loading', () => {
    render(
      <LoadingBoundary isLoading={false}>
        <div>Content</div>
      </LoadingBoundary>
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders spinner when loading', () => {
    render(
      <LoadingBoundary isLoading={true}>
        <div>Content</div>
      </LoadingBoundary>
    );
    expect(screen.queryByText('Content')).not.toBeInTheDocument();
  });

  it('does not render spinner when spinner prop is false', () => {
    render(
      <LoadingBoundary isLoading={true} spinner={false}>
        <div>Content</div>
      </LoadingBoundary>
    );
    expect(screen.queryByText('Content')).not.toBeInTheDocument();
  });
});
