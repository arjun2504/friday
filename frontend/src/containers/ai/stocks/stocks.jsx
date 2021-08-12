import React, { useState } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Header, StepIndicator } from 'components';
import AIWizard from '../ai-wizard';

import { aiStocks } from 'atoms/aiStocks';
import './style.scss';

const Stocks = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="aihelp-stocks">
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/ai' }}>AI Help</Breadcrumb.Item>
        <Breadcrumb.Item active>Stocks</Breadcrumb.Item>
      </Breadcrumb>
      <Header title="AI Help" />
      <StepIndicator total={3} current={step} />
      <AIWizard step={step} atom={aiStocks} onContinue={setStep} onFinish={() => null} />
    </div>
  );
};

export default Stocks
