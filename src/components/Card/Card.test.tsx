import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from '.';

describe('Card コンポーネントのテスト', () => {
  const mockProps = {
    title: 'テスト',
    link: 'https://example.com',
    image: 'https://example.com/image.jpg',
    date: '2023-11-01'
  };

  it('カードが正しく表示される', () => {
    render(<Card {...mockProps} />);
    const linkElement = screen.getByRole('link', { name: /テスト/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://example.com');
  });

  it('画像が正しく表示される', () => {
    render(<Card {...mockProps} />);
    const imageElement = screen.getByRole('img', { name: /テスト/i });
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'https://example.com/image.jpg');
  });

  it('タイトルが正しく表示される', () => {
    render(<Card {...mockProps} />);
    const titleElement = screen.getByText(/テスト/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('日付が正しく表示される', () => {
    render(<Card {...mockProps} />);
    const dateElement = screen.getByText(/2023-11-01/i);
    expect(dateElement).toBeInTheDocument();
  });

  it('"Read more" テキストが表示される', () => {
    render(<Card {...mockProps} />);
    const readMoreElement = screen.getByText(/Read more/i);
    expect(readMoreElement).toBeInTheDocument();
  });
});
