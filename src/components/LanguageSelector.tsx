import React from 'react';
import { useLocalizationContext } from '../contexts/LocalizationProvider';
import './LanguageSelector.css';
import { Localization } from '../translations/Localization';

export const LanguageSelector: React.FunctionComponent = React.memo(() => {
    const {localization, setLocalization} = useLocalizationContext();
    const setToEnglish = React.useCallback(() => setLocalization(Localization.English), [setLocalization]);
    const setToSlovak = React.useCallback(() => setLocalization(Localization.Slovak), [setLocalization]);
    return <div className="language-selector">
        {localization !== Localization.English ?
            <button className="form-button" onClick={setToEnglish}>English</button> : null}
        {localization !== Localization.Slovak ?
            <button className="form-button" onClick={setToSlovak}>Slovak</button> : null}
    </div>;
});
