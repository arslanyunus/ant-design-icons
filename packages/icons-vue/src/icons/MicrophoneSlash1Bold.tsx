// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MicrophoneSlash1BoldSvg from '@ant-design/icons-svg/lib/asn/MicrophoneSlash1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MicrophoneSlash1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MicrophoneSlash1Bold: MicrophoneSlash1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MicrophoneSlash1BoldSvg}></AntdIcon>;
};

MicrophoneSlash1Bold.displayName = 'MicrophoneSlash1Bold';
MicrophoneSlash1Bold.inheritAttrs = false;
export default MicrophoneSlash1Bold;