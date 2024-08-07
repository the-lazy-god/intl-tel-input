declare module "intl-tel-input/data" {
    export type Country = {
        name: string;
        iso2: string;
        dialCode: string;
        priority: number;
        areaCodes: string[] | null;
        nodeById: object;
    };
    const allCountries: Country[];
    export default allCountries;
}
declare module "i18n/en/countries" {
    const _default: {
        ad: string;
        ae: string;
        af: string;
        ag: string;
        ai: string;
        al: string;
        am: string;
        ao: string;
        aq: string;
        ar: string;
        as: string;
        at: string;
        au: string;
        aw: string;
        ax: string;
        az: string;
        ba: string;
        bb: string;
        bd: string;
        be: string;
        bf: string;
        bg: string;
        bh: string;
        bi: string;
        bj: string;
        bl: string;
        bm: string;
        bn: string;
        bo: string;
        bq: string;
        br: string;
        bs: string;
        bt: string;
        bv: string;
        bw: string;
        by: string;
        bz: string;
        ca: string;
        cc: string;
        cd: string;
        cf: string;
        cg: string;
        ch: string;
        ci: string;
        ck: string;
        cl: string;
        cm: string;
        cn: string;
        co: string;
        cr: string;
        cu: string;
        cv: string;
        cw: string;
        cx: string;
        cy: string;
        cz: string;
        de: string;
        dj: string;
        dk: string;
        dm: string;
        do: string;
        dz: string;
        ec: string;
        ee: string;
        eg: string;
        eh: string;
        er: string;
        es: string;
        et: string;
        fi: string;
        fj: string;
        fk: string;
        fm: string;
        fo: string;
        fr: string;
        ga: string;
        gb: string;
        gd: string;
        ge: string;
        gf: string;
        gg: string;
        gh: string;
        gi: string;
        gl: string;
        gm: string;
        gn: string;
        gp: string;
        gq: string;
        gr: string;
        gs: string;
        gt: string;
        gu: string;
        gw: string;
        gy: string;
        hk: string;
        hm: string;
        hn: string;
        hr: string;
        ht: string;
        hu: string;
        id: string;
        ie: string;
        il: string;
        im: string;
        in: string;
        io: string;
        iq: string;
        ir: string;
        is: string;
        it: string;
        je: string;
        jm: string;
        jo: string;
        jp: string;
        ke: string;
        kg: string;
        kh: string;
        ki: string;
        km: string;
        kn: string;
        kp: string;
        kr: string;
        kw: string;
        ky: string;
        kz: string;
        la: string;
        lb: string;
        lc: string;
        li: string;
        lk: string;
        lr: string;
        ls: string;
        lt: string;
        lu: string;
        lv: string;
        ly: string;
        ma: string;
        mc: string;
        md: string;
        me: string;
        mf: string;
        mg: string;
        mh: string;
        mk: string;
        ml: string;
        mm: string;
        mn: string;
        mo: string;
        mp: string;
        mq: string;
        mr: string;
        ms: string;
        mt: string;
        mu: string;
        mv: string;
        mw: string;
        mx: string;
        my: string;
        mz: string;
        na: string;
        nc: string;
        ne: string;
        nf: string;
        ng: string;
        ni: string;
        nl: string;
        no: string;
        np: string;
        nr: string;
        nu: string;
        nz: string;
        om: string;
        pa: string;
        pe: string;
        pf: string;
        pg: string;
        ph: string;
        pk: string;
        pl: string;
        pm: string;
        pn: string;
        pr: string;
        ps: string;
        pt: string;
        pw: string;
        py: string;
        qa: string;
        re: string;
        ro: string;
        rs: string;
        ru: string;
        rw: string;
        sa: string;
        sb: string;
        sc: string;
        sd: string;
        se: string;
        sg: string;
        sh: string;
        si: string;
        sj: string;
        sk: string;
        sl: string;
        sm: string;
        sn: string;
        so: string;
        sr: string;
        ss: string;
        st: string;
        sv: string;
        sx: string;
        sy: string;
        sz: string;
        tc: string;
        td: string;
        tf: string;
        tg: string;
        th: string;
        tj: string;
        tk: string;
        tl: string;
        tm: string;
        tn: string;
        to: string;
        tr: string;
        tt: string;
        tv: string;
        tw: string;
        tz: string;
        ua: string;
        ug: string;
        um: string;
        us: string;
        uy: string;
        uz: string;
        va: string;
        vc: string;
        ve: string;
        vg: string;
        vi: string;
        vn: string;
        vu: string;
        wf: string;
        ws: string;
        ye: string;
        yt: string;
        za: string;
        zm: string;
        zw: string;
    };
    export default _default;
}
declare module "i18n/en/interface" {
    const _default_1: {
        selectedCountryAriaLabel: string;
        noCountrySelected: string;
        countryListAriaLabel: string;
        searchPlaceholder: string;
        zeroSearchResults: string;
        oneSearchResult: string;
        multipleSearchResults: string;
        ac: string;
        xk: string;
    };
    export default _default_1;
}
declare module "i18n/en/index" {
    import countryTranslations from "i18n/en/countries";
    import interfaceTranslations from "i18n/en/interface";
    export { countryTranslations, interfaceTranslations };
    const _default_2: {
        selectedCountryAriaLabel: string;
        noCountrySelected: string;
        countryListAriaLabel: string;
        searchPlaceholder: string;
        zeroSearchResults: string;
        oneSearchResult: string;
        multipleSearchResults: string;
        ac: string;
        xk: string;
        ad: string;
        ae: string;
        af: string;
        ag: string;
        ai: string;
        al: string;
        am: string;
        ao: string;
        aq: string;
        ar: string;
        as: string;
        at: string;
        au: string;
        aw: string;
        ax: string;
        az: string;
        ba: string;
        bb: string;
        bd: string;
        be: string;
        bf: string;
        bg: string;
        bh: string;
        bi: string;
        bj: string;
        bl: string;
        bm: string;
        bn: string;
        bo: string;
        bq: string;
        br: string;
        bs: string;
        bt: string;
        bv: string;
        bw: string;
        by: string;
        bz: string;
        ca: string;
        cc: string;
        cd: string;
        cf: string;
        cg: string;
        ch: string;
        ci: string;
        ck: string;
        cl: string;
        cm: string;
        cn: string;
        co: string;
        cr: string;
        cu: string;
        cv: string;
        cw: string;
        cx: string;
        cy: string;
        cz: string;
        de: string;
        dj: string;
        dk: string;
        dm: string;
        do: string;
        dz: string;
        ec: string;
        ee: string;
        eg: string;
        eh: string;
        er: string;
        es: string;
        et: string;
        fi: string;
        fj: string;
        fk: string;
        fm: string;
        fo: string;
        fr: string;
        ga: string;
        gb: string;
        gd: string;
        ge: string;
        gf: string;
        gg: string;
        gh: string;
        gi: string;
        gl: string;
        gm: string;
        gn: string;
        gp: string;
        gq: string;
        gr: string;
        gs: string;
        gt: string;
        gu: string;
        gw: string;
        gy: string;
        hk: string;
        hm: string;
        hn: string;
        hr: string;
        ht: string;
        hu: string;
        id: string;
        ie: string;
        il: string;
        im: string;
        in: string;
        io: string;
        iq: string;
        ir: string;
        is: string;
        it: string;
        je: string;
        jm: string;
        jo: string;
        jp: string;
        ke: string;
        kg: string;
        kh: string;
        ki: string;
        km: string;
        kn: string;
        kp: string;
        kr: string;
        kw: string;
        ky: string;
        kz: string;
        la: string;
        lb: string;
        lc: string;
        li: string;
        lk: string;
        lr: string;
        ls: string;
        lt: string;
        lu: string;
        lv: string;
        ly: string;
        ma: string;
        mc: string;
        md: string;
        me: string;
        mf: string;
        mg: string;
        mh: string;
        mk: string;
        ml: string;
        mm: string;
        mn: string;
        mo: string;
        mp: string;
        mq: string;
        mr: string;
        ms: string;
        mt: string;
        mu: string;
        mv: string;
        mw: string;
        mx: string;
        my: string;
        mz: string;
        na: string;
        nc: string;
        ne: string;
        nf: string;
        ng: string;
        ni: string;
        nl: string;
        no: string;
        np: string;
        nr: string;
        nu: string;
        nz: string;
        om: string;
        pa: string;
        pe: string;
        pf: string;
        pg: string;
        ph: string;
        pk: string;
        pl: string;
        pm: string;
        pn: string;
        pr: string;
        ps: string;
        pt: string;
        pw: string;
        py: string;
        qa: string;
        re: string;
        ro: string;
        rs: string;
        ru: string;
        rw: string;
        sa: string;
        sb: string;
        sc: string;
        sd: string;
        se: string;
        sg: string;
        sh: string;
        si: string;
        sj: string;
        sk: string;
        sl: string;
        sm: string;
        sn: string;
        so: string;
        sr: string;
        ss: string;
        st: string;
        sv: string;
        sx: string;
        sy: string;
        sz: string;
        tc: string;
        td: string;
        tf: string;
        tg: string;
        th: string;
        tj: string;
        tk: string;
        tl: string;
        tm: string;
        tn: string;
        to: string;
        tr: string;
        tt: string;
        tv: string;
        tw: string;
        tz: string;
        ua: string;
        ug: string;
        um: string;
        us: string;
        uy: string;
        uz: string;
        va: string;
        vc: string;
        ve: string;
        vg: string;
        vi: string;
        vn: string;
        vu: string;
        wf: string;
        ws: string;
        ye: string;
        yt: string;
        za: string;
        zm: string;
        zw: string;
    };
    export default _default_2;
}
declare module "intl-tel-input" {
    import { Country } from "intl-tel-input/data";
    interface IntlTelInputInterface {
        (input: HTMLInputElement, options?: SomeOptions): Iti;
        autoCountry?: string;
        defaults: AllOptions;
        documentReady: () => boolean;
        getCountryData: () => Country[];
        getInstance: (input: HTMLInputElement) => Iti | null;
        instances: {
            [key: string]: Iti;
        };
        loadUtils: (path: string) => Promise<unknown> | null;
        startedLoadingAutoCountry?: boolean;
        startedLoadingUtilsScript?: boolean;
        version: string | undefined;
        utils?: ItiUtils;
    }
    type ItiUtils = {
        formatNumber(number: string, iso2: string | undefined, format?: number): string;
        formatNumberAsYouType(number: string, iso2: string | undefined): string;
        getCoreNumber(number: string, iso2: string | undefined): string;
        getExampleNumber(iso2: string | undefined, nationalMode: boolean, numberType: number, useE164?: boolean): string;
        getExtension(number: string, iso2: string | undefined): string;
        getNumberType: (number: string, iso2: string | undefined) => number;
        getValidationError(number: string, iso2: string | undefined): number;
        isPossibleNumber(number: string, iso2: string | undefined, numberType?: string): boolean;
        isValidNumber: (number: string, iso2: string | undefined) => boolean;
        numberFormat: {
            NATIONAL: number;
            INTERNATIONAL: number;
            E164: number;
            RFC3966: number;
        };
        numberType: object;
    };
    type NumberType = "FIXED_LINE_OR_MOBILE" | "FIXED_LINE" | "MOBILE" | "PAGER" | "PERSONAL_NUMBER" | "PREMIUM_RATE" | "SHARED_COST" | "TOLL_FREE" | "UAN" | "UNKNOWN" | "VOICEMAIL" | "VOIP";
    type SelectedCountryData = Country | {
        name?: string;
        iso2?: string;
        dialCode?: string;
    };
    interface AllOptions {
        allowDropdown: boolean;
        autoPlaceholder: string;
        containerClass: string;
        countryOrder: string[];
        countrySearch: boolean;
        customPlaceholder: ((selectedCountryPlaceholder: string, selectedCountryData: object) => string) | null;
        dropdownContainer: HTMLElement | null;
        excludeCountries: string[];
        fixDropdownWidth: boolean;
        formatAsYouType: boolean;
        formatOnDisplay: boolean;
        geoIpLookup: ((success: (iso2: string) => void, failure: () => void) => void) | null;
        hiddenInput: ((telInputName: string) => {
            phone: string;
            country?: string;
        }) | null;
        i18n: {
            af?: string;
            al?: string;
            dz?: string;
            as?: string;
            ad?: string;
            ao?: string;
            ai?: string;
            ag?: string;
            ar?: string;
            am?: string;
            aw?: string;
            ac?: string;
            au?: string;
            at?: string;
            az?: string;
            bs?: string;
            bh?: string;
            bd?: string;
            bb?: string;
            by?: string;
            be?: string;
            bz?: string;
            bj?: string;
            bm?: string;
            bt?: string;
            bo?: string;
            ba?: string;
            bw?: string;
            br?: string;
            io?: string;
            vg?: string;
            bn?: string;
            bg?: string;
            bf?: string;
            bi?: string;
            kh?: string;
            cm?: string;
            ca?: string;
            cv?: string;
            bq?: string;
            ky?: string;
            cf?: string;
            td?: string;
            cl?: string;
            cn?: string;
            cx?: string;
            cc?: string;
            co?: string;
            km?: string;
            cg?: string;
            cd?: string;
            ck?: string;
            cr?: string;
            hr?: string;
            cu?: string;
            cw?: string;
            cy?: string;
            cz?: string;
            ci?: string;
            dk?: string;
            dj?: string;
            dm?: string;
            do?: string;
            ec?: string;
            eg?: string;
            sv?: string;
            gq?: string;
            er?: string;
            ee?: string;
            sz?: string;
            et?: string;
            fk?: string;
            fo?: string;
            fj?: string;
            fi?: string;
            fr?: string;
            gf?: string;
            pf?: string;
            ga?: string;
            gm?: string;
            ge?: string;
            de?: string;
            gh?: string;
            gi?: string;
            gr?: string;
            gl?: string;
            gd?: string;
            gp?: string;
            gu?: string;
            gt?: string;
            gg?: string;
            gn?: string;
            gw?: string;
            gy?: string;
            ht?: string;
            hn?: string;
            hk?: string;
            hu?: string;
            is?: string;
            in?: string;
            id?: string;
            ir?: string;
            iq?: string;
            ie?: string;
            im?: string;
            il?: string;
            it?: string;
            jm?: string;
            jp?: string;
            je?: string;
            jo?: string;
            kz?: string;
            ke?: string;
            ki?: string;
            xk?: string;
            kw?: string;
            kg?: string;
            la?: string;
            lv?: string;
            lb?: string;
            ls?: string;
            lr?: string;
            ly?: string;
            li?: string;
            lt?: string;
            lu?: string;
            mo?: string;
            mg?: string;
            mw?: string;
            my?: string;
            mv?: string;
            ml?: string;
            mt?: string;
            mh?: string;
            mq?: string;
            mr?: string;
            mu?: string;
            yt?: string;
            mx?: string;
            fm?: string;
            md?: string;
            mc?: string;
            mn?: string;
            me?: string;
            ms?: string;
            ma?: string;
            mz?: string;
            mm?: string;
            na?: string;
            nr?: string;
            np?: string;
            nl?: string;
            nc?: string;
            nz?: string;
            ni?: string;
            ne?: string;
            ng?: string;
            nu?: string;
            nf?: string;
            kp?: string;
            mk?: string;
            mp?: string;
            no?: string;
            om?: string;
            pk?: string;
            pw?: string;
            ps?: string;
            pa?: string;
            pg?: string;
            py?: string;
            pe?: string;
            ph?: string;
            pl?: string;
            pt?: string;
            pr?: string;
            qa?: string;
            ro?: string;
            ru?: string;
            rw?: string;
            re?: string;
            ws?: string;
            sm?: string;
            sa?: string;
            sn?: string;
            rs?: string;
            sc?: string;
            sl?: string;
            sg?: string;
            sx?: string;
            sk?: string;
            si?: string;
            sb?: string;
            so?: string;
            za?: string;
            kr?: string;
            ss?: string;
            es?: string;
            lk?: string;
            bl?: string;
            sh?: string;
            kn?: string;
            lc?: string;
            mf?: string;
            pm?: string;
            vc?: string;
            sd?: string;
            sr?: string;
            sj?: string;
            se?: string;
            ch?: string;
            sy?: string;
            st?: string;
            tw?: string;
            tj?: string;
            tz?: string;
            th?: string;
            tl?: string;
            tg?: string;
            tk?: string;
            to?: string;
            tt?: string;
            tn?: string;
            tr?: string;
            tm?: string;
            tc?: string;
            tv?: string;
            vi?: string;
            ug?: string;
            ua?: string;
            ae?: string;
            gb?: string;
            us?: string;
            uy?: string;
            uz?: string;
            vu?: string;
            va?: string;
            ve?: string;
            vn?: string;
            wf?: string;
            eh?: string;
            ye?: string;
            zm?: string;
            zw?: string;
            ax?: string;
            selectedCountryAriaLabel?: string;
            searchPlaceholder?: string;
            countryListAriaLabel?: string;
            oneSearchResult?: string;
            multipleSearchResults?: string;
            noCountrySelected?: string;
            zeroSearchResults?: string;
        };
        initialCountry: string;
        nationalMode: boolean;
        onlyCountries: string[];
        placeholderNumberType: NumberType;
        showFlags: boolean;
        separateDialCode: boolean;
        strictMode: boolean;
        useFullscreenPopup: boolean;
        utilsScript: string;
        validationNumberType: NumberType | null;
    }
    export type SomeOptions = Partial<AllOptions>;
    export class Iti {
        id: number;
        promise: Promise<[unknown, unknown]>;
        private telInput;
        private highlightedItem;
        private options;
        private hadInitialPlaceholder;
        private isRTL;
        private isAndroid;
        private selectedCountryData;
        private countries;
        private dialCodeMaxLen;
        private dialCodeToIso2Map;
        private dialCodes;
        private countryContainer;
        private selectedCountry;
        private selectedCountryInner;
        private selectedCountryA11yText;
        private selectedDialCode;
        private dropdownArrow;
        private dropdownContent;
        private searchInput;
        private searchResultsA11yText;
        private countryList;
        private dropdown;
        private hiddenInput;
        private hiddenInputCountry;
        private maxCoreNumberLength;
        private defaultCountry;
        private originalPaddingRight;
        private originalPaddingLeft;
        private _handleHiddenInputSubmit;
        private _handleLabelClick;
        private _handleClickSelectedCountry;
        private _handleCountryContainerKeydown;
        private _handleInputEvent;
        private _handleKeydownEvent;
        private _handleWindowScroll;
        private _handleMouseoverCountryList;
        private _handleClickCountryList;
        private _handleClickOffToClose;
        private _handleKeydownOnDropdown;
        private _handleSearchChange;
        private resolveAutoCountryPromise;
        private rejectAutoCountryPromise;
        private resolveUtilsScriptPromise;
        private rejectUtilsScriptPromise;
        constructor(input: HTMLInputElement, customOptions?: SomeOptions);
        _init(): void;
        private _processCountryData;
        private _sortCountries;
        private _addToDialCodeMap;
        private _processAllCountries;
        private _translateCountryNames;
        private _processDialCodes;
        private _generateMarkup;
        private _appendListItems;
        private _setInitialState;
        private _initListeners;
        private _initHiddenInputListener;
        private _initDropdownListeners;
        private _initRequests;
        private _loadAutoCountry;
        private _initTelInputListeners;
        private _cap;
        private _trigger;
        private _openDropdown;
        private _setDropdownPosition;
        private _bindDropdownListeners;
        private _searchForCountry;
        private _filterCountries;
        private _updateSearchResultsText;
        private _handleUpDownKey;
        private _handleEnterKey;
        private _updateValFromNumber;
        private _updateCountryFromNumber;
        private _highlightListItem;
        private _getCountryData;
        private _setCountry;
        private _updateMaxLength;
        private _setSelectedCountryTitleAttribute;
        private _getHiddenSelectedCountryWidth;
        private _updatePlaceholder;
        private _selectListItem;
        private _closeDropdown;
        private _scrollTo;
        private _updateDialCode;
        private _getDialCode;
        private _getFullNumber;
        private _beforeSetNumber;
        private _triggerCountryChange;
        private _formatNumberAsYouType;
        handleAutoCountry(): void;
        handleUtils(): void;
        destroy(): void;
        getExtension(): string;
        getNumber(format?: number): string;
        getNumberType(): number;
        getSelectedCountryData(): SelectedCountryData;
        getValidationError(): number;
        isValidNumber(): boolean | null;
        private _utilsIsPossibleNumber;
        isValidNumberPrecise(): boolean | null;
        private _utilsIsValidNumber;
        setCountry(iso2: string): void;
        setNumber(number: string): void;
        setPlaceholderNumberType(type: NumberType): void;
        setDisabled(disabled: boolean): void;
    }
    const intlTelInput: IntlTelInputInterface;
    export default intlTelInput;
}
declare module "intl-tel-input/react" {
    import intlTelInput from "intl-tel-input";
    import { Iti, SomeOptions } from "intl-tel-input";
    import React from "react";
    export { intlTelInput };
    type ItiProps = {
        initialValue?: string;
        onChangeNumber?: (number: string) => void;
        onChangeCountry?: (country: string) => void;
        onChangeValidity?: (valid: boolean) => void;
        onChangeErrorCode?: (errorCode: number | null) => void;
        usePreciseValidation?: boolean;
        initOptions?: SomeOptions;
        inputProps?: object;
        disabled?: boolean | undefined;
    };
    export type IntlTelInputRef = {
        getInstance: () => Iti | null;
        getInput: () => HTMLInputElement | null;
    };
    const IntlTelInput: React.ForwardRefExoticComponent<ItiProps & React.RefAttributes<IntlTelInputRef>>;
    export default IntlTelInput;
}
declare module "intl-tel-input/utils-compiled" {
    export default utils;
    const utils: any;
}
declare module "intl-tel-input/intlTelInputWithUtils" {
    import intlTelInput from "intl-tel-input";
    export default intlTelInput;
}
declare module "intl-tel-input/reactWithUtils" {
    import intlTelInput from "intl-tel-input/intlTelInputWithUtils";
    import { Iti, SomeOptions } from "intl-tel-input";
    import React from "react";
    export { intlTelInput };
    type ItiProps = {
        initialValue?: string;
        onChangeNumber?: (number: string) => void;
        onChangeCountry?: (country: string) => void;
        onChangeValidity?: (valid: boolean) => void;
        onChangeErrorCode?: (errorCode: number | null) => void;
        usePreciseValidation?: boolean;
        initOptions?: SomeOptions;
        inputProps?: object;
        disabled?: boolean | undefined;
    };
    export type IntlTelInputRef = {
        getInstance: () => Iti | null;
        getInput: () => HTMLInputElement | null;
    };
    const IntlTelInput: React.ForwardRefExoticComponent<ItiProps & React.RefAttributes<IntlTelInputRef>>;
    export default IntlTelInput;
}
