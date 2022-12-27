// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import IconBrokenSvg from '@ant-design/icons-svg/lib/asn/IconBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface IconBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const IconBroken: IconBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={IconBrokenSvg}></AntdIcon>;
};

IconBroken.displayName = 'IconBroken';
IconBroken.inheritAttrs = false;
export default IconBroken;