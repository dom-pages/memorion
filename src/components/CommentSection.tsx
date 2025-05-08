import React, { useEffect, useState } from 'react';

// Novo tipo para suportar replies
interface CommentType {
  id: number;
  name: string;
  content: string;
  likes?: number;
  timeAgo: string;
  profileImage?: string;
  replies?: CommentType[];
}

// Função para "achatar" todas as respostas em uma lista única
function flattenReplies(replies?: CommentType[]): CommentType[] {
  if (!replies) return [];
  let flat: CommentType[] = [];
  for (const reply of replies) {
    flat.push(reply);
    if (reply.replies) {
      flat = flat.concat(flattenReplies(reply.replies));
    }
  }
  return flat;
}

// Novo componente para respostas, sempre com o mesmo recuo
const Replies = ({ replies }: { replies: CommentType[] }) => {
  const flatReplies = flattenReplies(replies);
  return (
    <div className="pl-5 sm:pl-7 mt-1 flex flex-col gap-1">
      {flatReplies.map(reply => (
        <Comment key={reply.id} comment={reply} isReply />
      ))}
    </div>
  );
};

const Comment = ({ comment, isReply = false }: { comment: CommentType; isReply?: boolean }) => {
  return (
    <div className={`flex items-start ${isReply ? 'mb-1' : 'mb-2'}`}>
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-200 mr-2 sm:mr-3 flex-shrink-0 overflow-hidden border border-gray-300">
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
      <div className="flex-1 min-w-0">
        <div className="bg-gray-50 rounded-xl px-3 sm:px-4 py-2 shadow-sm border border-gray-100">
          <h4 className="font-semibold text-xs text-gray-800 mb-0.5 truncate">{comment.name}</h4>
          <p className="text-[15px] text-gray-900 leading-snug whitespace-pre-line break-words">{comment.content}</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-500 mt-1 ml-1">
          <button className="hover:underline focus:outline-none px-0.5">Me gusta</button>
          <span>·</span>
          <button className="hover:underline focus:outline-none px-0.5">Responder</button>
          {comment.likes !== undefined && (
            <span className="flex items-center gap-1 text-gray-400"><span role="img" aria-label="like">👍</span> {comment.likes}</span>
          )}
          <span>·</span>
          <span>{comment.timeAgo}</span>
        </div>
        {/* Respostas, todas no mesmo nível */}
        {!isReply && comment.replies && comment.replies.length > 0 && (
          <Replies replies={comment.replies} />
        )}
      </div>
    </div>
  );
};

const CommentSection = () => {
  const [city, setCity] = useState<string>('tu ciudad');

  useEffect(() => {
    fetch('https://get.geojs.io/v1/ip/geo.json')
      .then(res => res.json())
      .then(data => {
        if (data && data.city) setCity(data.city);
      })
      .catch(() => setCity('tu ciudad'));
  }, []);

  // Lista de comentários com replies e cidade dinâmica
  const comments: CommentType[] = [
    {
      id: 1,
      name: 'Francisco Sanchez',
      content: 'Soy chofer y tengo 45 años. Luché contra la diabetes tipo 2 durante años y gasté todo mi salario en comprar medicamentos. Incluso un día mi hijo me mostró este video. ¡Gracias a João Aberto ya la Dra. Fernanda\nme deshice de las agujas! Gracias',
      likes: 59,
      timeAgo: '3 min',
      profileImage: 'profile-1.jpeg',
      replies: [
        {
          id: 2,
          name: 'Daniel Romero',
          content: 'Yo también estuve a punto de cerrar el video, uffa',
          likes: 57,
          timeAgo: '1 min',
          profileImage: 'profile-2.jpeg',
        },
      ],
    },
    {
      id: 3,
      name: 'Bianca Girardi',
      content: `Alguien de ${city} quien ya probo me puede decir si funciona???`,
      likes: 33,
      timeAgo: '10 min',
      profileImage: 'profile-3.jpeg',
      replies: [
        {
          id: 4,
          name: 'Dolores Martinez',
          content: `Hola Bianca, si soy de ${city}. ¡Yo también sospechaba, pero lo probé y funcionó! Mi nivel de azúcar en la sangre cae por debajo de 100 🙏`,
          likes: 25,
          timeAgo: '9 min',
          profileImage: 'profile-4.jpeg',
          replies: [
            {
              id: 5,
              name: 'Bianca Giraral',
              content: 'Gracias!! voy a probar entonces 🙏🙏🙏',
              likes: 23,
              timeAgo: '2 min',
              profileImage: 'profile-3.jpeg',
            },
          ],
        },
      ],
    },
    {
      id: 6,
      name: 'Cláudio Miranda',
      content: 'Maravilloso, lo estoy aplicando ahora y está funcionando muy bien. 😎😎',
      likes: 120,
      timeAgo: '33 min',
      profileImage: 'profile-11.jpeg',
    },
    {
      id: 7,
      name: 'Carlos Gutierrez',
      content: '¡Mi diabetes REALMENTE se revirtió! En pocas semanas haciendo todo lo que enseña Yumi lo logré. Lo más impresionante no es comida cara y dificil de encontrar, todo es muy simple.',
      likes: 123,
      timeAgo: '1 min',
      profileImage: 'profile-5.jpeg',
      replies: [
        {
          id: 8,
          name: 'Lupe Maria',
          content: 'Carlos, ¿fue difícil hacer lo que pedía el programa?',
          likes: 67,
          timeAgo: '1 min',
          profileImage: 'profile-6.jpeg',
          replies: [
            {
              id: 9,
              name: 'Carlos Gutierrez',
              content: 'No, la comida que puedes encontrar en cualquier mercado, las actividades que puedes hacer en casa, todo muy sencillo y no lo podía creer!',
              likes: 74,
              timeAgo: '1 min',
              profileImage: 'profile-5.jpeg',
              replies: [
                {
                  id: 10,
                  name: 'Lupe Maria',
                  content: 'Gracias, voy a comprarlo ahora mismo, antes de que se caiga la página!',
                  likes: 23,
                  timeAgo: '1 min',
                  profileImage: 'profile-6.jpeg',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 11,
      name: 'Maria Angeles García',
      content: 'Soy profesora y tengo 43 años. He estado viviendo con restricciones dietéticas desde que tenía 30 años debido a la Tipo 2. Pero hoy estoy libre gracias a este programa. Hoy mi glucosa en sangre siempre está por\ndebajo de 100 y mi médico ya me ha dado de alta de la medicación.',
      likes: 48,
      timeAgo: '1 min',
      profileImage: 'profile-7.jpeg',
    },
    {
      id: 12,
      name: 'Carlos Alvarez',
      content: 'Solo me di cuenta de la gravedad de esta enfermedad cuando me vi acostado en una cama de hospital a punto de perder el equilibrio! Pero no fueron los medicamentos que me indicó mi médico, que ya tomaba antes de mi coma diabético, no fue dejar de comer dulces y carbohidratos y tampoco fue el gimnasio, porque todo eso ya lo hacía, pero no No evitaré este colapso de mi cuerpo. Fue solo después de que comencé\nhacer el protocolo Azucar Bajo Control que mi vida cambió. Hoy se enorgullece de decir que mi nivel de glucosa en la sangre no es más de 100. Muchas gracias Yumi.',
      likes: 33,
      timeAgo: '1 min',
      profileImage: 'profile-8.jpeg',
      replies: [
        {
          id: 13,
          name: 'Miguel Tavarez',
          content: 'Amigo casi me quedo ciego.... Azucar Bajo Control me salvó la vista',
          likes: 120,
          timeAgo: '1 min',
          profileImage: 'profile-9.jpeg',
        },
      ],
    },
    {
      id: 14,
      name: 'Dolores Ruiz',
      content: 'Solo tengo que agradecer a Yumi. ¡En solo 3 semanas dejé casi todos mis medicamentos! ¡Hoy solo uso 1 pastilla al día, antes eran 6 al día!',
      likes: 119,
      timeAgo: '1 min',
      profileImage: 'profile-10.jpeg',
    },
  ];

  // Contar total de comentários (incluindo replies)
  function countComments(comments: CommentType[]): number {
    let count = 0;
    for (const comment of comments) {
      count++;
      if (comment.replies) {
        count += countComments(comment.replies);
      }
    }
    return count;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-2 sm:p-4 shadow-sm my-6 border border-gray-200 rounded-lg">
      <div className="text-sm text-gray-600 mb-3 border-b pb-2 font-medium">
        Mostrando {countComments(comments)} comentarios
      </div>
      <div className="space-y-2">
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
