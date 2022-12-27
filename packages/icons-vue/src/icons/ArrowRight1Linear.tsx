// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowRight1LinearSvg from '@ant-design/icons-svg/lib/asn/ArrowRight1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowRight1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowRight1Linear: ArrowRight1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowRight1LinearSvg}></AntdIcon>;
};

ArrowRight1Linear.displayName = 'ArrowRight1Linear';
ArrowRight1Linear.inheritAttrs = false;
export default ArrowRight1Linear;