// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmartCarLinearSvg from '@ant-design/icons-svg/lib/asn/SmartCarLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmartCarLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmartCarLinear: SmartCarLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmartCarLinearSvg}></AntdIcon>;
};

SmartCarLinear.displayName = 'SmartCarLinear';
SmartCarLinear.inheritAttrs = false;
export default SmartCarLinear;