export default function Form() {
  return (
    <>
      <form className="space-y-6 w-full max-w-xl">
        <div className="relative">
          <input
            id="prenom"
            name="prenom"
            type="text"
            className="w-full h-10 text-secondary placeholder-transparent border-b border-gray-300 peer focus:outline-none focus:border-b-2 focus:border-primary text-sm"
            placeholder="Prénom"
          />
          <label
            htmlFor="prenom"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:font-semibold peer-focus:text-sm"
          >
            Prénom
          </label>
        </div>
        <div className="relative">
          <input
            id="email"
            name="email"
            type="email"
            className="w-full h-10 text-secondary placeholder-transparent border-b border-gray-300 peer focus:outline-none focus:border-b-2 focus:border-primary text-sm"
            placeholder="Email"
          />
          <label
            htmlFor="email"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:font-semibold peer-focus:text-sm"
          >
            Email
          </label>
        </div>
        <div className="relative">
          <input
            id="sujet"
            name="sujet"
            type="text"
            className="w-full h-10 text-secondary placeholder-transparent border-b border-gray-300 peer focus:outline-none focus:border-b-2 focus:border-primary text-sm"
            placeholder="Sujet"
          />
          <label
            htmlFor="sujet"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:font-semibold peer-focus:text-sm"
          >
            Sujet
          </label>
        </div>
        <div className="relative">
          <textarea
            type="text"
            id="message"
            placeholder="Votre message"
            className="w-full h-32 text-secondary placeholder-transparent border-b border-gray-300 peer pt-2 focus:outline-none focus:border-b-2 focus:border-primary text-sm"
          ></textarea>
          <label
            htmlFor="message"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:font-semibold peer-focus:text-sm"
          >
            Votre Message
          </label>
        </div>

        <div className="text-center md:text-left">
          <button className="py-3 px-8 font-medium text-center text-sm ounded-sm transition duration-150 ease-in-out border border-primary text-primary bg-white hover:shadow-lg">
            Envoyer
          </button>
        </div>
      </form>
    </>
  );
}
