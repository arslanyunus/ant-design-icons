// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterTickLinearSvg from '@ant-design/icons-svg/lib/asn/FilterTickLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterTickLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterTickLinear: FilterTickLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterTickLinearSvg}></AntdIcon>;
};

FilterTickLinear.displayName = 'FilterTickLinear';
FilterTickLinear.inheritAttrs = false;
export default FilterTickLinear;