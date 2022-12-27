// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UnlockBrokenSvg from '@ant-design/icons-svg/lib/asn/UnlockBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UnlockBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UnlockBroken: UnlockBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UnlockBrokenSvg}></AntdIcon>;
};

UnlockBroken.displayName = 'UnlockBroken';
UnlockBroken.inheritAttrs = false;
export default UnlockBroken;