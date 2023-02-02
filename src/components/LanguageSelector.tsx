import React from 'react';
import { useLocalizationContext } from '../contexts/LocalizationProvider';
import './LanguageSelector.css';
import { Localization } from '../translations/Localization';

export const LanguageSelector: React.FunctionComponent = React.memo(() => {
    const {localization, setLocalization} = useLocalizationContext();
    const setToEnglish = React.useCallback(() => setLocalization(Localization.English), [setLocalization]);
    const setToSlovak = React.useCallback(() => setLocalization(Localization.Slovak), [setLocalization]);
    return <div>
        <button className={localization === Localization.English ? 'active' : ''} onClick={setToEnglish}>Englus</button>
        |
        <button className={localization === Localization.Slovak ? 'active' : ''} onClick={setToSlovak}>Slovak</button>
    </div>;
});
