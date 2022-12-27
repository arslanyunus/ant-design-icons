// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowLeft2LinearSvg from '@ant-design/icons-svg/lib/asn/ArrowLeft2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowLeft2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowLeft2Linear: ArrowLeft2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowLeft2LinearSvg}></AntdIcon>;
};

ArrowLeft2Linear.displayName = 'ArrowLeft2Linear';
ArrowLeft2Linear.inheritAttrs = false;
export default ArrowLeft2Linear;