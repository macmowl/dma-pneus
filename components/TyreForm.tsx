import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { sendTyreForm } from '../lib/api';
import { IFormTyre } from '../types/form';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';

const TyreForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<IFormTyre>({
    defaultValues: {
      lastName: '',
      email: '',
      phone: '',
      carBrand: '',
      carModel: '',
      electric: false,
      subject: '',
      tyreWidth: 0,
      tyreHeight: 0,
      diameter: 0,
      chargeIndicator: 0,
      speedIndicator: '',
      quantity: 0,
    },
  });
  const [quantity, setQuantity] = React.useState(2);

  const handleChange = (event: SelectChangeEvent) => {
    setQuantity(+event.target.value);
  };

  const onSubmit: SubmitHandler<IFormTyre> = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      reset();
      const res = await sendTyreForm(data);
      console.log(res);
      if (res.success) {
        setLoading(false);
        alert('Demande envoyée');
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
      <h3 className='text-lg mb-3'>Détails des pneus</h3>
      <div className='flex flex-col gap-5 w-full'>
        <div className='grid md:grid-cols-3 gap-5'>
          <TextField
            id='tyreWidth'
            label='Largeur du pneu'
            variant='outlined'
            size='small'
            {...register('tyreWidth')}
          />

          <TextField
            id='tyreHeight'
            label='Hauteur du pneu'
            variant='outlined'
            size='small'
            {...register('tyreHeight')}
          />
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Quantité</InputLabel>
            <Select
              id='quantity'
              value={String(quantity)}
              label='Quantité'
              // onChange={handleChange}
              size='small'
              {...register('quantity')}
            >
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={4}>4</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className='grid md:grid-cols-3 gap-5'>
          <TextField
            id='diameter'
            label='Diamètre'
            variant='outlined'
            size='small'
            type='number'
            {...register('diameter')}
          />

          <TextField
            id='chargeIndicator'
            label='Indicateur de charge'
            variant='outlined'
            size='small'
            type='number'
            {...register('chargeIndicator')}
          />

          <TextField
            id='speedIndicator'
            label='Indicateur de vitesse'
            variant='outlined'
            size='small'
            type='number'
            {...register('speedIndicator')}
          />
        </div>
        <div className='flex w-full flex-row-reverse'>
          <LoadingButton
            endIcon={<SendIcon />}
            type='submit'
            loading={loading}
            loadingPosition='end'
            variant='contained'
            id='SubmitButton'
          >
            <span>Envoyer</span>
          </LoadingButton>
        </div>
      </div>
    </form>
  );
};

export default TyreForm;
