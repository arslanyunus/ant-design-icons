// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VerifyLinearSvg from '@ant-design/icons-svg/lib/asn/VerifyLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VerifyLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VerifyLinear: VerifyLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VerifyLinearSvg}></AntdIcon>;
};

VerifyLinear.displayName = 'VerifyLinear';
VerifyLinear.inheritAttrs = false;
export default VerifyLinear;