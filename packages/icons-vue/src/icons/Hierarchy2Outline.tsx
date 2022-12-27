// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Hierarchy2OutlineSvg from '@ant-design/icons-svg/lib/asn/Hierarchy2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Hierarchy2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Hierarchy2Outline: Hierarchy2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Hierarchy2OutlineSvg}></AntdIcon>;
};

Hierarchy2Outline.displayName = 'Hierarchy2Outline';
Hierarchy2Outline.inheritAttrs = false;
export default Hierarchy2Outline;