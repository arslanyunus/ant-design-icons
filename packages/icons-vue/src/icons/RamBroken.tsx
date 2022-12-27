// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RamBrokenSvg from '@ant-design/icons-svg/lib/asn/RamBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RamBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RamBroken: RamBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RamBrokenSvg}></AntdIcon>;
};

RamBroken.displayName = 'RamBroken';
RamBroken.inheritAttrs = false;
export default RamBroken;