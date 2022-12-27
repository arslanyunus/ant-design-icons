// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterSquareBulkSvg from '@ant-design/icons-svg/lib/asn/FilterSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterSquareBulk: FilterSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterSquareBulkSvg}></AntdIcon>;
};

FilterSquareBulk.displayName = 'FilterSquareBulk';
FilterSquareBulk.inheritAttrs = false;
export default FilterSquareBulk;