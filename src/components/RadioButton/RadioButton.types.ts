export interface RadioButtonProps {
    options: { value: string; label: string }[];
    onChange: (selectedOption: string) => void;
  }
  