// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterRemoveBoldSvg from '@ant-design/icons-svg/lib/asn/FilterRemoveBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterRemoveBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterRemoveBold: FilterRemoveBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterRemoveBoldSvg}></AntdIcon>;
};

FilterRemoveBold.displayName = 'FilterRemoveBold';
FilterRemoveBold.inheritAttrs = false;
export default FilterRemoveBold;