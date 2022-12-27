// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SizeOutlineSvg from '@ant-design/icons-svg/lib/asn/SizeOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SizeOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SizeOutline: SizeOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SizeOutlineSvg}></AntdIcon>;
};

SizeOutline.displayName = 'SizeOutline';
SizeOutline.inheritAttrs = false;
export default SizeOutline;