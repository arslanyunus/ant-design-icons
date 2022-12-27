// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Mouse1LinearSvg from '@ant-design/icons-svg/lib/asn/Mouse1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Mouse1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Mouse1Linear: Mouse1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Mouse1LinearSvg}></AntdIcon>;
};

Mouse1Linear.displayName = 'Mouse1Linear';
Mouse1Linear.inheritAttrs = false;
export default Mouse1Linear;