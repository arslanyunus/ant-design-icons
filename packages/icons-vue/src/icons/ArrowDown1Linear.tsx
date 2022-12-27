// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowDown1LinearSvg from '@ant-design/icons-svg/lib/asn/ArrowDown1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowDown1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowDown1Linear: ArrowDown1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowDown1LinearSvg}></AntdIcon>;
};

ArrowDown1Linear.displayName = 'ArrowDown1Linear';
ArrowDown1Linear.inheritAttrs = false;
export default ArrowDown1Linear;