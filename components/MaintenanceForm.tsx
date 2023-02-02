import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { SelectChangeEvent } from '@mui/material/Select';
import { sendMaintenanceForm } from '../lib/api';
import { IFormTyre } from '../types/form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TyreForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IFormTyre>({
    defaultValues: {
      lastName: '',
      email: '',
      phone: '',
      carBrand: '',
      carModel: '',
      electric: false,
      subject: '',
    },
  });

  const onSubmit: SubmitHandler<IFormTyre> = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      const res = await sendMaintenanceForm(data);
      console.log(res);
      if (res.message === 'Success') {
        reset();
        setLoading(false);
        toast.success('Demande envoyée');
      } else {
        toast.error("Erreur lors de l'envoi du messsage");
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
      <h3 className='text-lg mb-3'>Informations générales</h3>
      <div className='flex flex-col gap-5 w-full'>
        <div className='grid md:grid-cols-2 gap-5'>
          <TextField
            id='lastName'
            label='Nom'
            variant='outlined'
            size='small'
            fullWidth
            error={Boolean(errors.lastName)}
            helperText={errors.lastName && errors.lastName.message}
            {...register('lastName', {
              required: 'Votre nom est requis',
              maxLength: {
                value: 80,
                message: "C'est un peu long :)",
              },
            })}
          />
          <TextField
            id='email'
            label='Email'
            variant='outlined'
            size='small'
            type='email'
            error={Boolean(errors.email)}
            helperText={errors.email && errors.email.message}
            {...register('email', {
              required: 'Votre email est requis',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Entrez un email valide',
              },
            })}
          />
        </div>
        <div className='grid md:grid-cols-2 gap-5'>
          <TextField
            id='phone'
            label='Téléphone'
            variant='outlined'
            size='small'
            {...register('phone')}
          />
        </div>
        <div className='grid md:grid-cols-2 gap-5'>
          <TextField
            id='carBrand'
            label='Marque du véhicule'
            variant='outlined'
            size='small'
            {...register('carBrand')}
          />
          <TextField
            id='carModel'
            label='Modèle du véhicule'
            variant='outlined'
            size='small'
            {...register('carModel')}
          />
        </div>

        <FormGroup>
          <FormControlLabel
            control={<Checkbox {...register('electric')} />}
            label='Hybride ou électrique'
          />
        </FormGroup>
      </div>
      <div className='flex flex-col gap-5 w-full'>
        <div className='flex w-full flex-row-reverse'>
          <button
            disabled={isSubmitting}
            type='submit'
            className='rounded-md bg-orange-600 hover:bg-orange-700 text-white py-2 px-4'
          >
            {isSubmitting ? 'Loading' : 'Envoyer'}
          </button>
        </div>
      </div>
      <ToastContainer position='bottom-center' />
    </form>
  );
};

export default TyreForm;
