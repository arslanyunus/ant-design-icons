// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SortBrokenSvg from '@ant-design/icons-svg/lib/asn/SortBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SortBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SortBroken: SortBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SortBrokenSvg}></AntdIcon>;
};

SortBroken.displayName = 'SortBroken';
SortBroken.inheritAttrs = false;
export default SortBroken;