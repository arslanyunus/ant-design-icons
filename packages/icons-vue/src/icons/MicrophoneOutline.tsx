// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MicrophoneOutlineSvg from '@ant-design/icons-svg/lib/asn/MicrophoneOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MicrophoneOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MicrophoneOutline: MicrophoneOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MicrophoneOutlineSvg}></AntdIcon>;
};

MicrophoneOutline.displayName = 'MicrophoneOutline';
MicrophoneOutline.inheritAttrs = false;
export default MicrophoneOutline;