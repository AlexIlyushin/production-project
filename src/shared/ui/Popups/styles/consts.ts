import { DropdownDirection } from '../../../types/ui';
import cls from './popup.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom right': cls.optionsBottomRight,
    'top right': cls.optionsTopRight,
    'bottom left': cls.optionsBottomLeft,
    'top left': cls.optionsTopLeft,
};
