import React from 'react';

const comments = [
  {
    id: 1,
    user: 'Sophia Gibson',
    avatar: '/images/profiles/user2.webp',
    text: "My doctor couldn't believe it. After just 10 days, my A1C dropped so much he thought the lab messed up. He even made me redo the test just to be sure and said he's never seen anything work this fast.",
    time: '1 min',
    replies: []
  },
  {
    id: 2,
    user: 'Sheila Carroll',
    avatar: '/images/profiles/user3.webp',
    text: "I've been doing this trick for a little over a week, and my blood sugar levels have gone from 210 to 110. It feels like I can breathe again. Thank you for helping people without asking for anything in return.❤️",
    time: '3 min',
    replies: []
  },
  {
    id: 3,
    user: 'Valarie Kenneth',
    avatar: '/images/profiles/user4.webp',
    text: "My fasting glucose used to be 280. After just 14 days, it's down to 100. I haven't felt this hopeful in years.🙏",
    time: '5 min',
    replies: [
      {
        id: 31,
        user: 'Robert Bahr',
        avatar: '/images/profiles/user5.jpeg',
        text: "That's awesome, Valarie! Did you make any other changes besides the recipe?",
        time: '3 min',
      },
      {
        id: 32,
        user: 'Valarie Kenneth',
        avatar: '/images/profiles/user4.webp',
        text: "Nope, just the recipe. I didn't even mess with my diet much. It's crazy how something so simple is working so well.",
        time: '1 min',
      },
    ]
  },
  {
    id: 4,
    user: 'Steven Sopcak',
    avatar: '/images/profiles/user6.webp',
    text: "Finally, someone who explains everything without all the medical mumbo jumbo. I'm starting this tonight. Thank you for being so clear and straightforward!",
    time: '5 min',
    replies: []
  },
  {
    id: 5,
    user: 'Joe Schmitt',
    avatar: '/images/profiles/user7.webp',
    text: "I found this video after praying for guidance. It's been just 5 days since I started, but I already feel like myself again. My energy is back, and my glucose levels are steady.",
    time: '15 min',
    replies: []
  },
  {
    id: 6,
    user: 'James Kirchner',
    avatar: '/images/profiles/user9.webp',
    text: "This is the most honest and well-explained solution I've seen. Thank you for helping people without charging for it.👏",
    time: '25 min',
    replies: [
      {
        id: 61,
        user: 'Michelle L. Quinn',
        avatar: '/images/profiles/user12.jpg',
        text: "Totally agree, James. It's rare to find someone who actually cares like this.",
        time: '1 min',
      },
    ]
  },
  {
    id: 7,
    user: 'Michael Miller',
    avatar: '/images/profiles/user10.webp',
    text: "After 3 weeks, my blood sugar is finally stable, and I've dropped 6 pounds without even trying. I feel lighter and healthier already.",
    time: '33 min',
    replies: []
  },
  {
    id: 8,
    user: 'Jeff McConnell',
    avatar: '/images/profiles/user11.webp',
    text: "I'm kinda skeptical because I've tried so many things. How is this any different from the rest?",
    time: '45 min',
    replies: []
  },
];

const CommentSection = () => {
  return (
    <div className="w-full max-w-2xl mx-auto my-8">
      <h2 className="text-xl font-bold mb-4">Comments</h2>
      <div className="border rounded-lg p-6 bg-white shadow-md">
        <div className="space-y-6">
          {comments.map(comment => (
            <div key={comment.id}>
              <div className="flex items-center mb-2">
                <img src={comment.avatar} alt={comment.user} className="w-10 h-10 rounded-full mr-3 object-cover" />
                <div>
                  <div className="font-semibold">{comment.user}</div>
                  <div className="text-xs text-gray-500">{comment.time} ago</div>
                </div>
              </div>
              <div className="mb-2 text-gray-800">{comment.text}</div>
              {comment.replies && comment.replies.length > 0 && (
                <div className="ml-10 mt-2 space-y-4">
                  {comment.replies.map(reply => (
                    <div key={reply.id} className="flex items-start">
                      <img src={reply.avatar} alt={reply.user} className="w-8 h-8 rounded-full mr-2 object-cover" />
                      <div>
                        <div className="font-semibold text-sm">{reply.user}</div>
                        <div className="text-xs text-gray-500">{reply.time} ago</div>
                        <div className="text-gray-700 text-sm">{reply.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
