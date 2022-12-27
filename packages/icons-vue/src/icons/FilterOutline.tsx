// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterOutlineSvg from '@ant-design/icons-svg/lib/asn/FilterOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterOutline: FilterOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterOutlineSvg}></AntdIcon>;
};

FilterOutline.displayName = 'FilterOutline';
FilterOutline.inheritAttrs = false;
export default FilterOutline;