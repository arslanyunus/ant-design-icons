// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudMinusLinearSvg from '@ant-design/icons-svg/lib/asn/CloudMinusLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudMinusLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudMinusLinear: CloudMinusLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudMinusLinearSvg}></AntdIcon>;
};

CloudMinusLinear.displayName = 'CloudMinusLinear';
CloudMinusLinear.inheritAttrs = false;
export default CloudMinusLinear;