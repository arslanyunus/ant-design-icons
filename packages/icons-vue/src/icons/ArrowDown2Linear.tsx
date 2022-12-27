// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowDown2LinearSvg from '@ant-design/icons-svg/lib/asn/ArrowDown2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowDown2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowDown2Linear: ArrowDown2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowDown2LinearSvg}></AntdIcon>;
};

ArrowDown2Linear.displayName = 'ArrowDown2Linear';
ArrowDown2Linear.inheritAttrs = false;
export default ArrowDown2Linear;