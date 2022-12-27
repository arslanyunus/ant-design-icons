// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SafeHomeLinearSvg from '@ant-design/icons-svg/lib/asn/SafeHomeLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SafeHomeLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SafeHomeLinear: SafeHomeLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SafeHomeLinearSvg}></AntdIcon>;
};

SafeHomeLinear.displayName = 'SafeHomeLinear';
SafeHomeLinear.inheritAttrs = false;
export default SafeHomeLinear;