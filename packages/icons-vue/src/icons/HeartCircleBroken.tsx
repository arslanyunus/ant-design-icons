// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/HeartCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartCircleBroken: HeartCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartCircleBrokenSvg}></AntdIcon>;
};

HeartCircleBroken.displayName = 'HeartCircleBroken';
HeartCircleBroken.inheritAttrs = false;
export default HeartCircleBroken;