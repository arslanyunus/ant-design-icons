// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterSquareLinearSvg from '@ant-design/icons-svg/lib/asn/FilterSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterSquareLinear: FilterSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterSquareLinearSvg}></AntdIcon>;
};

FilterSquareLinear.displayName = 'FilterSquareLinear';
FilterSquareLinear.inheritAttrs = false;
export default FilterSquareLinear;