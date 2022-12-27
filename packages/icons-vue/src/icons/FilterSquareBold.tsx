// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterSquareBoldSvg from '@ant-design/icons-svg/lib/asn/FilterSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterSquareBold: FilterSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterSquareBoldSvg}></AntdIcon>;
};

FilterSquareBold.displayName = 'FilterSquareBold';
FilterSquareBold.inheritAttrs = false;
export default FilterSquareBold;