// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowRight3LinearSvg from '@ant-design/icons-svg/lib/asn/ArrowRight3Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowRight3LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowRight3Linear: ArrowRight3LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowRight3LinearSvg}></AntdIcon>;
};

ArrowRight3Linear.displayName = 'ArrowRight3Linear';
ArrowRight3Linear.inheritAttrs = false;
export default ArrowRight3Linear;