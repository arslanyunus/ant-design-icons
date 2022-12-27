// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UnlockLinearSvg from '@ant-design/icons-svg/lib/asn/UnlockLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UnlockLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UnlockLinear: UnlockLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UnlockLinearSvg}></AntdIcon>;
};

UnlockLinear.displayName = 'UnlockLinear';
UnlockLinear.inheritAttrs = false;
export default UnlockLinear;