// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Maximize3OutlineSvg from '@ant-design/icons-svg/lib/asn/Maximize3Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Maximize3OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Maximize3Outline: Maximize3OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Maximize3OutlineSvg}></AntdIcon>;
};

Maximize3Outline.displayName = 'Maximize3Outline';
Maximize3Outline.inheritAttrs = false;
export default Maximize3Outline;