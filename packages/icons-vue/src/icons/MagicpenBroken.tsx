// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MagicpenBrokenSvg from '@ant-design/icons-svg/lib/asn/MagicpenBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MagicpenBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MagicpenBroken: MagicpenBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MagicpenBrokenSvg}></AntdIcon>;
};

MagicpenBroken.displayName = 'MagicpenBroken';
MagicpenBroken.inheritAttrs = false;
export default MagicpenBroken;