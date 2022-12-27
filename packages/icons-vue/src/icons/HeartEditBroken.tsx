// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartEditBrokenSvg from '@ant-design/icons-svg/lib/asn/HeartEditBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartEditBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartEditBroken: HeartEditBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartEditBrokenSvg}></AntdIcon>;
};

HeartEditBroken.displayName = 'HeartEditBroken';
HeartEditBroken.inheritAttrs = false;
export default HeartEditBroken;