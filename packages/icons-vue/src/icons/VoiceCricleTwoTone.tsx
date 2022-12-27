// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VoiceCricleTwoToneSvg from '@ant-design/icons-svg/lib/asn/VoiceCricleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VoiceCricleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VoiceCricleTwoTone: VoiceCricleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VoiceCricleTwoToneSvg}></AntdIcon>;
};

VoiceCricleTwoTone.displayName = 'VoiceCricleTwoTone';
VoiceCricleTwoTone.inheritAttrs = false;
export default VoiceCricleTwoTone;