// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MicrophoneBoldSvg from '@ant-design/icons-svg/lib/asn/MicrophoneBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MicrophoneBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MicrophoneBold: MicrophoneBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MicrophoneBoldSvg}></AntdIcon>;
};

MicrophoneBold.displayName = 'MicrophoneBold';
MicrophoneBold.inheritAttrs = false;
export default MicrophoneBold;