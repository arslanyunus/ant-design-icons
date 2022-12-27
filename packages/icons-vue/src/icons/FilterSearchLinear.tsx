// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterSearchLinearSvg from '@ant-design/icons-svg/lib/asn/FilterSearchLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterSearchLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterSearchLinear: FilterSearchLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterSearchLinearSvg}></AntdIcon>;
};

FilterSearchLinear.displayName = 'FilterSearchLinear';
FilterSearchLinear.inheritAttrs = false;
export default FilterSearchLinear;