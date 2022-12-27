// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowLeft1LinearSvg from '@ant-design/icons-svg/lib/asn/ArrowLeft1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowLeft1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowLeft1Linear: ArrowLeft1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowLeft1LinearSvg}></AntdIcon>;
};

ArrowLeft1Linear.displayName = 'ArrowLeft1Linear';
ArrowLeft1Linear.inheritAttrs = false;
export default ArrowLeft1Linear;