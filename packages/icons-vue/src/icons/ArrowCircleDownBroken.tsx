// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowCircleDownBrokenSvg from '@ant-design/icons-svg/lib/asn/ArrowCircleDownBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowCircleDownBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowCircleDownBroken: ArrowCircleDownBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowCircleDownBrokenSvg}></AntdIcon>;
};

ArrowCircleDownBroken.displayName = 'ArrowCircleDownBroken';
ArrowCircleDownBroken.inheritAttrs = false;
export default ArrowCircleDownBroken;