// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Eraser2LinearSvg from '@ant-design/icons-svg/lib/asn/Eraser2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Eraser2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Eraser2Linear: Eraser2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Eraser2LinearSvg}></AntdIcon>;
};

Eraser2Linear.displayName = 'Eraser2Linear';
Eraser2Linear.inheritAttrs = false;
export default Eraser2Linear;