// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SpeakerBoldSvg from '@ant-design/icons-svg/lib/asn/SpeakerBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SpeakerBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SpeakerBold: SpeakerBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SpeakerBoldSvg}></AntdIcon>;
};

SpeakerBold.displayName = 'SpeakerBold';
SpeakerBold.inheritAttrs = false;
export default SpeakerBold;