// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/FilterSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterSquareOutline: FilterSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterSquareOutlineSvg}></AntdIcon>;
};

FilterSquareOutline.displayName = 'FilterSquareOutline';
FilterSquareOutline.inheritAttrs = false;
export default FilterSquareOutline;