// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VoiceCricleBoldSvg from '@ant-design/icons-svg/lib/asn/VoiceCricleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VoiceCricleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VoiceCricleBold: VoiceCricleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VoiceCricleBoldSvg}></AntdIcon>;
};

VoiceCricleBold.displayName = 'VoiceCricleBold';
VoiceCricleBold.inheritAttrs = false;
export default VoiceCricleBold;