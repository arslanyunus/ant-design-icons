// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SpeakerOutlineSvg from '@ant-design/icons-svg/lib/asn/SpeakerOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SpeakerOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SpeakerOutline: SpeakerOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SpeakerOutlineSvg}></AntdIcon>;
};

SpeakerOutline.displayName = 'SpeakerOutline';
SpeakerOutline.inheritAttrs = false;
export default SpeakerOutline;