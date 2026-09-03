import React from 'react';
import { Search } from 'lucide-react';
import Input from '../ui/Input';

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = 'Search research, articles, guides...',
}) => {
  return (
    <div className="w-full max-w-xl">
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        icon={<Search className="w-5 h-5 text-orange-400/80" />}
        className="py-3.5 px-6 bg-[#09090b]/90 text-white border-[#27272a] shadow-[0_4px_24px_rgba(0,0,0,0.8)] rounded-full text-sm sm:text-base placeholder:text-[#71717a] focus:ring-orange-500/20 focus:border-[#ff5500] backdrop-blur-xl transition-all"
      />
    </div>
  );
};

export default SearchBar;

