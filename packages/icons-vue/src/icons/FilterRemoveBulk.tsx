// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterRemoveBulkSvg from '@ant-design/icons-svg/lib/asn/FilterRemoveBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterRemoveBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterRemoveBulk: FilterRemoveBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterRemoveBulkSvg}></AntdIcon>;
};

FilterRemoveBulk.displayName = 'FilterRemoveBulk';
FilterRemoveBulk.inheritAttrs = false;
export default FilterRemoveBulk;