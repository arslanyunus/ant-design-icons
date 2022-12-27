// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterEditBoldSvg from '@ant-design/icons-svg/lib/asn/FilterEditBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterEditBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterEditBold: FilterEditBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterEditBoldSvg}></AntdIcon>;
};

FilterEditBold.displayName = 'FilterEditBold';
FilterEditBold.inheritAttrs = false;
export default FilterEditBold;