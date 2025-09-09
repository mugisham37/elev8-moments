'use client';

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogContentProps {
  content: string;
  isPreview?: boolean;
  slug?: string;
}

export default function BlogContent({ content, isPreview = false, slug }: BlogContentProps) {
  const [expanded, setExpanded] = useState(false);
  
  // For preview, show only first 2 paragraphs
  const previewContent = content.split('\n\n').slice(0, 2).join('\n\n');
  
  // Function to render markdown-like content
  const renderContent = (text: string) => {
    // Split by lines
    return text.split('\n').map((line, index) => {
      // Handle headers
      if (line.startsWith('## ')) {
        return <h3 key={index} className="text-xl font-bold mt-6 mb-3">{line.replace('## ', '')}</h3>;
      }
      
      // Handle lists
      if (line.startsWith('- ')) {
        return <li key={index} className="ml-6 list-disc">{line.replace('- ', '')}</li>;
      }
      
      // Handle numbered lists
      if (/^\d+\.\s/.test(line)) {
        return <li key={index} className="ml-6 list-decimal">{line.replace(/^\d+\.\s/, '')}</li>;
      }
      
      // Handle empty lines as paragraph breaks
      if (line.trim() === '') {
        return <br key={index} />;
      }
      
      // Regular paragraph
      return <p key={index} className="mb-4">{line}</p>;
    });
  };

  return (
    <div className="prose prose-burgundy dark:prose-invert max-w-none">
      {isPreview ? (
        <>
          <div>{renderContent(previewContent)}</div>
          {!expanded ? (
            <div className="mt-4">
              <Button 
                onClick={() => setExpanded(true)} 
                variant="outline" 
                className="text-burgundy dark:text-cream"
              >
                Read More
              </Button>
            </div>
          ) : (
            <>
              <div>{renderContent(content.split('\n\n').slice(2).join('\n\n'))}</div>
              <div className="mt-6">
                <Link href={`/blog/${slug}`}>
                  <Button variant="outline" className="text-burgundy dark:text-cream">
                    View Full Article
                  </Button>
                </Link>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <div>{renderContent(content)}</div>
          <div className="mt-8 mb-4">
            <Button asChild variant="outline" className="flex items-center">
              <Link href="/blog" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Posts
              </Link>
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
