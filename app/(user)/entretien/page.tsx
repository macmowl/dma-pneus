import React from 'react';
import Image from 'next/image';
import TarifEntretien from '../../../components/TarifEntretien';
import CTA from '../../../components/CTA';

const page = () => {
  return (
    <main className='flex justify-center w-full'>
      <div className='px-4 flex flex-col items-center justify-center w-full max-w-7xl'>
        <h1 className='text-2xl font-bold mb-4'>
          L’importance d'un entretien régulier de votre véhicule
        </h1>
        <Image
          className='w-full max-w-3xl h-auto rounded-lg'
          src='/pneus.jpg'
          alt='Un entretien régulier de votre véhicule'
          width={800}
          height={486}
        />
        <div className='my-12 max-w-3xl text-gray-500'>
          <p className='mb-3'>
            Il est important de faire la vérification régulière de vos pneus
            pour plusieurs raisons.
          </p>
          <p className='my-3'>
            D'abord, des pneus en bon état améliorent la sécurité en
            garantissant une meilleure adhérence de la voiture sur la route.
            Cela peut réduire les risques d'accident en cas de freinage brusque
            ou de manœuvres imprévues.
          </p>
          <p className='my-3'>
            Deuxièmement, des pneus en bon état permettent d'économiser de
            l'essence car ils roulent plus efficacement.
          </p>
          <p className='my-3'>
            Enfin, conduire avec des pneus en mauvais état peut entraîner des
            amendes et des points de retrait sur le permis de conduire.
          </p>
          <p className='mt-3'>
            Pour vérifier l'état de vos pneus, vous pouvez effectuer les
            opérations suivantes :
          </p>
          <ol className='list-decimal list-inside'>
            <li>
              Vérifiez le gonflage des pneus en utilisant un manomètre. Les
              pressions recommandées sont généralement indiquées sur la porte du
              conducteur ou dans le manuel d'utilisation du véhicule.
            </li>
            <li>
              Vérifiez l'usure des pneus en regardant les lignes de marque de
              profondeur. Si la bande de roulement est usée jusqu'à la marque,
              il est temps de remplacer les pneus.
            </li>
            <li>
              Vérifiez l'état des pneus pour détecter tout dommage visible,
              comme des coupures ou des bulges.
            </li>
          </ol>
          <p className='my-3'>
            Si le pneu est endommagé ou usé au-delà des marques de profondeurs,
            nous vous recommandons de les changer.
          </p>
          <p className='my-3'>
            Nous proposons une large gamme de pneus pour tous les types de
            véhicules et pour toutes les conditions météorologiques. Vous pouvez
            choisir parmi les marques les plus connues et les plus fiables pour
            être sûr de rouler en toute sécurité.
          </p>
          <p className='my-3'>
            N'hésitez pas à prendre rendez-vous dès que vous avez un doute sur
            l’état de vos pneus.
          </p>
          <div className='w-full flex justify-center mt-12'>
            <TarifEntretien />
          </div>
          <div className='w-full flex justify-center py-8'>
            <CTA
              text='Faites l’entretien en toute simplicité et bénéficiez de notre expertise'
              url='/rendezvous'
              link='Prenez rendez-vous'
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
