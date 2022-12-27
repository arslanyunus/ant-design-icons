// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LockOutlineSvg from '@ant-design/icons-svg/lib/asn/LockOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LockOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LockOutline: LockOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LockOutlineSvg}></AntdIcon>;
};

LockOutline.displayName = 'LockOutline';
LockOutline.inheritAttrs = false;
export default LockOutline;