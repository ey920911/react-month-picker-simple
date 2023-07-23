var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { css, styled } from 'styled-components';
var months = {
    ko: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    ja: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    zh: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
};
var MonthPicker = function (props) {
    var _a = props.minYear, minYear = _a === void 0 ? new Date().getFullYear() - 20 : _a, _b = props.maxYear, maxYear = _b === void 0 ? new Date().getFullYear() : _b, _c = props.language, language = _c === void 0 ? 'en' : _c, customMonth = props.customMonth, buttonStyle = props.buttonStyle, selectedButtonStyle = props.selectedButtonStyle, handleChange = props.handleChange;
    var monthList = customMonth || months[language];
    var _d = useState([]), yearList = _d[0], setYearList = _d[1];
    var _e = useState(maxYear - minYear), currentYearIdx = _e[0], setCurrentYearIdx = _e[1];
    var _f = useState(new Date().getMonth()), currentMonth = _f[0], setCurrentMonth = _f[1];
    useEffect(function () {
        var _loop_1 = function (year) {
            setYearList(function (prev) { return __spreadArray(__spreadArray([], prev, true), [year], false); });
        };
        for (var year = minYear; year <= maxYear; year++) {
            _loop_1(year);
        }
    }, []);
    useEffect(function () {
        handleChange(new Date(currentYearIdx + minYear, currentMonth));
    }, [currentYearIdx, currentMonth]);
    return (_jsxs(StyledMonthPickerWrapper, { children: [_jsxs(StyledArrowWrapper, { children: [_jsx(StyledArrowButton, __assign({ isClickable: currentYearIdx > 0, onClick: function () {
                            if (currentYearIdx > 0)
                                setCurrentYearIdx(function (prev) { return prev - 1; });
                        }, style: { border: 'white', backgroundColor: 'white' } }, { children: _jsx("svg", __assign({ width: "25", height: "25", viewBox: "0 0 25 25", xmlns: "http://www.w3.org/2000/svg" }, { children: _jsxs("g", __assign({ fill: "none" }, { children: [_jsx("path", { d: "M0 0h16v16H0z" }), _jsx("path", { fill: "#3E6CDF", d: "m5 8 5-5 .7.7L6.4 8l4.3 4.3-.7.7z" })] })) })) })), _jsx("div", { children: yearList[currentYearIdx] }), _jsx(StyledArrowButton, __assign({ isClickable: currentYearIdx + 2 <= yearList.length, style: { border: 'white', backgroundColor: 'white' }, onClick: function () {
                            if (currentYearIdx + 2 <= yearList.length)
                                setCurrentYearIdx(function (prev) { return prev + 1; });
                        } }, { children: _jsx("svg", __assign({ width: "25", height: "25", viewBox: "0 0 25 25", xmlns: "http://www.w3.org/2000/svg" }, { children: _jsxs("g", __assign({ fill: "none" }, { children: [_jsx("path", { d: "M0 0h16v16H0z" }), _jsx("path", { fill: "#3E6CDF", d: "m11 8-5 5-.7-.7L9.6 8 5.3 3.7 6 3z" })] })) })) }))] }), _jsx(StyledMonthsWrapper, { children: monthList.map(function (month, index) { return (currentMonth === index ?
                    _jsx(StyledSelectedMonth, __assign({ id: "".concat(index), style: selectedButtonStyle, onClick: function (e) {
                            var selectedMonth = parseInt(e.currentTarget.id);
                            setCurrentMonth(selectedMonth);
                            // handleChange(new Date(currentYearIdx + minYear, currentMonth))
                        } }, { children: month }), "month-item-".concat(index)) :
                    _jsx(StyledMonth, __assign({ id: "".concat(index), style: buttonStyle, onClick: function (e) {
                            var selectedMonth = parseInt(e.currentTarget.id);
                            setCurrentMonth(selectedMonth);
                            // handleChange(new Date(currentYearIdx + minYear, currentMonth))
                        } }, { children: month }), "month-item-".concat(index))); }) })] }));
};
export default MonthPicker;
var StyledMonthPickerWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 30px 0;\n"], ["\n  display: flex;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 30px 0;\n"])));
var StyledArrowWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  padding: 0 0 10px 0;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  padding: 0 0 10px 0;\n"])));
var StyledMonthsWrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n"])));
var StyledMonth = styled.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex: 1 1 33%;\n  height: 50px;\n  cursor: pointer;\n\n"], ["\n  flex: 1 1 33%;\n  height: 50px;\n  cursor: pointer;\n\n"])));
var StyledSelectedMonth = styled.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  flex: 1 1 33%;\n  height: 50px;\n  background-color: #cbcdd1;\n  border: 1px solid gray;\n\n\n"], ["\n  flex: 1 1 33%;\n  height: 50px;\n  background-color: #cbcdd1;\n  border: 1px solid gray;\n\n\n"])));
var StyledArrowButton = styled.button(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var isClickable = _a.isClickable;
    return isClickable && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    cursor: pointer;\n  "], ["\n    cursor: pointer;\n  "])));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
