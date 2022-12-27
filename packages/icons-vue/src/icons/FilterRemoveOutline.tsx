// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterRemoveOutlineSvg from '@ant-design/icons-svg/lib/asn/FilterRemoveOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterRemoveOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterRemoveOutline: FilterRemoveOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterRemoveOutlineSvg}></AntdIcon>;
};

FilterRemoveOutline.displayName = 'FilterRemoveOutline';
FilterRemoveOutline.inheritAttrs = false;
export default FilterRemoveOutline;