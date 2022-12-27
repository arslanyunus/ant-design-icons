// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MicrophoneSlash1LinearSvg from '@ant-design/icons-svg/lib/asn/MicrophoneSlash1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MicrophoneSlash1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MicrophoneSlash1Linear: MicrophoneSlash1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MicrophoneSlash1LinearSvg}></AntdIcon>;
};

MicrophoneSlash1Linear.displayName = 'MicrophoneSlash1Linear';
MicrophoneSlash1Linear.inheritAttrs = false;
export default MicrophoneSlash1Linear;