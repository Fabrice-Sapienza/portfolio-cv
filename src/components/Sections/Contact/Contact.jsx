import CardProfile from './CardProfile';
import Form from './Form';
export default function Contact({ anchorScrollSpy }) {
  return (
    <section id={anchorScrollSpy} className="bg-custom shadow-inner py-6 lg:p-10">
      <h2 className="text-secondary text-center font-medium text-3xl md:text-4xl">
        Rentrons en contact
      </h2>
      <p className="text-center my-6 px-2">
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
