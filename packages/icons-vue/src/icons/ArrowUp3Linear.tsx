// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowUp3LinearSvg from '@ant-design/icons-svg/lib/asn/ArrowUp3Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowUp3LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowUp3Linear: ArrowUp3LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowUp3LinearSvg}></AntdIcon>;
};

ArrowUp3Linear.displayName = 'ArrowUp3Linear';
ArrowUp3Linear.inheritAttrs = false;
export default ArrowUp3Linear;