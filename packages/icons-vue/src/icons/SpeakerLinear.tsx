// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SpeakerLinearSvg from '@ant-design/icons-svg/lib/asn/SpeakerLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SpeakerLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SpeakerLinear: SpeakerLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SpeakerLinearSvg}></AntdIcon>;
};

SpeakerLinear.displayName = 'SpeakerLinear';
SpeakerLinear.inheritAttrs = false;
export default SpeakerLinear;