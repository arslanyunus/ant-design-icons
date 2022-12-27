// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSquareRightLinearSvg from '@ant-design/icons-svg/lib/asn/ArrowSquareRightLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSquareRightLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSquareRightLinear: ArrowSquareRightLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSquareRightLinearSvg}></AntdIcon>;
};

ArrowSquareRightLinear.displayName = 'ArrowSquareRightLinear';
ArrowSquareRightLinear.inheritAttrs = false;
export default ArrowSquareRightLinear;