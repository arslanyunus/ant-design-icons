// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowLeft3LinearSvg from '@ant-design/icons-svg/lib/asn/ArrowLeft3Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowLeft3LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowLeft3Linear: ArrowLeft3LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowLeft3LinearSvg}></AntdIcon>;
};

ArrowLeft3Linear.displayName = 'ArrowLeft3Linear';
ArrowLeft3Linear.inheritAttrs = false;
export default ArrowLeft3Linear;