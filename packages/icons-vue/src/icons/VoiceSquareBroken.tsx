// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VoiceSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/VoiceSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VoiceSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VoiceSquareBroken: VoiceSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VoiceSquareBrokenSvg}></AntdIcon>;
};

VoiceSquareBroken.displayName = 'VoiceSquareBroken';
VoiceSquareBroken.inheritAttrs = false;
export default VoiceSquareBroken;