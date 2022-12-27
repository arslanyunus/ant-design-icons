// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterRemoveTwoToneSvg from '@ant-design/icons-svg/lib/asn/FilterRemoveTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterRemoveTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterRemoveTwoTone: FilterRemoveTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterRemoveTwoToneSvg}></AntdIcon>;
};

FilterRemoveTwoTone.displayName = 'FilterRemoveTwoTone';
FilterRemoveTwoTone.inheritAttrs = false;
export default FilterRemoveTwoTone;