// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterEditBulkSvg from '@ant-design/icons-svg/lib/asn/FilterEditBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterEditBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterEditBulk: FilterEditBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterEditBulkSvg}></AntdIcon>;
};

FilterEditBulk.displayName = 'FilterEditBulk';
FilterEditBulk.inheritAttrs = false;
export default FilterEditBulk;