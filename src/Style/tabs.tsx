import React, { useState, useRef } from 'react';
import '../Style/Tabs.css';

// Interfaccia per definire la struttura di ogni tab
interface TabData {
  label: string;
  content: React.ReactNode; // qualsiasi contenuto da mostrare
}

// Props di configurazione per il componente Tabs
interface TabsProps {
  tabs: TabData[];
  defaultActive?: number; // Indice di tab da attivare inizialmente (default = 0)
}

// Componente Tabs che gestisce i tab in modo accessibile
export const Tabs: React.FC<TabsProps> = ({ tabs, defaultActive = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultActive);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Gestione del focus via tastiera (Tab/Shift+Tab)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const direction = e.shiftKey ? -1 : 1;
      const nextIndex = (index + direction + tabs.length) % tabs.length;
      setActiveTab(nextIndex);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <div className="tabs-container">
      {/* Sezione pulsanti */}
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            ref={(el) => (tabRefs.current[index] = el)}
            onClick={() => setActiveTab(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`tab-button ${index === activeTab ? 'active' : ''}`}
            // Aggiunta di attributi ARIA fondamentali per l’accessibilità
            role="tab"
            aria-selected={index === activeTab}
            aria-controls={`tabpanel-${index}`}
            tabIndex={index === activeTab ? 0 : -1}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Sezione di contenuto: mostra solo il contenuto del tab attivo */}
      <div
        className="tab-content"
        role="tabpanel"
        id={`tabpanel-${activeTab}`}
        aria-labelledby={tabs[activeTab].label}
      >
        {tabs[activeTab].content}
      </div>
    </div>
  );
};