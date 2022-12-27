// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterTickBrokenSvg from '@ant-design/icons-svg/lib/asn/FilterTickBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterTickBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterTickBroken: FilterTickBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterTickBrokenSvg}></AntdIcon>;
};

FilterTickBroken.displayName = 'FilterTickBroken';
FilterTickBroken.inheritAttrs = false;
export default FilterTickBroken;