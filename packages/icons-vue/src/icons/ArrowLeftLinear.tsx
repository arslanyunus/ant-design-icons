// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowLeftLinearSvg from '@ant-design/icons-svg/lib/asn/ArrowLeftLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowLeftLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowLeftLinear: ArrowLeftLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowLeftLinearSvg}></AntdIcon>;
};

ArrowLeftLinear.displayName = 'ArrowLeftLinear';
ArrowLeftLinear.inheritAttrs = false;
export default ArrowLeftLinear;