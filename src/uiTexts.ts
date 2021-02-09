export enum Locale {
    en = 'en',
    hu = 'hu',
}

let selectedLocale: Locale = Locale.en;
// let selectedLocale: Locale = Locale.hu;

export function setLocale(locale: Locale) {
    selectedLocale = locale;
}

const uiTexts = {
    okButtonLabel: 'Ok',
    cancelButtonLabel: 'Cancel',

    importButtonLabel: 'Import',
    exportButtonLabel: 'Export',

    mapElementListLabel: 'Map elements:',

    translatePanelLabel: 'Translate',
    positionLabel: 'position',
    rotationLabel: 'rotation',

    transformPanelLabel: 'Transform',
    widthLabel: 'width:',
    heightLabel: 'height:',
    lengthLabel: 'length:',
    radiusTopLabel: 'radiusTop:',
    radiusBottomLabel: 'radiusBottom:',
    sidesLabel: 'sides:',
    segmentWidthLabel: 'segmentWidth:',
    segmentHeightLabel: 'segmentHeight:',
    segmentLengthLabel: 'segmentLength:',
    segmentCountLabel: 'segmentCount:',
    offsetLabel: 'offset:',
    radiusLabel: 'radius:',
    angleLabel: 'angle:',

    cloneButtonLabel: 'clone',
    removeButtonLabel: 'remove',

    createButtonLabel: 'create',
};

type UiTexts = typeof uiTexts;
type Translations = Partial<Record<keyof UiTexts, string>>;
type TranslationMap = Omit<Record<Locale, Translations>, Locale.en>;

const translations: TranslationMap = {
    [Locale.hu]: {
        mapElementListLabel: 'Pálya elemek:',
        translatePanelLabel: 'Elhelyezés',
    },
};

export default new Proxy(uiTexts, {
    get(target, key: keyof UiTexts) {
        return (selectedLocale !== Locale.en && translations[selectedLocale][key]) || target[key];
    },
});
