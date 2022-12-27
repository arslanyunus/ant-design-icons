// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UnlockBoldSvg from '@ant-design/icons-svg/lib/asn/UnlockBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UnlockBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UnlockBold: UnlockBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UnlockBoldSvg}></AntdIcon>;
};

UnlockBold.displayName = 'UnlockBold';
UnlockBold.inheritAttrs = false;
export default UnlockBold;