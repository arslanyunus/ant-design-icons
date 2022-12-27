// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Eraser1LinearSvg from '@ant-design/icons-svg/lib/asn/Eraser1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Eraser1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Eraser1Linear: Eraser1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Eraser1LinearSvg}></AntdIcon>;
};

Eraser1Linear.displayName = 'Eraser1Linear';
Eraser1Linear.inheritAttrs = false;
export default Eraser1Linear;