import { useState, useCallback } from 'react';

export const useForm = () => {

    const [value, setValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isValid, setIsValid] = useState(false);

    const onChange = useCallback((evt) => {
        setValue(evt.target.value);
        setErrorMessage(evt.target.validationMessage);
        setIsValid(evt.target.validity.valid);
    }, []);

    return { value, setValue, errorMessage, setErrorMessage, isValid, setIsValid, onChange };
};