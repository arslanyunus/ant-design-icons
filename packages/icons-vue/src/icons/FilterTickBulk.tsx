// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterTickBulkSvg from '@ant-design/icons-svg/lib/asn/FilterTickBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterTickBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterTickBulk: FilterTickBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterTickBulkSvg}></AntdIcon>;
};

FilterTickBulk.displayName = 'FilterTickBulk';
FilterTickBulk.inheritAttrs = false;
export default FilterTickBulk;