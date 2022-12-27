// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MicrophoneBrokenSvg from '@ant-design/icons-svg/lib/asn/MicrophoneBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MicrophoneBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MicrophoneBroken: MicrophoneBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MicrophoneBrokenSvg}></AntdIcon>;
};

MicrophoneBroken.displayName = 'MicrophoneBroken';
MicrophoneBroken.inheritAttrs = false;
export default MicrophoneBroken;