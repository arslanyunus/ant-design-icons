// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterBoldSvg from '@ant-design/icons-svg/lib/asn/FilterBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterBold: FilterBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterBoldSvg}></AntdIcon>;
};

FilterBold.displayName = 'FilterBold';
FilterBold.inheritAttrs = false;
export default FilterBold;