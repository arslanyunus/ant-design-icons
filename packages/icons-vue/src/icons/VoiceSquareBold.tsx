// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VoiceSquareBoldSvg from '@ant-design/icons-svg/lib/asn/VoiceSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VoiceSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VoiceSquareBold: VoiceSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VoiceSquareBoldSvg}></AntdIcon>;
};

VoiceSquareBold.displayName = 'VoiceSquareBold';
VoiceSquareBold.inheritAttrs = false;
export default VoiceSquareBold;