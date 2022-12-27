// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VoiceCricleLinearSvg from '@ant-design/icons-svg/lib/asn/VoiceCricleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VoiceCricleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VoiceCricleLinear: VoiceCricleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VoiceCricleLinearSvg}></AntdIcon>;
};

VoiceCricleLinear.displayName = 'VoiceCricleLinear';
VoiceCricleLinear.inheritAttrs = false;
export default VoiceCricleLinear;