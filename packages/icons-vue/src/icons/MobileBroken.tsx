// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MobileBrokenSvg from '@ant-design/icons-svg/lib/asn/MobileBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MobileBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MobileBroken: MobileBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MobileBrokenSvg}></AntdIcon>;
};

MobileBroken.displayName = 'MobileBroken';
MobileBroken.inheritAttrs = false;
export default MobileBroken;