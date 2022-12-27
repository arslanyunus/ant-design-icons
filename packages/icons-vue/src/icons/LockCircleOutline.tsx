// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LockCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/LockCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LockCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LockCircleOutline: LockCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LockCircleOutlineSvg}></AntdIcon>;
};

LockCircleOutline.displayName = 'LockCircleOutline';
LockCircleOutline.inheritAttrs = false;
export default LockCircleOutline;