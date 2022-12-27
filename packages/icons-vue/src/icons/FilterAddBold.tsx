// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterAddBoldSvg from '@ant-design/icons-svg/lib/asn/FilterAddBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterAddBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterAddBold: FilterAddBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterAddBoldSvg}></AntdIcon>;
};

FilterAddBold.displayName = 'FilterAddBold';
FilterAddBold.inheritAttrs = false;
export default FilterAddBold;