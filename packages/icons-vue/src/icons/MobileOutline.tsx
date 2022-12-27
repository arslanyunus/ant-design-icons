// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MobileOutlineSvg from '@ant-design/icons-svg/lib/asn/MobileOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MobileOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MobileOutline: MobileOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MobileOutlineSvg}></AntdIcon>;
};

MobileOutline.displayName = 'MobileOutline';
MobileOutline.inheritAttrs = false;
export default MobileOutline;