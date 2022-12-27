// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmileysLinearSvg from '@ant-design/icons-svg/lib/asn/SmileysLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmileysLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmileysLinear: SmileysLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmileysLinearSvg}></AntdIcon>;
};

SmileysLinear.displayName = 'SmileysLinear';
SmileysLinear.inheritAttrs = false;
export default SmileysLinear;