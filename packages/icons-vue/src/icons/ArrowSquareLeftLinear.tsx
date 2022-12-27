// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSquareLeftLinearSvg from '@ant-design/icons-svg/lib/asn/ArrowSquareLeftLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSquareLeftLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSquareLeftLinear: ArrowSquareLeftLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSquareLeftLinearSvg}></AntdIcon>;
};

ArrowSquareLeftLinear.displayName = 'ArrowSquareLeftLinear';
ArrowSquareLeftLinear.inheritAttrs = false;
export default ArrowSquareLeftLinear;