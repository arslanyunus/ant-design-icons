// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterEditOutlineSvg from '@ant-design/icons-svg/lib/asn/FilterEditOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterEditOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterEditOutline: FilterEditOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterEditOutlineSvg}></AntdIcon>;
};

FilterEditOutline.displayName = 'FilterEditOutline';
FilterEditOutline.inheritAttrs = false;
export default FilterEditOutline;