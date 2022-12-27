// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterRemoveLinearSvg from '@ant-design/icons-svg/lib/asn/FilterRemoveLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterRemoveLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterRemoveLinear: FilterRemoveLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterRemoveLinearSvg}></AntdIcon>;
};

FilterRemoveLinear.displayName = 'FilterRemoveLinear';
FilterRemoveLinear.inheritAttrs = false;
export default FilterRemoveLinear;