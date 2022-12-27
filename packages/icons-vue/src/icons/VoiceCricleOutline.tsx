// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VoiceCricleOutlineSvg from '@ant-design/icons-svg/lib/asn/VoiceCricleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VoiceCricleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VoiceCricleOutline: VoiceCricleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VoiceCricleOutlineSvg}></AntdIcon>;
};

VoiceCricleOutline.displayName = 'VoiceCricleOutline';
VoiceCricleOutline.inheritAttrs = false;
export default VoiceCricleOutline;