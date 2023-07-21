import React, { useState } from 'react';
import ReusableBtn, { ButtonType, ColorType } from './Components/ReusableBtn';
import ReusableModal from './Components/ReusableModal';
import Input from './Components/Input';

interface IDistributionCenter {
  Name: string;
  Code: string;
  AddressLine1: string;
  AddressLine2?: string;
  City: string;
  PostalCode: number;
  ConctactPerson: string;
  ContactNumber: number;
  emailAddress: string;
}

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<IDistributionCenter>({
    Name: '',
    Code: '',
    AddressLine1: '',
    AddressLine2: '',
    City: '',
    PostalCode: 0,
    ConctactPerson: '',
    ContactNumber: 0,
    emailAddress: '',
  });

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleButtonClick = () => {
    setOpen(!open);
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };


  const formFields = Object.keys(value).map((key) => {
    return (
      <>
        <Input
          id={key}
          key={key}
          label={key}
          value={value[key as keyof IDistributionCenter]}
          onChange={handleInputChange}
          name={key}
          fullWidth
          margin='dense'
        />
      </>
    );
  });

  return (
    <div className="App">
      <ReusableBtn
        text={'Cancel'}
        backgroundColor={'Violet'}
        onClick={handleButtonClick}
        widthPercentage={50} />
      <ReusableModal
        hasDialogAction={true}
        transitionDuration={2}
        open={open}
        onClose={handleCloseModal}
        fullWidth={true}
        children={
          formFields
        }
        title='Add New Distribution Center' />
    </div>
  );
}

export default App;
