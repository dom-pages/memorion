import React from 'react';

type CommentType = {
  id: number;
  name: string;
  content: string;
  likes: number;
  timeAgo: string;
  profileImage?: string;
  replies?: number;
};

const Comment = ({ comment }: { comment: CommentType }) => {
  return (
    <div className="flex mb-4 border-b pb-4">
      <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 flex-shrink-0 overflow-hidden">
        {comment.profileImage ? (
          <img 
            src={`/images/profiles/${comment.profileImage}`} 
            alt={`${comment.name}'s profile`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-400 flex items-center justify-center text-white font-bold">
            {comment.name.charAt(0)}
          </div>
        )}
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-sm">{comment.name}</h4>
        <p className="text-sm my-2">{comment.content}</p>
        <div className="flex text-xs text-gray-500 mt-1">
          <button className="mr-4">Me gusta · Responder</button>
          <span className="flex items-center mr-2">
            👍 {comment.likes}
          </span>
          <span className="mr-2">·</span>
          <span>{comment.timeAgo}</span>
        </div>
      </div>
    </div>
  );
};

const CommentSection = () => {
  const comments: CommentType[] = [
    {
      id: 1,
      name: "Paula Díaz",
      content: "Dr Marcos, llevo 15 días consecutivos tomando la receta que me has preparado. Perdí 9 kilos y reduje mi cintura en 10 centímetros. Continuaré tomándolo y estoy encantada! 😊",
      likes: 24,
      timeAgo: "12 m",
      profileImage: "profile-1.jpg"
    },
    {
      id: 2,
      name: "Simone Miranda",
      content: "¡Voy a preparar la receta ahora! ¡Gracias por compartir!",
      likes: 19,
      timeAgo: "12 m",
      profileImage: "profile-2.jpg"
    },
    {
      id: 3,
      name: "María Sánchez",
      content: "¡FINALMENTE ALGUIEN CON ALGO QUE FUNCIONA! ¡GRACIAS! EMPECÉ HOY Y ME ENCANTA.",
      likes: 12,
      timeAgo: "14 m"
    },
    {
      id: 4,
      name: "Lucía Vega",
      content: "Hace 16 días que estoy tomando el ozempic natural y ya he perdido 7 kilos y 600 gramos 🥰👏",
      likes: 34,
      timeAgo: "17 m"
    },
    {
      id: 5,
      name: "Teresa López",
      content: "FINALMENTE ALGUIEN QUE NO ANDA CON RODEOS PARA PEDIR DINERO AL FINAL. ¡GRACIAS! EMPECÉ HOY ❤️❤️",
      likes: 56,
      timeAgo: "42 m"
    },
    {
      id: 6,
      name: "Carmen Alonso",
      content: "Lo explicas muy bien, eso es lo que necesitamos los laicos. Voy a empezar a tomar ozempic natural hoy mismo.",
      likes: 48,
      timeAgo: "56 m"
    }
  ];

  return (
    <div className="max-w-2xl mx-auto bg-white p-4 shadow-sm my-6">
      <div className="text-sm text-gray-600 mb-4 border-b pb-2">
        Mostrando 6 de 1.567 comentarios
      </div>
      <div>
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
