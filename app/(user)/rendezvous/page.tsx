'use client';

import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Tabs } from '@mantine/core';
import TyreForm from '../../../components/TyreForm';
import MaintenanceForm from '../../../components/MaintenanceForm';

const page = () => {
  return (
    <main className='flex justify-center w-full my-8 md:my-12'>
      <div className='px-4 flex flex-col items-center justify-center w-full max-w-7xl'>
        <h1 className='font-semibold text-2xl md:text-3xl lg:text-5xl mb-12'>
          Prise de rendez-vous
        </h1>
        <div className='flex w-full rounded-lg drop-shadow-xl p-4 bg-white gap-4'>
          <div className='hidden text-white bg-sky-600 sm:flex sm:w-1/3 flex-col p-4 rounded-lg'>
            <h2 className='text-3xl font-bold'>Contact</h2>
            <p>Nous restons à votre disposition pour toute information.</p>
            <div className='flex flex-col gap-y-8 text-lg mt-8'>
              <div className='flex gap-3'>
                <LocationOnIcon className='text-white' />
                <address>
                  Rue des Hauteurs, 28 <br />
                  4600 Richelle
                </address>
              </div>
              <div className='flex gap-3'>
                <LocalPhoneIcon className='text-white' />
                <a href='tel:+32476399895'>+32 476 39 98 95</a>
              </div>
              <div className='flex gap-3'>
                <EmailIcon className='text-white' />
                <a href='mailto:hello@dma-services.be'>hello@dma-services.be</a>
              </div>
            </div>
          </div>
          <div className='w-full sm:w-2/3'>
            <Tabs defaultValue='pneus'>
              <Tabs.List>
                <Tabs.Tab value='pneus'>Pneus</Tabs.Tab>
                <Tabs.Tab value='entretien'>Entretien</Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel value='pneus' pt='xs'>
                <TyreForm />
              </Tabs.Panel>
              <Tabs.Panel value='entretien' pt='xs'>
                <MaintenanceForm />
              </Tabs.Panel>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
