// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MicroscopeBrokenSvg from '@ant-design/icons-svg/lib/asn/MicroscopeBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MicroscopeBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MicroscopeBroken: MicroscopeBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MicroscopeBrokenSvg}></AntdIcon>;
};

MicroscopeBroken.displayName = 'MicroscopeBroken';
MicroscopeBroken.inheritAttrs = false;
export default MicroscopeBroken;