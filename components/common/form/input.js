import React from 'react'
import styled, {css} from 'styled-components'

const RelativeWrapper = styled.div`
    position: relative;
    margin: 0 auto;
`
const InputWrapper = styled.div`
    width: 30rem;
    max-width: 100%;
    margin: 0;
    padding: 0;
    border: ${props => props.border || '1px solid var(--color-grey)'};
    border-radius: .5rem;
    transition: all 0.25s ease-in-out;

    &:hover {
        border-color: var(--color-grey-50);

        & > label {
            color: var(--color-grey-dark);
        }
    }
    &:focus-within {
        border-color: ${props => props.focusBorder || 'var(--color-green)'};
    }

    ${props =>
        props.error &&
        css`
            border-color: var(--color-red) !important;

            & > label {
                color: var(--color-red) !important;
            }
        `}
`

const StyledError = styled.div`
    position: absolute;
    right: 0.8rem;
    top: 1.2rem;
    height: 1.6rem;
    width: 1.6rem;
    cursor: pointer;
`

const StyledInput = styled.input`
    background: none;
    color: var(--color-${props => props.inputColor || 'black'});
    font-size: 1.2rem;
    padding: .5rem 1.2rem;
	width: 100%;
	margin: 0;
    line-height: 2;
    display: block;
    border: none;
    border-radius: 0;
    font-family: 'Montserrat', sans-serif;

    &::placeholder {
        opacity: 0;
        transition: opacity 0.25s;
        padding-left: 0.3rem;
        font-weight: 500;
    }
    &:focus {
        outline: none;

        & ~ label {
            transform: translate(0, -1rem) scale(0.8);
            color: var(--color-green);
        }
        &::placeholder {
            opacity: 0.7;
            color: var(--color-grey-50);
        }
    }
    &:valid {
        & ~ label {
            transform: translate(0, -1rem) scale(0.8);
        }
    }
`

const ErrorMessages = styled.p`
    margin: .5rem 0;
    padding: .5rem .8rem;
    font-size: 1.2rem;
    font-weight: normal;
    color: var(--color-grey);
    min-height: 14px;
`

const StyledLabel = styled.label`
    font-size: 1.2rem;
    color: var(--color-grey);
    padding: .5rem 1rem;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 1rem;
    transform-origin: top left;
    transform: translate(0, 0.5rem) scale(1);
    transition: all 0.25s ease-in-out;

    /* prettier-ignore */
    background-color: white;
`

const Input = ({
    label,
    border,
    focusBorder,
    id,
    error,
    background,
    tabletBackground,
    handleError,
    ...props
}) => (
    <RelativeWrapper>
        <InputWrapper border={border} focusBorder={focusBorder} error={error}>
            <StyledInput id={id} {...props} />
            <StyledLabel
                background={background}
                tabletBackground={tabletBackground}
                error={error}
                htmlFor={id}
            >
                {label}
            </StyledLabel>
        </InputWrapper>
        <ErrorMessages lh="1.4" align="left" color="red-1">
            {error}
        </ErrorMessages>
        {error && <StyledError onClick={handleError} />}
    </RelativeWrapper>
)

export default Input