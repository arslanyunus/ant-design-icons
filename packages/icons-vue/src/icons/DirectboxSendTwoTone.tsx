// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectboxSendTwoToneSvg from '@ant-design/icons-svg/lib/asn/DirectboxSendTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectboxSendTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectboxSendTwoTone: DirectboxSendTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectboxSendTwoToneSvg}></AntdIcon>;
};

DirectboxSendTwoTone.displayName = 'DirectboxSendTwoTone';
DirectboxSendTwoTone.inheritAttrs = false;
export default DirectboxSendTwoTone;