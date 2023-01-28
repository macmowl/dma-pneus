import React from 'react';

const TarifEntretien = () => {
  return (
    <div className='w-full text-gray-900 max-w-xl'>
      <h2 className='text-2xl font-bold'>Tarif</h2>
      <div className='flex flex-col py-2 divide-y gap-2'>
        <div className='flex justify-between'>
          <div>
            <p>Permutation pneus hiver/été</p>
            <p className='text-sm text-gray-500 font-thin'>(Pneu sur jante)</p>
          </div>
          <p className='text-right'>24,20€</p>
        </div>
        <div>
          <div className='flex justify-between mt-2'>
            <div>
              <p>Montage pneus hiver/été + équilibrage</p>
              <p className='text-sm text-gray-500 font-thin'>
                (Pneu à monter sur jante)
              </p>
            </div>
            <p className='text-right'>24,20€</p>
          </div>
          <div className='flex justify-between mt-2'>
            <ul>
              <li>Jusqu'à la taille 15"</li>
              <li>De 16 à 20"</li>
            </ul>
            <div>
              <p className='text-right'>48,40€</p>
              <p className='text-right'>58,08€</p>
            </div>
          </div>
        </div>
        <div className='flex justify-between pt-2'>
          <p>Commandes de pneus + montage + équilibrage</p>
          <p className='text-right'>Sur devis</p>
        </div>
      </div>
      <div className='p-4 border border-red-600 rounded-lg my-1'>
        Pas de montage de pneu run flat
      </div>
    </div>
  );
};

export default TarifEntretien;
