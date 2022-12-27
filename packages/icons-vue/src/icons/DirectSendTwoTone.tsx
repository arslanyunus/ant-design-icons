// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectSendTwoToneSvg from '@ant-design/icons-svg/lib/asn/DirectSendTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectSendTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectSendTwoTone: DirectSendTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectSendTwoToneSvg}></AntdIcon>;
};

DirectSendTwoTone.displayName = 'DirectSendTwoTone';
DirectSendTwoTone.inheritAttrs = false;
export default DirectSendTwoTone;