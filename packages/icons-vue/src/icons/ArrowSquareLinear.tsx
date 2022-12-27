// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSquareLinearSvg from '@ant-design/icons-svg/lib/asn/ArrowSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSquareLinear: ArrowSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSquareLinearSvg}></AntdIcon>;
};

ArrowSquareLinear.displayName = 'ArrowSquareLinear';
ArrowSquareLinear.inheritAttrs = false;
export default ArrowSquareLinear;