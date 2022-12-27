// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectboxSendBoldSvg from '@ant-design/icons-svg/lib/asn/DirectboxSendBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectboxSendBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectboxSendBold: DirectboxSendBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectboxSendBoldSvg}></AntdIcon>;
};

DirectboxSendBold.displayName = 'DirectboxSendBold';
DirectboxSendBold.inheritAttrs = false;
export default DirectboxSendBold;