// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/FilterSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterSquareTwoTone: FilterSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterSquareTwoToneSvg}></AntdIcon>;
};

FilterSquareTwoTone.displayName = 'FilterSquareTwoTone';
FilterSquareTwoTone.inheritAttrs = false;
export default FilterSquareTwoTone;