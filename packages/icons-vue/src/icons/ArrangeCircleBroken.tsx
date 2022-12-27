// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrangeCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/ArrangeCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrangeCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrangeCircleBroken: ArrangeCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrangeCircleBrokenSvg}></AntdIcon>;
};

ArrangeCircleBroken.displayName = 'ArrangeCircleBroken';
ArrangeCircleBroken.inheritAttrs = false;
export default ArrangeCircleBroken;