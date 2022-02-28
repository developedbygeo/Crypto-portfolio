import { IPropsLayout } from './utils.interface';

export interface IAppProps extends IPropsLayout {
    message?: string;
    count?: number;
    disabled?: boolean;
    className?: string;
    onClick?: () => void;
    onChange?: (id: number) => void;
}
