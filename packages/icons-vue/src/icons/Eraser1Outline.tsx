// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Eraser1OutlineSvg from '@ant-design/icons-svg/lib/asn/Eraser1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Eraser1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Eraser1Outline: Eraser1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Eraser1OutlineSvg}></AntdIcon>;
};

Eraser1Outline.displayName = 'Eraser1Outline';
Eraser1Outline.inheritAttrs = false;
export default Eraser1Outline;