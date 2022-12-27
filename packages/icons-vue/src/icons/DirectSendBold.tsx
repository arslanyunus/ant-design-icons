// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectSendBoldSvg from '@ant-design/icons-svg/lib/asn/DirectSendBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectSendBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectSendBold: DirectSendBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectSendBoldSvg}></AntdIcon>;
};

DirectSendBold.displayName = 'DirectSendBold';
DirectSendBold.inheritAttrs = false;
export default DirectSendBold;