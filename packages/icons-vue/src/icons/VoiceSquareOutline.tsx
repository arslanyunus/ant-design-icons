// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VoiceSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/VoiceSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VoiceSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VoiceSquareOutline: VoiceSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VoiceSquareOutlineSvg}></AntdIcon>;
};

VoiceSquareOutline.displayName = 'VoiceSquareOutline';
VoiceSquareOutline.inheritAttrs = false;
export default VoiceSquareOutline;