// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MaskOutlineSvg from '@ant-design/icons-svg/lib/asn/MaskOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MaskOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MaskOutline: MaskOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MaskOutlineSvg}></AntdIcon>;
};

MaskOutline.displayName = 'MaskOutline';
MaskOutline.inheritAttrs = false;
export default MaskOutline;