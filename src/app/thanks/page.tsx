import Link from "next/link";

export default async function Page() {
  return (
    <div className="min-h-screen w-full">
      {/* HERO - Verde */}
      <section className="w-full bg-green-600">
        <div className="max-w-3xl mx-auto px-4 py-8 text-center">
          <h1 className="text-xl font-semibold text-white">
            Your purchase was completed successfully!
          </h1>
        </div>
      </section>

      {/* CONTEÚDO - Branco */}
      <section className="w-full bg-section-white">
        <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
          <div className="flex flex-col text-center gap-4">
            <span className="text-2xl font-semibold">🎁 Welcome! 🎁</span>
            <span className="text-sm text-slate-600">Check your email to access the platform. ⬇️</span>
          </div>

          <div className="flex flex-col gap-4 p-4 text-sm text-slate-700">
            <p>Your access has been released!</p>
            <p>The next step is <u>to access the inbox</u> of your email used for the purchase.</p>
            <p>You will receive an email with the title: <br /><strong>&ldquo;Your access was released&rdquo;</strong>.</p>
            <p>Don't forget to check your spam or junk folder, some emails may end up there by mistake.</p>
            <p>If you have any questions or difficulty accessing, <u>send an email to our support</u>:</p>
            <p> - <strong className="text-green-600 hover:underline"><Link href="mailto:support@godfrequency.site">support@godfrequency.site</Link></strong></p>
            <p>We will respond immediately and help you with everything you need.</p>
            <p>A big hug, see you on the platform to start studying!</p>
          </div>
        </div>
      </section>
    </div>
  );
}
