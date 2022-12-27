// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SpeakerBulkSvg from '@ant-design/icons-svg/lib/asn/SpeakerBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SpeakerBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SpeakerBulk: SpeakerBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SpeakerBulkSvg}></AntdIcon>;
};

SpeakerBulk.displayName = 'SpeakerBulk';
SpeakerBulk.inheritAttrs = false;
export default SpeakerBulk;