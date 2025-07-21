import React, { useState, useRef} from 'react';
import BeforeParaphrase from '../Components/BeforeParaphrase/BeforeParaphrase';
import AfterParaphrase from '../Components/AfterParaphrase/AfterParaphrase';
import Advertisement from '../Components/Advertisment/Advertisment';
import ActionButton from '../Components/ActionButton/ActionButton';
import { Modal, Button, Form, Card } from 'react-bootstrap';
import { useCredits } from '../context/CreditContext';

const AD_VIDEOS = [
  '/ads/custom_ad1.mp4',
  '/ads/custom_ad2.mp4',
  '/ads/custom_ad3.mp4',
  '/ads/custom_ad4.mp4',
  '/ads/custom_ad5.mp4'
];


const plans = [
  {
    id: 'weekly',
    title: 'Weekly Plan',
    credits: 100,
    price: 'Rs. 200',
    description: 'Perfect for quick bursts of usage. Get 100 credits valid for 7 days.',
  },
  {
    id: 'monthly',
    title: 'Monthly Plan',
    credits: 500,
    price: 'Rs. 800',
    description: 'Ideal for regular users. 500 credits with 30 days validity.',
  },
  {
    id: 'yearly',
    title: 'Yearly Plan',
    credits: 2000,
    price: 'Rs. 2500',
    description: 'Best value offer. 2000 credits valid for 365 days plus bonus perks.',
  },
];

const paymentMethods = [
  { id: 'easypaisa', label: 'Easypaisa' },
  { id: 'jazzcash', label: 'JazzCash' },
  { id: 'mastercard', label: 'MasterCard' },
  { id: 'konnect', label: 'Konnect' },
];

const Services = () => {
  const [text, setText] = useState('');
  const [paraphrasedText, setParaphrasedText] = useState('');
  const [humanizePercent, setHumanizePercent] = useState('0%');
  const [grammarlyPercent, setGrammarlyPercent] = useState('0%');
  const [plagiarismPercent, setPlagiarismPercent] = useState('0%');
  const [tone, setTone] = useState('formal');
  const [showCreditModal, setShowCreditModal] = useState(false);
  const [wizardStep, setWizardStep] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [paymentData, setPaymentData] = useState({});
  const [showVideoAd, setShowVideoAd] = useState(false);
  const videoRef = useRef(null);
  const { credits, addCredits } = useCredits();
  const MAX_CHARS = 1000;

  const handleInputChange = (e) => {
    let value = e.target.value;
    if (value.length > MAX_CHARS) value = value.slice(0, MAX_CHARS);
    setText(value);
  };

   const handleVideoEnd = () => {
    addCredits(50); // 50 credits add
    setShowVideoAd(false); 
  };
  
 /* const getRandomVideo = () => {
  const totalWeight = AD_VIDEOS.reduce((sum, ad) => sum + ad.weight, 0);
  let random = Math.random() * totalWeight;
  
  for (const ad of AD_VIDEOS) {
    if (random < ad.weight) return ad.path;
    random -= ad.weight;
  }
  
  return AD_VIDEOS[0].path; // fallback
};*/

  const resetWizard = () => {
    setWizardStep(0);
    setSelectedPlan(null);
    setSelectedMethod(null);
    setPaymentData({});
  };

  const openCreditModal = () => {
    resetWizard();
    setShowCreditModal(true);
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setWizardStep(2);
  };

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
    setWizardStep(3);
  };

  const handleFormChange = (e) => {
    setPaymentData({
      ...paymentData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaymentSubmit = () => {
    alert(`Processing ${selectedMethod.label} payment for ${selectedPlan.title}...`);
    addCredits(selectedPlan.credits);
    setShowCreditModal(false);
    resetWizard();
  };

  return (
    <div className="container service-container">
      <div className="pt-3 pb-3 mt-5 mb-5 d-flex justify-content-between align-items-center">
        <div>
          <h2 className="pb-3">Paraphrasing <span className="text-info">Tool</span></h2>
          <p>Quickly reword text with 100% accuracy and humanized results.</p>
        </div>
        <div>
          <Button variant="outline-primary" onClick={openCreditModal}>
            💰 Current Credits: {credits}
          </Button>
        </div>
      </div>

      <main className="content">
        <BeforeParaphrase
          text={text}
          charCount={text.length}
          handleInputChange={handleInputChange}
          tone={tone}
          setTone={setTone}
        />
        <Advertisement />
        <AfterParaphrase
          paraphrasedText={paraphrasedText}
          humanizePercent={humanizePercent}
          grammarlyPercent={grammarlyPercent}
          plagiarismPercent={plagiarismPercent}
        />
      </main>

      <ActionButton
        onParaphrase={text}
        setParaphrasedText={setParaphrasedText}
        setHumanization={setHumanizePercent}
        setGrammarly={setGrammarlyPercent}
        setPlagiarism={setPlagiarismPercent}
        tone={tone}
      />

      <Modal show={showCreditModal} onHide={() => setShowCreditModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Buy Credit Plans</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {wizardStep === 0 && (
            <> 
              <p>Select how you want to get credits:</p>
              <Button
                variant="success"
                className="w-100 mb-2"
                //onClick={() => { addCredits(50); setShowCreditModal(false);
                 onClick={() => setShowVideoAd(true)}
              >
                🎥 Watch Ad (Get 50 Credits)
              </Button>
              <Button
                variant="outline-secondary"
                className="w-100"
                onClick={() => setWizardStep(1)}
              >
                💳 Buy Credit Plans
              </Button>
            </>
          )}
           {showVideoAd && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.9)',
          zIndex: 2000, // Modal se upar dikhaye
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <video
            ref={videoRef}
            autoPlay
            controls={true}
            style={{ width: '80%', maxHeight: '80vh' }}
            onEnded={handleVideoEnd}
          >
            <source src={AD_VIDEOS[Math.floor(Math.random() * AD_VIDEOS.length)]} type="video/mp4" />
          </video>
          
          
        </div>
      )}
          {wizardStep === 1 && (
            <>
              <p>Choose a plan:</p>
              <div className="d-flex flex-column">
                {plans.map(plan => (
                  <Card key={plan.id} className="mb-3 p-3 hover-shadow" onClick={() => handlePlanSelect(plan)} style={{ cursor: 'pointer' }}>
                    <Card.Body>
                      <Card.Title>{plan.title} - {plan.price}</Card.Title>
                      <Card.Text>{plan.description}</Card.Text>
                    </Card.Body>
                  </Card>
                ))}
              </div>
              <Button variant="link" onClick={resetWizard}>Back</Button>
            </>
          )}

          {wizardStep === 2 && selectedPlan && (
            <>
              <p>Select a payment method for the <strong>{selectedPlan.title}</strong>:</p>
              {paymentMethods.map(m => (
                <Button
                  key={m.id}
                  variant="outline-primary"
                  className="w-100 mb-2"
                  onClick={() => handleMethodSelect(m)}
                >
                  {m.label}
                </Button>
              ))}
              <Button variant="link" onClick={() => setWizardStep(1)}>Back</Button>
            </>
          )}

          {wizardStep === 3 && selectedMethod && (
            <>
              <p>Enter your {selectedMethod.label} details:</p>
              <Form>
                {selectedMethod.id === 'easypaisa' && (
                  <Form.Group controlId="epPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      placeholder="e.g. 03XX-XXXXXXX"
                      onChange={handleFormChange}
                    />
                  </Form.Group>
                )}
                {selectedMethod.id === 'jazzcash' && (
                  <Form.Group controlId="jcPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      placeholder="e.g. 03XX-XXXXXXX"
                      onChange={handleFormChange}
                    />
                  </Form.Group>
                )}
                {selectedMethod.id === 'mastercard' && (
                  <>
                    <Form.Group controlId="mcCard">
                      <Form.Label>Card Number</Form.Label>
                      <Form.Control
                        type="text"
                        name="cardNumber"
                        placeholder="XXXX-XXXX-XXXX-XXXX"
                        onChange={handleFormChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="mcExpiry">
                      <Form.Label>Expiry Date</Form.Label>
                      <Form.Control
                        type="text"
                        name="expiry"
                        placeholder="MM/YY"
                        onChange={handleFormChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="mcCvv">
                      <Form.Label>CVV</Form.Label>
                      <Form.Control
                        type="number"
                        name="cvv"
                        placeholder="3 digits"
                        onChange={handleFormChange}
                      />
                    </Form.Group>
                  </>
                )}
                {selectedMethod.id === 'konnect' && (
                  <Form.Group controlId="knMobile">
                    <Form.Label>Konnect Mobile Number</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      placeholder="e.g. 03XX-XXXXXXX"
                      onChange={handleFormChange}
                    />
                  </Form.Group>
                )}
              </Form>
              <div className="d-flex justify-content-between mt-3">
                <Button variant="secondary" onClick={() => setWizardStep(2)}>Back</Button>
                <Button variant="primary" onClick={handlePaymentSubmit}>Pay & Get Credits</Button>
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Services;