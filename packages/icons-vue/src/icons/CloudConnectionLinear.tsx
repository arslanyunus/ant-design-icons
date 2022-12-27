// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudConnectionLinearSvg from '@ant-design/icons-svg/lib/asn/CloudConnectionLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudConnectionLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudConnectionLinear: CloudConnectionLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudConnectionLinearSvg}></AntdIcon>;
};

CloudConnectionLinear.displayName = 'CloudConnectionLinear';
CloudConnectionLinear.inheritAttrs = false;
export default CloudConnectionLinear;