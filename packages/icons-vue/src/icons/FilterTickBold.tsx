// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterTickBoldSvg from '@ant-design/icons-svg/lib/asn/FilterTickBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterTickBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterTickBold: FilterTickBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterTickBoldSvg}></AntdIcon>;
};

FilterTickBold.displayName = 'FilterTickBold';
FilterTickBold.inheritAttrs = false;
export default FilterTickBold;