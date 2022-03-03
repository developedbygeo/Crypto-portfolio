import { Spinner, SpinnerMessage, SpinnerProps } from './LoadingSpinner.styled';

const LoadingSpinner = ({ alignSelf, justifySelf }: SpinnerProps) => {
    return (
        <>
            <Spinner alignSelf={alignSelf} justifySelf={justifySelf}></Spinner>
            <SpinnerMessage>Please try refreshing your browser if this persists</SpinnerMessage>
        </>
    );
};
export default LoadingSpinner;
