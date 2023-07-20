interface IMonthPickerProps {
    handleChange: (date: Date) => void;
    minYear?: number;
    maxYear?: number;
    language?: 'en' | 'ko' | 'zh' | 'ja';
    customMonth?: string[];
}
declare const MonthPicker: (props: IMonthPickerProps) => import("react/jsx-runtime").JSX.Element;
export default MonthPicker;
