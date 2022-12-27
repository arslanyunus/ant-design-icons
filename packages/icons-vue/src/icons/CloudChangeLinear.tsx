// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudChangeLinearSvg from '@ant-design/icons-svg/lib/asn/CloudChangeLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudChangeLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudChangeLinear: CloudChangeLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudChangeLinearSvg}></AntdIcon>;
};

CloudChangeLinear.displayName = 'CloudChangeLinear';
CloudChangeLinear.inheritAttrs = false;
export default CloudChangeLinear;