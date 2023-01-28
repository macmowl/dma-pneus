import React from 'react';

interface Props {
  icon: string;
  children: React.ReactNode;
}

const ContactItem: React.FC<Props> = ({ icon, children }) => {
  return (
    <div className='flex gap-3'>
      <p>{icon}</p>
      <div>{children}</div>
    </div>
  );
};

export default ContactItem;
