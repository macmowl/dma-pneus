'use client';

import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactItem from '../../../components/ContactItem';
import { Tabs } from '@mantine/core';
import TyreForm from '../../../components/TyreForm';

const page = () => {
  return (
    <main className='flex justify-center w-full my-8 md:my-12'>
      <div className='px-4 flex flex-col items-center justify-center w-full max-w-7xl'>
        <h1 className='font-semibold text-2xl md:text-3xl lg:text-5xl mb-12'>
          Prise de rendez-vous
        </h1>
        <div className='flex w-full rounded-lg drop-shadow-xl p-4 bg-white gap-4'>
          <div className='hidden text-white bg-sky-600 sm:flex sm:w-1/3 flex-col p-4 rounded-lg'>
            <h2 className='text-8'>Contact</h2>
            <p>Nous restons à votre disposition pour toute information.</p>
            <ContactItem icon='LocationOnIcon'>
              <address>
                Rue des Hauteurs 28
                <br />
                4600 Richelle
              </address>
            </ContactItem>
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
                Gallery tab content
              </Tabs.Panel>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
