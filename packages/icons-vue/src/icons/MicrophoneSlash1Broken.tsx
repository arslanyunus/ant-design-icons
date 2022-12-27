// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MicrophoneSlash1BrokenSvg from '@ant-design/icons-svg/lib/asn/MicrophoneSlash1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MicrophoneSlash1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MicrophoneSlash1Broken: MicrophoneSlash1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MicrophoneSlash1BrokenSvg}></AntdIcon>;
};

MicrophoneSlash1Broken.displayName = 'MicrophoneSlash1Broken';
MicrophoneSlash1Broken.inheritAttrs = false;
export default MicrophoneSlash1Broken;