// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterSearchOutlineSvg from '@ant-design/icons-svg/lib/asn/FilterSearchOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterSearchOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterSearchOutline: FilterSearchOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterSearchOutlineSvg}></AntdIcon>;
};

FilterSearchOutline.displayName = 'FilterSearchOutline';
FilterSearchOutline.inheritAttrs = false;
export default FilterSearchOutline;