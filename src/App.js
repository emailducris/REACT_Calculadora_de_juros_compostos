import React, { useState } from 'react';

import Form from './components/Form';

export default function App({ newMonthlyInterest }) {
  const [shadowColor, setShadowColor] = useState('lightgreen');

  const handleChangeInput = (newMonthlyInterest) => {
    if (newMonthlyInterest > 0) {
      setShadowColor('lightgreen');
      return;
    } else if (newMonthlyInterest < 0) {
      setShadowColor('#ff564a');
      return;
    } else {
      setShadowColor('lightgrey');
      return;
    }
  };

  const styles = {
    box: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',

      margin: '30px auto',
      paddingTop: '10px',
      paddingBottom: '40px',

      background: '#fff',
      borderRadius: '3px',
      boxShadow: `6px 6px 6px 6px ${shadowColor}`,
    },
  };

  return (
    <div className="container center" style={styles.box}>
      <h3>Calculadora de Juros Compostos</h3>

      <Form onChangeInput={handleChangeInput} />
    </div>
  );
}
