// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmartHomeLinearSvg from '@ant-design/icons-svg/lib/asn/SmartHomeLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmartHomeLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmartHomeLinear: SmartHomeLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmartHomeLinearSvg}></AntdIcon>;
};

SmartHomeLinear.displayName = 'SmartHomeLinear';
SmartHomeLinear.inheritAttrs = false;
export default SmartHomeLinear;