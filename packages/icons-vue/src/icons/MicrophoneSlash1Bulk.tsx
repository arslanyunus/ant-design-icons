// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MicrophoneSlash1BulkSvg from '@ant-design/icons-svg/lib/asn/MicrophoneSlash1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MicrophoneSlash1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MicrophoneSlash1Bulk: MicrophoneSlash1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MicrophoneSlash1BulkSvg}></AntdIcon>;
};

MicrophoneSlash1Bulk.displayName = 'MicrophoneSlash1Bulk';
MicrophoneSlash1Bulk.inheritAttrs = false;
export default MicrophoneSlash1Bulk;