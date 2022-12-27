// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterEditLinearSvg from '@ant-design/icons-svg/lib/asn/FilterEditLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterEditLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterEditLinear: FilterEditLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterEditLinearSvg}></AntdIcon>;
};

FilterEditLinear.displayName = 'FilterEditLinear';
FilterEditLinear.inheritAttrs = false;
export default FilterEditLinear;