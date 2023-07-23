import { CSSProperties } from 'react';
interface IMonthPickerProps {
    handleChange: (date: Date) => void;
    minYear?: number;
    maxYear?: number;
    language?: 'en' | 'ko' | 'zh' | 'ja';
    customMonth?: string[];
    styleTheme?: 'light' | 'dark' | 'blue' | 'red';
    buttonStyle?: CSSProperties;
    selectedButtonStyle?: CSSProperties;
}
declare const MonthPicker: (props: IMonthPickerProps) => import("react/jsx-runtime").JSX.Element;
export default MonthPicker;
