'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';

// Comentários em inglês (para página com parâmetros/senha - BLACK)
const blackComments = [
  {
    id: 1,
    user: 'Maria Silva',
    avatar: '/images/profiles/user2.webp',
    text: "Really Satisfying! In just 7 days I received an unexpected deposit of $8000 dollars in my account!",
    time: '2 min',
    replies: []
  },
  {
    id: 2,
    user: 'Jane Santos',
    avatar: '/images/profiles/user3.webp',
    text: "I've been listening for 2 weeks and my daughter bought a winning ticket for $100,000!",
    time: '5 min',
    replies: []
  },
  {
    id: 3,
    user: 'Anna Costa',
    avatar: '/images/profiles/user4.webp',
    text: "My doctor was impressed. My blood sugar dropped from 100, my type 2 practically disappeared in the last few days",
    time: '8 min',
    replies: [
      {
        id: 31,
        user: 'Carlos Lima',
        avatar: '/images/profiles/user5.jpeg',
        text: "Anna, did you make any changes to your diet as well?",
        time: '3 min',
      },
      {
        id: 32,
        user: 'Anna Costa',
        avatar: '/images/profiles/user4.webp',
        text: "No, Carlos! I kept my normal diet. This frequency really made all the difference.",
        time: '1 min',
      },
    ]
  },
  {
    id: 4,
    user: 'Peter Oliveira',
    avatar: '/images/profiles/user6.webp',
    text: "Finally something that works! I no longer need to go to sleep worried about paying the bills, it seems that everything started to work out for me when I discovered this secret.",
    time: '12 min',
    replies: []
  },
  {
    id: 5,
    user: 'Lucas Ferreira',
    avatar: '/images/profiles/user7.webp',
    text: "My mother no longer remembered my name, so I decided to test it and 5 days ago she told me stories from years ago in a clear way. This is really very powerful!",
    time: '15 min',
    replies: []
  },
  {
    id: 6,
    user: 'Robert Alves',
    avatar: '/images/profiles/user9.webp',
    text: "Excellent! I used to have burning in my feet and hands every night because of neuropathy, it seems like God simply removed it from me, I can play with my grandchildren again🙏.",
    time: '20 min',
    replies: [
      {
        id: 61,
        user: 'Fernanda Souza',
        avatar: '/images/profiles/user12.jpg',
        text: "Robert, you described exactly what happened to me",
        time: '5 min',
      },
    ]
  },
  {
    id: 7,
    user: 'Patricia Mendes',
    avatar: '/images/profiles/user10.webp',
    text: "After I started listening for 7 minutes in the morning, very strange things started to happen, I woke up with almost $3,000 deposited in my bank account, and the craziest thing is that I don't even know who it was.",
    time: '25 min',
    replies: []
  },
  {
    id: 8,
    user: 'Mark Rocha',
    avatar: '/images/profiles/user11.webp',
    text: "Something like that happened to me too, my brother and I received a forgotten inheritance from our father. It was a property we didn't even know he had",
    time: '30 min',
    replies: []
  },
];

// Comentários em inglês (para página sem parâmetros - WHITE)
const englishComments = [
  {
    id: 1,
    user: 'Sarah Johnson',
    avatar: '/images/profiles/user2.webp',
    text: "Amazing! In just 30 days I got results I hadn't had in months. The binaural frequencies give me a huge state of relaxation!",
    time: '2 min',
    replies: []
  },
  {
    id: 2,
    user: 'Michael Davis',
    avatar: '/images/profiles/user3.webp',
    text: "I've been doing it for 2 weeks and I really liked it. My energy is flowing back and I feel much better, worth every penny invested.",
    time: '5 min',
    replies: []
  },
  {
    id: 3,
    user: 'Emily Wilson',
    avatar: '/images/profiles/user4.webp',
    text: "My daughter was impressed, I'm much calmer. It's a meditation that has already become a daily ritual for me.",
    time: '8 min',
    replies: [
      {
        id: 31,
        user: 'Carlos Martinez',
        avatar: '/images/profiles/user5.jpeg',
        text: "Emily, did you make any changes in your diet too?",
        time: '3 min',
      },
      {
        id: 32,
        user: 'Emily Wilson',
        avatar: '/images/profiles/user4.webp',
        text: "No, Carlos! I kept my normal diet. It was really the frequencies that made the difference in my life!🙏",
        time: '1 min',
      },
    ]
  },
  {
    id: 4,
    user: 'David Thompson',
    avatar: '/images/profiles/user6.webp',
    text: "Finally something that works for meditation! I don't need those bird and waterfall sounds anymore😂 my quality of life has improved a lot by listening to the right frequencies for meditation.",
    time: '12 min',
    replies: []
  },
  {
    id: 5,
    user: 'Lisa Anderson',
    avatar: '/images/profiles/user7.webp',
    text: "I started 5 days ago and I can already see the difference. My spiritual energy is more stable and I feel more energetic.",
    time: '15 min',
    replies: []
  },
  {
    id: 6,
    user: 'Robert Garcia',
    avatar: '/images/profiles/user9.webp',
    text: "Excellent product! My wife also started using it and is very satisfied. I recommend it to the whole family.",
    time: '20 min',
    replies: [
      {
        id: 61,
        user: 'Jennifer Smith',
        avatar: '/images/profiles/user12.jpg',
        text: "Robert, where did you buy it? I want to buy it too!",
        time: '5 min',
      },
    ]
  },
  {
    id: 7,
    user: 'Patricia Miller',
    avatar: '/images/profiles/user10.webp',
    text: "After 3 weeks of using it, my mind is controlled and I've already lost the anxiety I felt. I feel like a new person!",
    time: '25 min',
    replies: []
  },
  {
    id: 8,
    user: 'Mark Rodriguez',
    avatar: '/images/profiles/user11.webp',
    text: "I'm skeptical because I've tried many things. Can someone tell me if it really works?",
    time: '30 min',
    replies: []
  },
];

const CommentSection = () => {
  const searchParams = useSearchParams();
  const hasParams = searchParams.toString().length > 0;
  
  // Usar comentários BLACK se tiver parâmetros, senão usar comentários WHITE
  const comments = hasParams ? blackComments : englishComments;
  
  return (
    <div className="w-full max-w-4xl mx-auto my-8 px-4">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {/* Header similar ao Facebook */}
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Comments</h2>
        </div>
        
        <div className="p-4">
          <div className="space-y-4">
            {comments.map(comment => (
              <div key={comment.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                {/* Comment principal */}
                <div className="flex items-start space-x-3">
                  <img 
                    src={comment.avatar} 
                    alt={comment.user} 
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0" 
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-semibold text-gray-900 text-sm">{comment.user}</span>
                      <span className="text-xs text-gray-500">•</span>
                      <span className="text-xs text-gray-500">{comment.time} ago</span>
                    </div>
                    <p className="text-gray-800 text-sm leading-relaxed mb-2">{comment.text}</p>
                    
                    {/* Botões de interação estilo Facebook */}
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <button className="hover:text-blue-600 transition-colors">Like</button>
                      <button className="hover:text-blue-600 transition-colors">Reply</button>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-400">1 like</span>
                    </div>
                  </div>
                </div>
                
                {/* Replies */}
                {comment.replies && comment.replies.length > 0 && (
                  <div className="ml-13 mt-3 space-y-3">
                    {comment.replies.map(reply => (
                      <div key={reply.id} className="flex items-start space-x-3">
                        <img 
                          src={reply.avatar} 
                          alt={reply.user} 
                          className="w-8 h-8 rounded-full object-cover flex-shrink-0" 
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-semibold text-gray-900 text-sm">{reply.user}</span>
                            <span className="text-xs text-gray-500">•</span>
                            <span className="text-xs text-gray-500">{reply.time} ago</span>
                          </div>
                          <p className="text-gray-800 text-sm leading-relaxed mb-2">{reply.text}</p>
                          
                          {/* Botões de interação para replies */}
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <button className="hover:text-blue-600 transition-colors">Like</button>
                            <button className="hover:text-blue-600 transition-colors">Reply</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Input para novo comentário estilo Facebook */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <img 
              src="/images/profiles/profile-1.jpeg" 
              alt="Your avatar" 
              className="w-8 h-8 rounded-full object-cover" 
            />
            <div className="flex-1">
              <input 
                type="text" 
                placeholder="Write a comment..." 
                className="w-full px-3 py-2 bg-gray-100 rounded-full text-sm border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;