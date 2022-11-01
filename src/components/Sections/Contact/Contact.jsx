import CardProfile from './CardProfile';
import Form from './Form';
export default function Contact({ anchorScrollSpy }) {
  return (
    <section id={anchorScrollSpy} className="bg-custom shadow-inner py-16">
      <h2 className="text-center text-4xl font-extrabold">Rentrons en contact</h2>
      <p className="max-w-2xl text-center text-xl font-bold mx-auto my-6 px-2">
        Toujours disponible pour des beaux projets ou des opportunités professionnelles.
      </p>
      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-[250px_1fr] md:gap-x-4">
        <div className="w-[250px] mx-auto">
          <CardProfile />
        </div>
        <div className="w-full mx-auto bg-white rounded-lg shadow-lg px-4 py-6 mt-4 md:w-[450px] md:mt-0">
          <Form />
        </div>
      </div>
    </section>
  );
}
