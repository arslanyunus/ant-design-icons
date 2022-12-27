// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MicrophoneSlash1OutlineSvg from '@ant-design/icons-svg/lib/asn/MicrophoneSlash1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MicrophoneSlash1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MicrophoneSlash1Outline: MicrophoneSlash1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MicrophoneSlash1OutlineSvg}></AntdIcon>;
};

MicrophoneSlash1Outline.displayName = 'MicrophoneSlash1Outline';
MicrophoneSlash1Outline.inheritAttrs = false;
export default MicrophoneSlash1Outline;