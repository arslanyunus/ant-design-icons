// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartTickBrokenSvg from '@ant-design/icons-svg/lib/asn/HeartTickBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartTickBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartTickBroken: HeartTickBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartTickBrokenSvg}></AntdIcon>;
};

HeartTickBroken.displayName = 'HeartTickBroken';
HeartTickBroken.inheritAttrs = false;
export default HeartTickBroken;