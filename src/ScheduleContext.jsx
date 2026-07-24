import React, { createContext, useState, useContext } from 'react';
import ScheduleModal from './components/ScheduleModal';

const ScheduleContext = createContext();

export function ScheduleProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openSchedule = () => setIsOpen(true);
  const closeSchedule = () => setIsOpen(false);

  return (
    <ScheduleContext.Provider value={{ isOpen, openSchedule, closeSchedule }}>
      {children}
      {isOpen && <ScheduleModal onClose={closeSchedule} />}
    </ScheduleContext.Provider>
  );
}

export const useSchedule = () => useContext(ScheduleContext);
