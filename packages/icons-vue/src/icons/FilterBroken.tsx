// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterBrokenSvg from '@ant-design/icons-svg/lib/asn/FilterBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterBroken: FilterBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterBrokenSvg}></AntdIcon>;
};

FilterBroken.displayName = 'FilterBroken';
FilterBroken.inheritAttrs = false;
export default FilterBroken;