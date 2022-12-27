// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterLinearSvg from '@ant-design/icons-svg/lib/asn/FilterLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterLinear: FilterLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterLinearSvg}></AntdIcon>;
};

FilterLinear.displayName = 'FilterLinear';
FilterLinear.inheritAttrs = false;
export default FilterLinear;