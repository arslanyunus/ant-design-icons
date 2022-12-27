// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/FilterSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterSquareBroken: FilterSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterSquareBrokenSvg}></AntdIcon>;
};

FilterSquareBroken.displayName = 'FilterSquareBroken';
FilterSquareBroken.inheritAttrs = false;
export default FilterSquareBroken;