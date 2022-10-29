import { useForm } from 'react-hook-form';
import axios from 'axios';
import Button from '../../Button/Button';

export default function Form() {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(`ENV: ${process.env.EMAILJS_SERVICE_ID}`);
    axios
      .post('https://api.emailjs.com/api/v1.0/email/send', {
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        template_params: {
          name: data.nom,
          email: data.email,
          message: data.message,
        },
        user_id: process.env.EMAILJS_USER_ID,
      })
      .then((response) => {
        console.log(response);
        resetField('nom');
        resetField('email');
        resetField('message');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">
        <div className="relative">
          <input
            className="w-full h-10 text-secondary placeholder-transparent border-b border-gray-300 peer focus:outline-none focus:border-b-2 focus:border-primary text-sm"
            placeholder="Nom"
            id="nom"
            name="nom"
            type="text"
            {...register('nom', { required: true })}
          />
          {errors.nom && (
            <span className="text-xs text-red-600">Veuillez renseigner ce champ.</span>
          )}
          <label
            htmlFor="nom"
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
            id="message"
            name="message"
            type="text"
            {...register('message', { required: true })}
          />
          {errors.message && (
            <span className="text-xs text-red-600">Veuillez renseigner ce champ.</span>
          )}
          <label
            htmlFor="message"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:font-semibold peer-focus:text-sm"
          >
            Votre Message
          </label>
        </div>

        <div className="text-center md:text-left">
          <Button type="submit" style={{ width: '100%' }}>
            Envoyer
          </Button>
        </div>
      </form>
    </>
  );
}
