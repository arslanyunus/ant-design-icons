// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PenRemove1LinearSvg from '@ant-design/icons-svg/lib/asn/PenRemove1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PenRemove1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PenRemove1Linear: PenRemove1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenRemove1LinearSvg}></AntdIcon>;
};

PenRemove1Linear.displayName = 'PenRemove1Linear';
PenRemove1Linear.inheritAttrs = false;
export default PenRemove1Linear;