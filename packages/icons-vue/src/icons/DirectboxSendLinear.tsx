// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectboxSendLinearSvg from '@ant-design/icons-svg/lib/asn/DirectboxSendLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectboxSendLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectboxSendLinear: DirectboxSendLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectboxSendLinearSvg}></AntdIcon>;
};

DirectboxSendLinear.displayName = 'DirectboxSendLinear';
DirectboxSendLinear.inheritAttrs = false;
export default DirectboxSendLinear;