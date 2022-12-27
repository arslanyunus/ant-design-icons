// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MicrophoneSlash1TwoToneSvg from '@ant-design/icons-svg/lib/asn/MicrophoneSlash1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MicrophoneSlash1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MicrophoneSlash1TwoTone: MicrophoneSlash1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MicrophoneSlash1TwoToneSvg}></AntdIcon>;
};

MicrophoneSlash1TwoTone.displayName = 'MicrophoneSlash1TwoTone';
MicrophoneSlash1TwoTone.inheritAttrs = false;
export default MicrophoneSlash1TwoTone;