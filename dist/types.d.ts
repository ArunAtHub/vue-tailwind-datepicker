import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsBase } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { CreateComponentPublicInstanceWithMixins } from 'vue';
import { Dayjs } from 'dayjs';
import { ExtractPropTypes } from 'vue';
import { GlobalComponents } from 'vue';
import { GlobalDirectives } from 'vue';
import { PropType } from 'vue';
import { PublicProps } from 'vue';
import { VNodeProps } from 'vue';

declare const _default: {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<ExtractPropTypes<{
        shortcuts: {
            type: PropType<boolean | (() => {
                label: string;
                atClick: () => Date[];
            }[])>;
            default: boolean;
        };
        asSingle: {
            type: PropType<boolean>;
        };
        i18n: {
            type: PropType<string>;
            default: string;
        };
        weekNumber: {
            type: PropType<boolean>;
            default: boolean;
        };
        disabled: {
            type: PropType<boolean>;
            default: boolean;
        };
        placeholder: {
            type: PropType<string>;
            default: string;
        };
        disableDate: {
            type: PropType<boolean | ((date: Date) => boolean)>;
            default: boolean;
        };
        formatter: {
            type: PropType<{
                date: string;
                month: string;
            }>;
            default: () => {
                date: string;
                month: string;
            };
        };
        separator: {
            type: PropType<string>;
            default: string;
        };
        noInput: {
            type: PropType<boolean>;
        };
        overlay: {
            type: PropType<boolean>;
        };
        useRange: {
            type: PropType<boolean>;
        };
        inputClasses: {
            type: PropType<string>;
            default: string;
        };
        disableInRange: {
            type: PropType<boolean>;
            default: boolean;
        };
        autoApply: {
            type: PropType<boolean>;
            default: boolean;
        };
        startFrom: {
            type: PropType<Date>;
            default: () => Date;
        };
        weekdaysSize: {
            type: PropType<string>;
            default: string;
        };
        options: {
            type: PropType<{
                shortcuts: {
                    today: string;
                    tomorrow: string;
                    thisWeekend: string;
                    thisWeek: string;
                    currentMonth: string;
                    thisYear: string;
                };
                footer: {
                    apply: string;
                    cancel: string;
                };
            }>;
            default: () => {
                shortcuts: {
                    today: string;
                    tomorrow: string;
                    thisWeekend: string;
                    thisWeek: string;
                    currentMonth: string;
                    thisYear: string;
                };
                footer: {
                    apply: string;
                    cancel: string;
                };
            };
        };
        modelValue: {
            type: PropType<string | [Date, Date] | {
                start: Date | string;
                end: Date | string;
            } | {
                startDate: Date | string;
                endDate: Date | string;
            }>;
            required: true;
            default: () => Date[];
        };
        sessionValue: {
            type: PropType<{
                morning: boolean;
                afternoon: boolean;
                evening: boolean;
                night: boolean;
            }>;
            default: () => {
                morning: boolean;
                afternoon: boolean;
                evening: boolean;
                night: boolean;
            };
        };
    }>> & Readonly<{
        "onUpdate:modelValue"?: ((value: string | string[] | Dayjs[] | Record<string, string>) => any) | undefined;
        "onUpdate:sessionValue"?: ((value: {
            morning: boolean;
            afternoon: boolean;
            evening: boolean;
            night: boolean;
        }) => any) | undefined;
        onSelectMonth?: ((value: Dayjs) => any) | undefined;
        onSelectYear?: ((value: Dayjs) => any) | undefined;
        onSelectRightMonth?: ((value: Dayjs) => any) | undefined;
        onSelectRightYear?: ((value: Dayjs) => any) | undefined;
        onClickPrev?: ((value: Dayjs) => any) | undefined;
        onClickNext?: ((value: Dayjs) => any) | undefined;
        onClickRightPrev?: ((value: Dayjs) => any) | undefined;
        onClickRightNext?: ((value: Dayjs) => any) | undefined;
    }>, {
        clearPicker: () => void;
        resetSessionData: () => void;
    }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        "update:modelValue": (value: string | string[] | Dayjs[] | Record<string, string>) => void;
        "update:sessionValue": (value: {
            morning: boolean;
            afternoon: boolean;
            evening: boolean;
            night: boolean;
        }) => void;
        selectMonth: (value: Dayjs) => void;
        selectYear: (value: Dayjs) => void;
        selectRightMonth: (value: Dayjs) => void;
        selectRightYear: (value: Dayjs) => void;
        clickPrev: (value: Dayjs) => void;
        clickNext: (value: Dayjs) => void;
        clickRightPrev: (value: Dayjs) => void;
        clickRightNext: (value: Dayjs) => void;
    }, PublicProps, {
        shortcuts: boolean | (() => {
            label: string;
            atClick: () => Date[];
        }[]);
        i18n: string;
        weekNumber: boolean;
        disabled: boolean;
        placeholder: string;
        disableDate: boolean | ((date: Date) => boolean);
        formatter: {
            date: string;
            month: string;
        };
        separator: string;
        inputClasses: string;
        disableInRange: boolean;
        autoApply: boolean;
        startFrom: Date;
        weekdaysSize: string;
        options: {
            shortcuts: {
                today: string;
                tomorrow: string;
                thisWeekend: string;
                thisWeek: string;
                currentMonth: string;
                thisYear: string;
            };
            footer: {
                apply: string;
                cancel: string;
            };
        };
        modelValue: [Date, Date] | {
            start: Date | string;
            end: Date | string;
        } | {
            startDate: Date | string;
            endDate: Date | string;
        } | string;
        sessionValue: {
            morning: boolean;
            afternoon: boolean;
            evening: boolean;
            night: boolean;
        };
    }, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<ExtractPropTypes<{
        shortcuts: {
            type: PropType<boolean | (() => {
                label: string;
                atClick: () => Date[];
            }[])>;
            default: boolean;
        };
        asSingle: {
            type: PropType<boolean>;
        };
        i18n: {
            type: PropType<string>;
            default: string;
        };
        weekNumber: {
            type: PropType<boolean>;
            default: boolean;
        };
        disabled: {
            type: PropType<boolean>;
            default: boolean;
        };
        placeholder: {
            type: PropType<string>;
            default: string;
        };
        disableDate: {
            type: PropType<boolean | ((date: Date) => boolean)>;
            default: boolean;
        };
        formatter: {
            type: PropType<{
                date: string;
                month: string;
            }>;
            default: () => {
                date: string;
                month: string;
            };
        };
        separator: {
            type: PropType<string>;
            default: string;
        };
        noInput: {
            type: PropType<boolean>;
        };
        overlay: {
            type: PropType<boolean>;
        };
        useRange: {
            type: PropType<boolean>;
        };
        inputClasses: {
            type: PropType<string>;
            default: string;
        };
        disableInRange: {
            type: PropType<boolean>;
            default: boolean;
        };
        autoApply: {
            type: PropType<boolean>;
            default: boolean;
        };
        startFrom: {
            type: PropType<Date>;
            default: () => Date;
        };
        weekdaysSize: {
            type: PropType<string>;
            default: string;
        };
        options: {
            type: PropType<{
                shortcuts: {
                    today: string;
                    tomorrow: string;
                    thisWeekend: string;
                    thisWeek: string;
                    currentMonth: string;
                    thisYear: string;
                };
                footer: {
                    apply: string;
                    cancel: string;
                };
            }>;
            default: () => {
                shortcuts: {
                    today: string;
                    tomorrow: string;
                    thisWeekend: string;
                    thisWeek: string;
                    currentMonth: string;
                    thisYear: string;
                };
                footer: {
                    apply: string;
                    cancel: string;
                };
            };
        };
        modelValue: {
            type: PropType<string | [Date, Date] | {
                start: Date | string;
                end: Date | string;
            } | {
                startDate: Date | string;
                endDate: Date | string;
            }>;
            required: true;
            default: () => Date[];
        };
        sessionValue: {
            type: PropType<{
                morning: boolean;
                afternoon: boolean;
                evening: boolean;
                night: boolean;
            }>;
            default: () => {
                morning: boolean;
                afternoon: boolean;
                evening: boolean;
                night: boolean;
            };
        };
    }>> & Readonly<{
        "onUpdate:modelValue"?: ((value: string | string[] | Dayjs[] | Record<string, string>) => any) | undefined;
        "onUpdate:sessionValue"?: ((value: {
            morning: boolean;
            afternoon: boolean;
            evening: boolean;
            night: boolean;
        }) => any) | undefined;
        onSelectMonth?: ((value: Dayjs) => any) | undefined;
        onSelectYear?: ((value: Dayjs) => any) | undefined;
        onSelectRightMonth?: ((value: Dayjs) => any) | undefined;
        onSelectRightYear?: ((value: Dayjs) => any) | undefined;
        onClickPrev?: ((value: Dayjs) => any) | undefined;
        onClickNext?: ((value: Dayjs) => any) | undefined;
        onClickRightPrev?: ((value: Dayjs) => any) | undefined;
        onClickRightNext?: ((value: Dayjs) => any) | undefined;
    }>, {
        clearPicker: () => void;
        resetSessionData: () => void;
    }, {}, {}, {}, {
        shortcuts: boolean | (() => {
            label: string;
            atClick: () => Date[];
        }[]);
        i18n: string;
        weekNumber: boolean;
        disabled: boolean;
        placeholder: string;
        disableDate: boolean | ((date: Date) => boolean);
        formatter: {
            date: string;
            month: string;
        };
        separator: string;
        inputClasses: string;
        disableInRange: boolean;
        autoApply: boolean;
        startFrom: Date;
        weekdaysSize: string;
        options: {
            shortcuts: {
                today: string;
                tomorrow: string;
                thisWeekend: string;
                thisWeek: string;
                currentMonth: string;
                thisYear: string;
            };
            footer: {
                apply: string;
                cancel: string;
            };
        };
        modelValue: [Date, Date] | {
            start: Date | string;
            end: Date | string;
        } | {
            startDate: Date | string;
            endDate: Date | string;
        } | string;
        sessionValue: {
            morning: boolean;
            afternoon: boolean;
            evening: boolean;
            night: boolean;
        };
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<{
    shortcuts: {
        type: PropType<boolean | (() => {
            label: string;
            atClick: () => Date[];
        }[])>;
        default: boolean;
    };
    asSingle: {
        type: PropType<boolean>;
    };
    i18n: {
        type: PropType<string>;
        default: string;
    };
    weekNumber: {
        type: PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    placeholder: {
        type: PropType<string>;
        default: string;
    };
    disableDate: {
        type: PropType<boolean | ((date: Date) => boolean)>;
        default: boolean;
    };
    formatter: {
        type: PropType<{
            date: string;
            month: string;
        }>;
        default: () => {
            date: string;
            month: string;
        };
    };
    separator: {
        type: PropType<string>;
        default: string;
    };
    noInput: {
        type: PropType<boolean>;
    };
    overlay: {
        type: PropType<boolean>;
    };
    useRange: {
        type: PropType<boolean>;
    };
    inputClasses: {
        type: PropType<string>;
        default: string;
    };
    disableInRange: {
        type: PropType<boolean>;
        default: boolean;
    };
    autoApply: {
        type: PropType<boolean>;
        default: boolean;
    };
    startFrom: {
        type: PropType<Date>;
        default: () => Date;
    };
    weekdaysSize: {
        type: PropType<string>;
        default: string;
    };
    options: {
        type: PropType<{
            shortcuts: {
                today: string;
                tomorrow: string;
                thisWeekend: string;
                thisWeek: string;
                currentMonth: string;
                thisYear: string;
            };
            footer: {
                apply: string;
                cancel: string;
            };
        }>;
        default: () => {
            shortcuts: {
                today: string;
                tomorrow: string;
                thisWeekend: string;
                thisWeek: string;
                currentMonth: string;
                thisYear: string;
            };
            footer: {
                apply: string;
                cancel: string;
            };
        };
    };
    modelValue: {
        type: PropType<string | [Date, Date] | {
            start: Date | string;
            end: Date | string;
        } | {
            startDate: Date | string;
            endDate: Date | string;
        }>;
        required: true;
        default: () => Date[];
    };
    sessionValue: {
        type: PropType<{
            morning: boolean;
            afternoon: boolean;
            evening: boolean;
            night: boolean;
        }>;
        default: () => {
            morning: boolean;
            afternoon: boolean;
            evening: boolean;
            night: boolean;
        };
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | string[] | Dayjs[] | Record<string, string>) => any) | undefined;
    "onUpdate:sessionValue"?: ((value: {
        morning: boolean;
        afternoon: boolean;
        evening: boolean;
        night: boolean;
    }) => any) | undefined;
    onSelectMonth?: ((value: Dayjs) => any) | undefined;
    onSelectYear?: ((value: Dayjs) => any) | undefined;
    onSelectRightMonth?: ((value: Dayjs) => any) | undefined;
    onSelectRightYear?: ((value: Dayjs) => any) | undefined;
    onClickPrev?: ((value: Dayjs) => any) | undefined;
    onClickNext?: ((value: Dayjs) => any) | undefined;
    onClickRightPrev?: ((value: Dayjs) => any) | undefined;
    onClickRightNext?: ((value: Dayjs) => any) | undefined;
}>, {
    clearPicker: () => void;
    resetSessionData: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: string | string[] | Dayjs[] | Record<string, string>) => void;
    "update:sessionValue": (value: {
        morning: boolean;
        afternoon: boolean;
        evening: boolean;
        night: boolean;
    }) => void;
    selectMonth: (value: Dayjs) => void;
    selectYear: (value: Dayjs) => void;
    selectRightMonth: (value: Dayjs) => void;
    selectRightYear: (value: Dayjs) => void;
    clickPrev: (value: Dayjs) => void;
    clickNext: (value: Dayjs) => void;
    clickRightPrev: (value: Dayjs) => void;
    clickRightNext: (value: Dayjs) => void;
}, string, {
    shortcuts: boolean | (() => {
        label: string;
        atClick: () => Date[];
    }[]);
    i18n: string;
    weekNumber: boolean;
    disabled: boolean;
    placeholder: string;
    disableDate: boolean | ((date: Date) => boolean);
    formatter: {
        date: string;
        month: string;
    };
    separator: string;
    inputClasses: string;
    disableInRange: boolean;
    autoApply: boolean;
    startFrom: Date;
    weekdaysSize: string;
    options: {
        shortcuts: {
            today: string;
            tomorrow: string;
            thisWeekend: string;
            thisWeek: string;
            currentMonth: string;
            thisYear: string;
        };
        footer: {
            apply: string;
            cancel: string;
        };
    };
    modelValue: [Date, Date] | {
        start: Date | string;
        end: Date | string;
    } | {
        startDate: Date | string;
        endDate: Date | string;
    } | string;
    sessionValue: {
        morning: boolean;
        afternoon: boolean;
        evening: boolean;
        night: boolean;
    };
}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {
            value: string;
            placeholder: string;
            clear: () => void;
        }): any;
        inputIcon?(_: {
            value: string;
        }): any;
    };
});
export default _default;

export { }
