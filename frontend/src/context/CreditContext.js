import { createContext, useState, useContext, useCallback } from 'react';

const CreditContext = createContext();

export const CreditProvider = ({ children }) => {
  const [credits, setCredits] = useState(50); // Initial 50 credits

  // 20 credit per 100 characters (rounded up)
    const getRequiredCredits = useCallback((charCount) => {
    return Math.ceil(charCount / 100) * 20; // 20 credits per 100 chars
  }, []);

  // Safe credit deduction with transaction logging
  const deductCredits = useCallback((charCount) => {
    const required = getRequiredCredits(charCount);
    
    setCredits(prev => {
      if (prev < required) {
        console.warn(`Credit Deduction Failed! Need ${required}, Has ${prev}`);
        return prev; // No change if insufficient
      }
      console.log(`Deducted ${required} credits (${prev} → ${prev - required})`);
      return prev - required;
    });

    return credits >= required; // Return success status
  }, [credits, getRequiredCredits]);

  // Atomic credit addition
  const addCredits = useCallback((amount) => {
    setCredits(prev => {
      console.log(`Added ${amount} credits (${prev} → ${prev + amount})`);
      return prev + amount;
    });
  }, []);

  return (
    <CreditContext.Provider 
      value={{ 
        credits,
        addCredits,
        deductCredits,
        getRequiredCredits
      }}
    >
      {children}
    </CreditContext.Provider>
  );
};

export const useCredits = () => useContext(CreditContext);