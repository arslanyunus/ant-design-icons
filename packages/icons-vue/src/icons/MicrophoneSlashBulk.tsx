// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MicrophoneSlashBulkSvg from '@ant-design/icons-svg/lib/asn/MicrophoneSlashBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MicrophoneSlashBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MicrophoneSlashBulk: MicrophoneSlashBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MicrophoneSlashBulkSvg}></AntdIcon>;
};

MicrophoneSlashBulk.displayName = 'MicrophoneSlashBulk';
MicrophoneSlashBulk.inheritAttrs = false;
export default MicrophoneSlashBulk;