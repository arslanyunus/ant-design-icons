// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudPlusLinearSvg from '@ant-design/icons-svg/lib/asn/CloudPlusLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudPlusLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudPlusLinear: CloudPlusLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudPlusLinearSvg}></AntdIcon>;
};

CloudPlusLinear.displayName = 'CloudPlusLinear';
CloudPlusLinear.inheritAttrs = false;
export default CloudPlusLinear;