// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SunOutlineSvg from '@ant-design/icons-svg/lib/asn/SunOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SunOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SunOutline: SunOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SunOutlineSvg}></AntdIcon>;
};

SunOutline.displayName = 'SunOutline';
SunOutline.inheritAttrs = false;
export default SunOutline;