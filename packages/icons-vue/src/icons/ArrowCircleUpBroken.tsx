// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowCircleUpBrokenSvg from '@ant-design/icons-svg/lib/asn/ArrowCircleUpBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowCircleUpBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowCircleUpBroken: ArrowCircleUpBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowCircleUpBrokenSvg}></AntdIcon>;
};

ArrowCircleUpBroken.displayName = 'ArrowCircleUpBroken';
ArrowCircleUpBroken.inheritAttrs = false;
export default ArrowCircleUpBroken;