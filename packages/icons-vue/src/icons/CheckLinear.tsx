// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CheckLinearSvg from '@ant-design/icons-svg/lib/asn/CheckLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CheckLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CheckLinear: CheckLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CheckLinearSvg}></AntdIcon>;
};

CheckLinear.displayName = 'CheckLinear';
CheckLinear.inheritAttrs = false;
export default CheckLinear;