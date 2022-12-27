// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Maximize21OutlineSvg from '@ant-design/icons-svg/lib/asn/Maximize21Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Maximize21OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Maximize21Outline: Maximize21OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Maximize21OutlineSvg}></AntdIcon>;
};

Maximize21Outline.displayName = 'Maximize21Outline';
Maximize21Outline.inheritAttrs = false;
export default Maximize21Outline;