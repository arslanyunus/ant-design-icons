// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UnlockOutlineSvg from '@ant-design/icons-svg/lib/asn/UnlockOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UnlockOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UnlockOutline: UnlockOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UnlockOutlineSvg}></AntdIcon>;
};

UnlockOutline.displayName = 'UnlockOutline';
UnlockOutline.inheritAttrs = false;
export default UnlockOutline;