// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterAddTwoToneSvg from '@ant-design/icons-svg/lib/asn/FilterAddTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterAddTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterAddTwoTone: FilterAddTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterAddTwoToneSvg}></AntdIcon>;
};

FilterAddTwoTone.displayName = 'FilterAddTwoTone';
FilterAddTwoTone.inheritAttrs = false;
export default FilterAddTwoTone;