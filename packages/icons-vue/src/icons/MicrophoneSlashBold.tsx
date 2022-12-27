// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MicrophoneSlashBoldSvg from '@ant-design/icons-svg/lib/asn/MicrophoneSlashBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MicrophoneSlashBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MicrophoneSlashBold: MicrophoneSlashBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MicrophoneSlashBoldSvg}></AntdIcon>;
};

MicrophoneSlashBold.displayName = 'MicrophoneSlashBold';
MicrophoneSlashBold.inheritAttrs = false;
export default MicrophoneSlashBold;