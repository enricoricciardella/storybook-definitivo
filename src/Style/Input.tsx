import React from 'react';
import './Input.css';

export interface InputProps {
  /** Testo mostrato come etichetta a sinistra */
  label: string;
  /** Tipo di input */
  type: 'text' | 'select' | 'radio';
  /** Valore corrente (per text e select) */
  value?: string;
  /** Opzioni per select e radio */
  options?: string[];
  /** Handler per aggiornamento (text, select, radio) */
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

/**
 * Componente Input inline con label a sinistra e campo a destra.
 * Supporta 3 varianti: text, select, radio.
 */
export const Input: React.FC<InputProps> = ({
  label,
  type,
  value,
  options,
  onChange,
}) => {
  if (type === 'select') {
    return (
      <div className="input-wrapper">
        <span className="input-label">{label}</span>
        <select className="input-select" value={value} onChange={onChange}>
          {options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    );
  }

  if (type === 'radio') {
    return (
      <div className="input-wrapper">
        <span className="input-label">{label}</span>
        <div className="input-radio-group">
          {options?.map((opt) => (
            <label key={opt} className="input-radio-label">
              <input
                type="radio"
                name={label}
                value={opt}
                onChange={onChange}
                className="input-radio"
                checked={value === opt}
              />
              {opt}
            </label>
          ))}
        </div>
      </div>
    );
  }

  // type === 'text'
  return (
    <div className="input-wrapper">
      <span className="input-label">{label}</span>
      <input
        type="text"
        className="input-text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;