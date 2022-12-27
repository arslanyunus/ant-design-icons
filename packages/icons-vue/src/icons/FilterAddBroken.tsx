// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterAddBrokenSvg from '@ant-design/icons-svg/lib/asn/FilterAddBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterAddBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterAddBroken: FilterAddBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterAddBrokenSvg}></AntdIcon>;
};

FilterAddBroken.displayName = 'FilterAddBroken';
FilterAddBroken.inheritAttrs = false;
export default FilterAddBroken;