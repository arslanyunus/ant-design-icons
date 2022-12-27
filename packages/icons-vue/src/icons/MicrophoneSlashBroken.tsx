// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MicrophoneSlashBrokenSvg from '@ant-design/icons-svg/lib/asn/MicrophoneSlashBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MicrophoneSlashBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MicrophoneSlashBroken: MicrophoneSlashBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MicrophoneSlashBrokenSvg}></AntdIcon>;
};

MicrophoneSlashBroken.displayName = 'MicrophoneSlashBroken';
MicrophoneSlashBroken.inheritAttrs = false;
export default MicrophoneSlashBroken;