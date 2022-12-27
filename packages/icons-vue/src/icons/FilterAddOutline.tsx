// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterAddOutlineSvg from '@ant-design/icons-svg/lib/asn/FilterAddOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterAddOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterAddOutline: FilterAddOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterAddOutlineSvg}></AntdIcon>;
};

FilterAddOutline.displayName = 'FilterAddOutline';
FilterAddOutline.inheritAttrs = false;
export default FilterAddOutline;