// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MicrophoneSlashLinearSvg from '@ant-design/icons-svg/lib/asn/MicrophoneSlashLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MicrophoneSlashLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MicrophoneSlashLinear: MicrophoneSlashLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MicrophoneSlashLinearSvg}></AntdIcon>;
};

MicrophoneSlashLinear.displayName = 'MicrophoneSlashLinear';
MicrophoneSlashLinear.inheritAttrs = false;
export default MicrophoneSlashLinear;