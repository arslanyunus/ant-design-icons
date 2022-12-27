// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Eraser1BrokenSvg from '@ant-design/icons-svg/lib/asn/Eraser1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Eraser1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Eraser1Broken: Eraser1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Eraser1BrokenSvg}></AntdIcon>;
};

Eraser1Broken.displayName = 'Eraser1Broken';
Eraser1Broken.inheritAttrs = false;
export default Eraser1Broken;