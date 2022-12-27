// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterTickTwoToneSvg from '@ant-design/icons-svg/lib/asn/FilterTickTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterTickTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterTickTwoTone: FilterTickTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterTickTwoToneSvg}></AntdIcon>;
};

FilterTickTwoTone.displayName = 'FilterTickTwoTone';
FilterTickTwoTone.inheritAttrs = false;
export default FilterTickTwoTone;