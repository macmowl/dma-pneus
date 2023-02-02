'use client';

import React, { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { IContactForm } from '../../types/form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { sendContactForm } from '../../lib/api';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IContactForm>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<IContactForm> = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      const res = await sendContactForm(data);
      console.log(res);
      if (res.message === 'Success') {
        reset();
        setLoading(false);
        toast.success('Message envoyé');
      } else {
        toast.error("Error lors de l'envoi du message");
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className='max-w-7xl py-16 px-4 w-full'>
      <div className='flex flex-col sm:flex-row w-full justify-between gap-y-10 sm:gap-y-0 sm:gap-x-6'>
        <div className='flex-grow w-full'>
          <p className='text-4xl lg:text-[64px] font-bold'>Des questions ?</p>
          <p className='text-gray-500 my-7 block'>
            Nous restons à votre disposition pour toute information.
          </p>
          <div className='flex flex-col gap-y-8 text-lg'>
            <div className='flex gap-3'>
              <LocationOnIcon className='text-gray-500' />
              <address>
                Rue des Hauteurs, 28 <br />
                4600 Richelle
              </address>
            </div>
            <div className='flex gap-3'>
              <LocalPhoneIcon className='text-gray-500' />
              <a href='tel:+32476399895'>+32 476 39 98 95</a>
            </div>
            <div className='flex gap-3'>
              <EmailIcon className='text-gray-500' />
              <a href='mailto:hello@dma-services.be'>hello@dma-services.be</a>
            </div>
          </div>
        </div>
        <div className='flex-grow w-full'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-4'
          >
            <TextField
              id='name'
              label='Nom'
              variant='outlined'
              size='small'
              className='bg-white'
              fullWidth
              error={Boolean(errors.name)}
              helperText={errors.name && errors.name.message}
              {...register('name', {
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
              className='bg-white'
              fullWidth
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
            <TextareaAutosize
              minRows={4}
              id='message'
              placeholder='Votre message'
              className={`block w-full border ${
                errors.message ? 'border-red-700' : 'border-gray-300'
              } rounded py-2 px-3 h-44`}
              {...register('message', {
                required: 'Votre message est requis',
              })}
            />
            <button
              disabled={isSubmitting}
              type='submit'
              className='rounded-md bg-orange-600 hover:bg-orange-700 text-white py-2 px-4'
            >
              {isSubmitting ? 'Loading' : 'Envoyer'}
            </button>
            <ToastContainer position='bottom-center' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
