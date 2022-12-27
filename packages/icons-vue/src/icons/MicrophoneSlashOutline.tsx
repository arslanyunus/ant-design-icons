// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MicrophoneSlashOutlineSvg from '@ant-design/icons-svg/lib/asn/MicrophoneSlashOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MicrophoneSlashOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MicrophoneSlashOutline: MicrophoneSlashOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MicrophoneSlashOutlineSvg}></AntdIcon>;
};

MicrophoneSlashOutline.displayName = 'MicrophoneSlashOutline';
MicrophoneSlashOutline.inheritAttrs = false;
export default MicrophoneSlashOutline;