// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterSearchTwoToneSvg from '@ant-design/icons-svg/lib/asn/FilterSearchTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterSearchTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterSearchTwoTone: FilterSearchTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterSearchTwoToneSvg}></AntdIcon>;
};

FilterSearchTwoTone.displayName = 'FilterSearchTwoTone';
FilterSearchTwoTone.inheritAttrs = false;
export default FilterSearchTwoTone;