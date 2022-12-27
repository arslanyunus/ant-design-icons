// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FingerCricleLinearSvg from '@ant-design/icons-svg/lib/asn/FingerCricleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FingerCricleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FingerCricleLinear: FingerCricleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FingerCricleLinearSvg}></AntdIcon>;
};

FingerCricleLinear.displayName = 'FingerCricleLinear';
FingerCricleLinear.inheritAttrs = false;
export default FingerCricleLinear;