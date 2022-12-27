// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VoiceCricleBrokenSvg from '@ant-design/icons-svg/lib/asn/VoiceCricleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VoiceCricleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VoiceCricleBroken: VoiceCricleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VoiceCricleBrokenSvg}></AntdIcon>;
};

VoiceCricleBroken.displayName = 'VoiceCricleBroken';
VoiceCricleBroken.inheritAttrs = false;
export default VoiceCricleBroken;