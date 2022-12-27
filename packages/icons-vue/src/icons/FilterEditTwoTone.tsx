// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterEditTwoToneSvg from '@ant-design/icons-svg/lib/asn/FilterEditTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterEditTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterEditTwoTone: FilterEditTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterEditTwoToneSvg}></AntdIcon>;
};

FilterEditTwoTone.displayName = 'FilterEditTwoTone';
FilterEditTwoTone.inheritAttrs = false;
export default FilterEditTwoTone;