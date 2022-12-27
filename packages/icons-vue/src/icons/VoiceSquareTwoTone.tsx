// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VoiceSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/VoiceSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VoiceSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VoiceSquareTwoTone: VoiceSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VoiceSquareTwoToneSvg}></AntdIcon>;
};

VoiceSquareTwoTone.displayName = 'VoiceSquareTwoTone';
VoiceSquareTwoTone.inheritAttrs = false;
export default VoiceSquareTwoTone;