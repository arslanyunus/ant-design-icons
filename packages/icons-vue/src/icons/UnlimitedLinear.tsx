// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UnlimitedLinearSvg from '@ant-design/icons-svg/lib/asn/UnlimitedLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UnlimitedLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UnlimitedLinear: UnlimitedLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UnlimitedLinearSvg}></AntdIcon>;
};

UnlimitedLinear.displayName = 'UnlimitedLinear';
UnlimitedLinear.inheritAttrs = false;
export default UnlimitedLinear;