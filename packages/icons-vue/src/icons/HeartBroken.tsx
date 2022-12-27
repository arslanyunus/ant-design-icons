// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartBrokenSvg from '@ant-design/icons-svg/lib/asn/HeartBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartBroken: HeartBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartBrokenSvg}></AntdIcon>;
};

HeartBroken.displayName = 'HeartBroken';
HeartBroken.inheritAttrs = false;
export default HeartBroken;