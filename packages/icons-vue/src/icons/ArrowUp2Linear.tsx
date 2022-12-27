// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowUp2LinearSvg from '@ant-design/icons-svg/lib/asn/ArrowUp2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowUp2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowUp2Linear: ArrowUp2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowUp2LinearSvg}></AntdIcon>;
};

ArrowUp2Linear.displayName = 'ArrowUp2Linear';
ArrowUp2Linear.inheritAttrs = false;
export default ArrowUp2Linear;