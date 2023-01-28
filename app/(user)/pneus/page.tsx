import React from 'react';
import Image from 'next/image';
import CTA from '../../../components/CTA';

const page = () => {
  return (
    <main className='flex justify-center w-full'>
      <div className='px-4 flex flex-col items-center justify-center w-full max-w-7xl'>
        <h1 className='text-2xl font-bold mb-4'>
          Vérification et changement de vos pneus
        </h1>
        <Image
          className='w-full max-w-3xl h-auto rounded-lg'
          src='/pneus.jpg'
          alt='Vérification et changement de vos pneus'
          width={800}
          height={486}
        />
        <div className='mt-12 max-w-3xl text-gray-500'>
          <p className='mb-3'>
            L'entretien d'un véhicule consiste en un ensemble de vérifications
            et de réparations régulières destinées à maintenir le véhicule en
            bon état de fonctionnement et à prolonger sa durée de vie.
            L'entretien d'un véhicule peut inclure des opérations simples telles
            que le remplacement des filtres ou des bougies d'allumage, ainsi que
            des opérations plus complexes comme la vidange du moteur ou la
            réparation des freins.
          </p>
          <p className='my-3'>
            La fréquence des opérations d'entretien dépend du modèle et de l'âge
            du véhicule, ainsi que de son utilisation. Il est recommandé de
            suivre les recommandations du fabricant en matière d'entretien, qui
            sont généralement indiquées dans le manuel d'utilisation du
            véhicule.
          </p>
          <p className='mt-3'>
            Lors de l'entretien d'un véhicule, nous effectuons généralement les
            opérations suivantes :
          </p>
          <ol className='list-decimal list-inside'>
            <li>
              Vérification du niveau d'huile, du liquide de refroidissement et
              des autres fluides du véhicule.
            </li>
            <li>
              Remplacement des filtres à air, à huile et à carburant si
              nécessaire.
            </li>
            <li>
              Vérification de l'usure des freins et des pneus, et remplacement
              si nécessaire.
            </li>
            <li>
              Vérification de l'état des courroies et des batteries, et
              remplacement si nécessaire.
            </li>
            <li>
              Vérification de l'état des éclairages et des phares, et
              remplacement des ampoules si nécessaire.
            </li>
            <li>Remplacement des filtres à air</li>
            <li>Diagnostic par prise OBD</li>
            <li>Amortisseurs, embrayage, ...</li>
          </ol>
          <p className='my-3'>
            Une fois l'entretien terminé, nous vous fournirons un rapport
            détaillé des opérations effectuées et des éventuelles réparations
            nécessaires.
          </p>
        </div>
        <div className='w-full flex justify-center py-8'>
          <CTA
            text='Changez vos pneus à prix attractif'
            url='/rendezvous'
            link='Prenez rendez-vous'
          />
        </div>
      </div>
    </main>
  );
};

export default page;
