// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterRemoveBrokenSvg from '@ant-design/icons-svg/lib/asn/FilterRemoveBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterRemoveBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterRemoveBroken: FilterRemoveBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterRemoveBrokenSvg}></AntdIcon>;
};

FilterRemoveBroken.displayName = 'FilterRemoveBroken';
FilterRemoveBroken.inheritAttrs = false;
export default FilterRemoveBroken;