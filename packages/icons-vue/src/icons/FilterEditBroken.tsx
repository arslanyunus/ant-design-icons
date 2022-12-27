// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterEditBrokenSvg from '@ant-design/icons-svg/lib/asn/FilterEditBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterEditBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterEditBroken: FilterEditBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterEditBrokenSvg}></AntdIcon>;
};

FilterEditBroken.displayName = 'FilterEditBroken';
FilterEditBroken.inheritAttrs = false;
export default FilterEditBroken;