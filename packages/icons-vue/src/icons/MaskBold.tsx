// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MaskBoldSvg from '@ant-design/icons-svg/lib/asn/MaskBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MaskBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MaskBold: MaskBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MaskBoldSvg}></AntdIcon>;
};

MaskBold.displayName = 'MaskBold';
MaskBold.inheritAttrs = false;
export default MaskBold;