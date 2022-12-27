// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InstagramBrokenSvg from '@ant-design/icons-svg/lib/asn/InstagramBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface InstagramBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const InstagramBroken: InstagramBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InstagramBrokenSvg}></AntdIcon>;
};

InstagramBroken.displayName = 'InstagramBroken';
InstagramBroken.inheritAttrs = false;
export default InstagramBroken;