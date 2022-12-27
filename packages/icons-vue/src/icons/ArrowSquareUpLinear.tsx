// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSquareUpLinearSvg from '@ant-design/icons-svg/lib/asn/ArrowSquareUpLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSquareUpLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSquareUpLinear: ArrowSquareUpLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSquareUpLinearSvg}></AntdIcon>;
};

ArrowSquareUpLinear.displayName = 'ArrowSquareUpLinear';
ArrowSquareUpLinear.inheritAttrs = false;
export default ArrowSquareUpLinear;