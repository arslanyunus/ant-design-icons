// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterSearchBoldSvg from '@ant-design/icons-svg/lib/asn/FilterSearchBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterSearchBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterSearchBold: FilterSearchBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterSearchBoldSvg}></AntdIcon>;
};

FilterSearchBold.displayName = 'FilterSearchBold';
FilterSearchBold.inheritAttrs = false;
export default FilterSearchBold;