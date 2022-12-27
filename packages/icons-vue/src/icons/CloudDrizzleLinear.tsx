// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudDrizzleLinearSvg from '@ant-design/icons-svg/lib/asn/CloudDrizzleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudDrizzleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudDrizzleLinear: CloudDrizzleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudDrizzleLinearSvg}></AntdIcon>;
};

CloudDrizzleLinear.displayName = 'CloudDrizzleLinear';
CloudDrizzleLinear.inheritAttrs = false;
export default CloudDrizzleLinear;