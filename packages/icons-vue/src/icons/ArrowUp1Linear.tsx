// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowUp1LinearSvg from '@ant-design/icons-svg/lib/asn/ArrowUp1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowUp1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowUp1Linear: ArrowUp1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowUp1LinearSvg}></AntdIcon>;
};

ArrowUp1Linear.displayName = 'ArrowUp1Linear';
ArrowUp1Linear.inheritAttrs = false;
export default ArrowUp1Linear;