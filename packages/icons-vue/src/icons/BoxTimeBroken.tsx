// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoxTimeBrokenSvg from '@ant-design/icons-svg/lib/asn/BoxTimeBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoxTimeBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoxTimeBroken: BoxTimeBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxTimeBrokenSvg}></AntdIcon>;
};

BoxTimeBroken.displayName = 'BoxTimeBroken';
BoxTimeBroken.inheritAttrs = false;
export default BoxTimeBroken;