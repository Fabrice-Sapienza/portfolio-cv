import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import CardAlert from '../../CardAlert/CardAlert';
import Button from '../../Button/Button';
import { BiLoader } from 'react-icons/bi';

export default function Form() {
  const [loader, setLoader] = useState(false);
  const [statusSubmitting, setStatusSubmitting] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoader(true);
    await axios
      .post('/api/mail', {
        data,
      })
      .then(() => {
        reset({
          name: '',
          email: '',
          message: '',
        });
        setStatusSubmitting(true);
      })
      .catch((error) => {
        setStatusSubmitting(false);
        console.log(error);
      });
    setLoader(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full relative">
        {loader && (
          <div className="z-20 absolute top-0 bottom-0 right-0 left-0 bg-white/70 flex items-center justify-center">
            <BiLoader className="animate-spin-slow text-secondary text-3xl" />
          </div>
        )}
        <div className="relative">
          <input
            className="w-full h-10 text-secondary placeholder-transparent border-b border-gray-300 peer focus:outline-none focus:border-b-2 focus:border-primary text-sm"
            placeholder="Nom"
            name="name"
            type="text"
            {...register('name', { required: true })}
          />
          {errors?.name && (
            <span className="text-xs text-red-600">Veuillez renseigner ce champ.</span>
          )}
          <label
            htmlFor="name"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:font-semibold peer-focus:text-sm"
          >
            Nom
          </label>
        </div>
        <div className="relative">
          <input
            className="w-full h-10 text-secondary placeholder-transparent border-b border-gray-300 peer focus:outline-none focus:border-b-2 focus:border-primary text-sm"
            placeholder="Email"
            {...register('email', {
              required: 'Veuillez renseigner une adresse email.',
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Veuillez renseigner une adresse email valide.',
              },
            })}
            type="email"
          />
          {errors.email?.message && (
            <span className="text-xs text-red-600">{errors.email?.message}</span>
          )}
          <label
            htmlFor="email"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:font-semibold peer-focus:text-sm"
          >
            Email
          </label>
        </div>
        <div className="relative">
          <textarea
            className="w-full h-48 text-secondary placeholder-transparent border-b border-gray-300 peer pt-2 focus:outline-none focus:border-b-2 focus:border-primary text-sm"
            placeholder="Votre message"
            name="message"
            type="text"
            {...register('message', { required: true })}
          />
          {errors?.message && (
            <span className="text-xs text-red-600">Veuillez renseigner ce champ.</span>
          )}
          <label
            htmlFor="message"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:font-semibold peer-focus:text-sm"
          >
            Votre Message
          </label>
          {statusSubmitting && (
            <CardAlert
              text="Votre message à bien été envoyé, merci !"
              type="success"
              closeCard={() => setStatusSubmitting(null)}
            />
          )}
          {statusSubmitting === false && (
            <CardAlert
              text="Désolé, votre message n'a pu être envoyé, réessayé ultérieurement."
              type="danger"
              closeCard={() => setStatusSubmitting(null)}
            />
          )}
        </div>

        <div className="text-center md:text-left">
          <Button type="submit" style={{ width: '100%' }}>
            <div target="_blank" className="flex items-center justify-center">
              Envoyer
            </div>
          </Button>
        </div>
      </form>
    </>
  );
}
