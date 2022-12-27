// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterAddLinearSvg from '@ant-design/icons-svg/lib/asn/FilterAddLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterAddLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterAddLinear: FilterAddLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterAddLinearSvg}></AntdIcon>;
};

FilterAddLinear.displayName = 'FilterAddLinear';
FilterAddLinear.inheritAttrs = false;
export default FilterAddLinear;