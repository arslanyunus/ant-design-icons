// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VoiceCricleBulkSvg from '@ant-design/icons-svg/lib/asn/VoiceCricleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VoiceCricleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VoiceCricleBulk: VoiceCricleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VoiceCricleBulkSvg}></AntdIcon>;
};

VoiceCricleBulk.displayName = 'VoiceCricleBulk';
VoiceCricleBulk.inheritAttrs = false;
export default VoiceCricleBulk;