// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectInboxTwoToneSvg from '@ant-design/icons-svg/lib/asn/DirectInboxTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectInboxTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectInboxTwoTone: DirectInboxTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectInboxTwoToneSvg}></AntdIcon>;
};

DirectInboxTwoTone.displayName = 'DirectInboxTwoTone';
DirectInboxTwoTone.inheritAttrs = false;
export default DirectInboxTwoTone;