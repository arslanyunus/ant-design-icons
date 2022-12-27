// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterTickOutlineSvg from '@ant-design/icons-svg/lib/asn/FilterTickOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterTickOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterTickOutline: FilterTickOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterTickOutlineSvg}></AntdIcon>;
};

FilterTickOutline.displayName = 'FilterTickOutline';
FilterTickOutline.inheritAttrs = false;
export default FilterTickOutline;