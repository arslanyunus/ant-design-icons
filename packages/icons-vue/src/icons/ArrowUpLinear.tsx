// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowUpLinearSvg from '@ant-design/icons-svg/lib/asn/ArrowUpLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowUpLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowUpLinear: ArrowUpLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowUpLinearSvg}></AntdIcon>;
};

ArrowUpLinear.displayName = 'ArrowUpLinear';
ArrowUpLinear.inheritAttrs = false;
export default ArrowUpLinear;