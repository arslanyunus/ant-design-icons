// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterSearchBrokenSvg from '@ant-design/icons-svg/lib/asn/FilterSearchBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterSearchBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterSearchBroken: FilterSearchBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterSearchBrokenSvg}></AntdIcon>;
};

FilterSearchBroken.displayName = 'FilterSearchBroken';
FilterSearchBroken.inheritAttrs = false;
export default FilterSearchBroken;