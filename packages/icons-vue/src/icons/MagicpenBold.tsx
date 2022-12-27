// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MagicpenBoldSvg from '@ant-design/icons-svg/lib/asn/MagicpenBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MagicpenBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MagicpenBold: MagicpenBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MagicpenBoldSvg}></AntdIcon>;
};

MagicpenBold.displayName = 'MagicpenBold';
MagicpenBold.inheritAttrs = false;
export default MagicpenBold;