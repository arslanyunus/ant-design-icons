// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSquareDownLinearSvg from '@ant-design/icons-svg/lib/asn/ArrowSquareDownLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSquareDownLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSquareDownLinear: ArrowSquareDownLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSquareDownLinearSvg}></AntdIcon>;
};

ArrowSquareDownLinear.displayName = 'ArrowSquareDownLinear';
ArrowSquareDownLinear.inheritAttrs = false;
export default ArrowSquareDownLinear;