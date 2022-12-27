// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VoiceSquareBulkSvg from '@ant-design/icons-svg/lib/asn/VoiceSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VoiceSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VoiceSquareBulk: VoiceSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VoiceSquareBulkSvg}></AntdIcon>;
};

VoiceSquareBulk.displayName = 'VoiceSquareBulk';
VoiceSquareBulk.inheritAttrs = false;
export default VoiceSquareBulk;