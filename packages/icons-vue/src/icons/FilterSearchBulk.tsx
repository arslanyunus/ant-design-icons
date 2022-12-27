// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterSearchBulkSvg from '@ant-design/icons-svg/lib/asn/FilterSearchBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterSearchBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterSearchBulk: FilterSearchBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterSearchBulkSvg}></AntdIcon>;
};

FilterSearchBulk.displayName = 'FilterSearchBulk';
FilterSearchBulk.inheritAttrs = false;
export default FilterSearchBulk;