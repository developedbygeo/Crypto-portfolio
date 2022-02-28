import { flexMixin, gridMixin } from './mixins';
import { IPropsLayout } from './models/utils.interface';

export const getLayout = ({ flexSettings, gridSettings }: IPropsLayout) => {
    if (flexSettings) {
        return flexMixin(flexSettings.justify, flexSettings.align, flexSettings.dir);
    } else if (gridSettings) {
        return gridMixin(gridSettings.cols, gridSettings.rows);
    }
};
