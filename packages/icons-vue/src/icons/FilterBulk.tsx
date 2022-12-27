// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterBulkSvg from '@ant-design/icons-svg/lib/asn/FilterBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterBulk: FilterBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterBulkSvg}></AntdIcon>;
};

FilterBulk.displayName = 'FilterBulk';
FilterBulk.inheritAttrs = false;
export default FilterBulk;