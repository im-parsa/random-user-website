import React from 'react';

import {
    FormInputContainer,
    InputContainer
} from './Search.Styled';

const Search = (props: any) =>
{
    return (
        <FormInputContainer>
            <InputContainer
                type='text'
                placeholder='Search users to find your friend'
                onChange={ props.onChange }
            />
        </FormInputContainer>
    );
};

export default Search;
