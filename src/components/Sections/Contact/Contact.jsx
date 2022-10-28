import CardProfile from './CardProfile';
import CardContact from './CardContact';

export default function Contact({ anchorScrollSpy }) {
  return (
    <section id={anchorScrollSpy} className="bg-custom border-t-2 border-secondary py-6 lg:p-10">
      <h2 className="text-secondary text-center font-medium text-3xl md:text-4xl">
        Rentrons en contact
      </h2>
      <p className="text-center my-6 px-2">
        Toujours disponible pour des beaux projets ou des opportunités professionnelles.
      </p>
      <div className="flex items-center justify-center mb-6">
        <CardProfile />
      </div>
      <CardContact />
    </section>
  );
}
