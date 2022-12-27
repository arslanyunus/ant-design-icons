// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterAddBulkSvg from '@ant-design/icons-svg/lib/asn/FilterAddBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterAddBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterAddBulk: FilterAddBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterAddBulkSvg}></AntdIcon>;
};

FilterAddBulk.displayName = 'FilterAddBulk';
FilterAddBulk.inheritAttrs = false;
export default FilterAddBulk;