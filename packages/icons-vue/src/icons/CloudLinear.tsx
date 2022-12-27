// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudLinearSvg from '@ant-design/icons-svg/lib/asn/CloudLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudLinear: CloudLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudLinearSvg}></AntdIcon>;
};

CloudLinear.displayName = 'CloudLinear';
CloudLinear.inheritAttrs = false;
export default CloudLinear;