// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MicrophoneLinearSvg from '@ant-design/icons-svg/lib/asn/MicrophoneLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MicrophoneLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MicrophoneLinear: MicrophoneLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MicrophoneLinearSvg}></AntdIcon>;
};

MicrophoneLinear.displayName = 'MicrophoneLinear';
MicrophoneLinear.inheritAttrs = false;
export default MicrophoneLinear;