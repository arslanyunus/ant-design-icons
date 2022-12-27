// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoonOutlineSvg from '@ant-design/icons-svg/lib/asn/MoonOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoonOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoonOutline: MoonOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoonOutlineSvg}></AntdIcon>;
};

MoonOutline.displayName = 'MoonOutline';
MoonOutline.inheritAttrs = false;
export default MoonOutline;