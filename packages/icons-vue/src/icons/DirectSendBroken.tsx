// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectSendBrokenSvg from '@ant-design/icons-svg/lib/asn/DirectSendBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectSendBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectSendBroken: DirectSendBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectSendBrokenSvg}></AntdIcon>;
};

DirectSendBroken.displayName = 'DirectSendBroken';
DirectSendBroken.inheritAttrs = false;
export default DirectSendBroken;