import Link from "next/link";

export default async function Page() {
  return (
    <div className="min-h-screen w-full">
      {/* HERO - Verde */}
      <section className="w-full bg-green-600">
        <div className="max-w-3xl mx-auto px-4 py-8 text-center">
          <h1 className="text-xl font-semibold text-white">
            Tu compra se completó exitosamente!
          </h1>
        </div>
      </section>

      {/* CONTEÚDO - Branco */}
      <section className="w-full bg-section-white">
        <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
          <div className="flex flex-col text-center gap-4">
            <span className="text-2xl font-semibold">🎁 ¡Bienvenido! 🎁</span>
            <span className="text-sm text-slate-600">Verifica tu correo electrónico para acceder a la plataforma. ⬇️</span>
          </div>

          <div className="flex flex-col gap-4 p-4 text-sm text-slate-700">
            <p>Tu acceso ya ha sido liberado!</p>
            <p>El siguiente paso es <u>acceder a la bandeja de entrada</u> de tu correo electrónico utilizado para la compra.</p>
            <p>Recibirás un correo electrónico con el título: <br /><strong>&ldquo;Tu acceso fue liberado&rdquo;</strong>.</p>
            <p>No olvides revisar tu carpeta de spam o basura, algunos correos electrónicos pueden terminar allí por error.</p>
            <p>Si tienes alguna duda o dificultad para acceder, <u>envía un correo electrónico a nuestro soporte</u>:</p>
            <p> - <strong className="text-green-600 hover:underline"><Link href="mailto:funilcontactsup@gmail.com">funilcontactsup@gmail.com</Link></strong></p>
            <p>Te responderemos de inmediato y te ayudaremos con todo lo que necesites.</p>
            <p>Un fuerte abrazo, nos vemos en la plataforma para empezar a estudiar!</p>
          </div>
        </div>
      </section>
    </div>
  );
}
