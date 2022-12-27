// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectSendLinearSvg from '@ant-design/icons-svg/lib/asn/DirectSendLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectSendLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectSendLinear: DirectSendLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectSendLinearSvg}></AntdIcon>;
};

DirectSendLinear.displayName = 'DirectSendLinear';
DirectSendLinear.inheritAttrs = false;
export default DirectSendLinear;