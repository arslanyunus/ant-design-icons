// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudRemoveLinearSvg from '@ant-design/icons-svg/lib/asn/CloudRemoveLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudRemoveLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudRemoveLinear: CloudRemoveLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudRemoveLinearSvg}></AntdIcon>;
};

CloudRemoveLinear.displayName = 'CloudRemoveLinear';
CloudRemoveLinear.inheritAttrs = false;
export default CloudRemoveLinear;